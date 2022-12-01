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
                camera.setAttribute('position', {
                    x:posX,
                    y:posY,
                    z:posZ
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