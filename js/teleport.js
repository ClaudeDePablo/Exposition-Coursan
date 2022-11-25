let targetX;
let targetZ;

let posTargetX;
let posTargetZ;

let camera = document.querySelector('#cam-rig');
let ease = 0.05;
let valX = 0;
let valZ = 0;

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
                posTargetX = points[i].object3D.position.x;
                posTargetZ = points[i].object3D.position.z;
                posTargetY = points[i].object3D.position.y;
                console.log(posTargetX, posTargetZ);
                camera.setAttribute('position', {
                    x:posTargetX,
                    y:posTargetY,
                    z:posTargetZ
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