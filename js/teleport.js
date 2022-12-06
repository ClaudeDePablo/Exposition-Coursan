let targetX;
let targetZ;

let posTargetX;
let posTargetZ;

let ease = 0.05;
let valX = 0;
let valZ = 0;

let rotate = false;
let camera = document.querySelector('#cam-rig');


AFRAME.registerComponent('teleport', {

    init: function () {
        let cam = document.getElementById('#cam');
        // on instancie les points de téléportation
        let points = document.querySelectorAll('.teleport');
        let rotate = false;
        let soundOfTeleportation = document.querySelector('#teleportation_son');
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
                    z:posZ+0.2
                });
                soundOfTeleportation.volume="0.2";
                soundOfTeleportation.play();
            })
        };

    }   



})