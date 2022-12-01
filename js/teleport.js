let targetX;
let targetZ;

let posTargetX;
let posTargetZ;

let ease = 0.05;
let valX = 0;
let valZ = 0;

let rotate = false;
// AFRAME.registerComponent('teleport', {


//     init: function () {
        
//         let points = document.querySelectorAll('.teleport');

//         for (let i=0; i<points.length; i++) {
            
//             points[i].addEventListener('mouseenter', function() {
//                 points[i].setAttribute('color', 'aqua');
//             })

//             points[i].addEventListener('mouseleave', function() {
//                 points[i].setAttribute('color', 'white');
//             })          
              
//             points[i].addEventListener('click', function() {
//                 posX = points[i].object3D.position.x;
//                 posZ = points[i].object3D.position.z;
//                 posY = points[i].object3D.position.y;
//                 camera.setAttribute('position', {
//                     x:posX,
//                     y:posY,
//                     z:posZ
//                 })

//             })
//         };

//     },

//     update: function() {       

//             let posCameraX = camera.object3D.position.x;
//             let posCameraZ = camera.object3D.position.z;

//             let dx = posTargetX - posCameraX;
//             let dz = posTargetZ - posCameraZ;

//             let targetX = dx * ease;
//             let targetZ = dz * ease;
            
//         camera.object3D.position.x -= targetX;
//         camera.object3D.position.z -= targetZ;

//     },


//     tick: function() {



        
//     }



// })

AFRAME.registerComponent('teleport', {

    init: function () {
        let cam= document.getElementById('#cam');
        // on instancie les points de téléportation
        let points = document.querySelectorAll('.teleport');
        let rotate = false;
        // animation de la cible de téléportation
        function rotativeCible (el) {
            let rotationInterval = setInterval(() => {
                if (rotate == true) {
                el.object3D.rotation.z += 1;
                } else {
                    clearInterval (rotationInterval);
                    el.object3D.rotation.z = 0;
                }
            }, 60);

        }
        // on parcours tout les points de téléport rangés dans un tableau
        for (let i=0; i<points.length; i++) {
            // si la souris survole une cible
            points[i].addEventListener('mouseenter', function() {
                points[i].setAttribute('color', 'aqua');
                rotate = true;
                rotativeCible(points[i]);
            });
            // si la souris sort de la cible
            points[i].addEventListener('mouseleave', function() {
                points[i].setAttribute('color', 'white');
                points[i].setAttribute("src", "#footstep");
                rotate = false;
                rotativeCible(points[i]);
            })          
            // si la souris clique sur une cible
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

    },

    update: function() {       


    },


    tick: function() {



        
    },

   



})