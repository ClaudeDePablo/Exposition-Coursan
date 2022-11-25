let targetX;
let targetZ;

let posTargetX;
let posTargetZ;

let ease = 0.05;
let valX = 0;
let valZ = 0;

// function getPosCamera() {
//     setInterval(() => {
//         let posCamera = camera.getAttribute('position');
//         let rotCamera = camera.getAttribute('rotation');
//         console.log(posCamera, rotCamera);
        
//     }, 1000);
// }
// getPosCamera()


AFRAME.registerComponent('teleport', {


    init: function () {
        
        let points = document.querySelectorAll('.teleport');

        for (let i=0; i<points.length; i++) {
            
            points[i].addEventListener('mouseenter', function() {
                points[i].setAttribute('color', 'aqua');
            })

            points[i].addEventListener('mouseleave', function() {
                points[i].setAttribute('color', 'white');
            })          
              
            points[i].addEventListener('click', function() {
                posX = points[i].object3D.position.x;
                posZ = points[i].object3D.position.z;
                posY = points[i].object3D.position.y;

                posParentX = points[i].object3D.parent.position.x;
                posParentZ = points[i].object3D.parent.position.z;
                posParentY = points[i].object3D.parent.position.y;

                posGrandParentX = points[i].object3D.parent.parent.position.x;
                posGrandParentZ = points[i].object3D.parent.parent.position.z;
                posGrandParentY = points[i].object3D.parent.parent.position.y;

                posTargetX = posGrandParentX - posParentX - posX
                posTargetZ = posGrandParentY - posParentY - posY
                posTargetY = posGrandParentZ - posParentZ - posZ

                rotX = points[i].object3D.rotation.x;
                rotZ = points[i].object3D.rotation.z;
                rotY = points[i].object3D.rotation.y;

                console.log(posX, posParentX, posGrandParentX);
                console.log(points[i].object3D.parent.rotation.x,points[i].object3D.parent.parent.rotation.y);
                camera.setAttribute('position', {
                    x:posTargetX,
                    y:posTargetY,
                    z:posTargetZ
                })
                camera.setAttribute('rotation', {
                    x:rotTargetX,
                    y:rotTargetZ,
                    z:rotTargetY
                })

            })
        };

        // function moveCamera(target) {
        //     console.log(target)


    
        //     camera.object3D.position.x += vx;
        //     camera.object3D.position.z += vz;

        //     window.requestAnimationFrame(moveCamera);

        // }

    },

    update: function() {       

            let posCameraX = camera.object3D.position.x;
            let posCameraZ = camera.object3D.position.z;

            let dx = posTargetX - posCameraX;
            let dz = posTargetZ - posCameraZ;

            let targetX = dx * ease;
            let targetZ = dz * ease;
            
        camera.object3D.position.x -= targetX;
        camera.object3D.position.z -= targetZ;

    },


    tick: function() {



        
    }



})

AFRAME.registerComponent('position-cam', {

    init: function() {

    },

    update: function() {
        
    },

    tick: function() {
        

    }
})