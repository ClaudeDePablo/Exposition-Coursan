

let toutesLesPhotos = document.querySelectorAll('.photo-expo');



toutesLesPhotos.forEach ((element) => {


    element.addEventListener ('mouseenter', ()=> {
        element.setAttribute('color', "aqua");
    });

    element.addEventListener ('mouseleave', ()=> {
        element.setAttribute('color', "white");
    });

    element.addEventListener('click', () => {
        
console.log(leftController.object3D);

        let elementClone = element.cloneNode();
        elementClone.setAttribute('scale', {x:0.5,y:0.5,z:0.5});
        elementClone.setAttribute('color', "white");
        elementClone.setAttribute('position', {
            x:0,
            y:0,
            z:0.011
        });

        if (leftControllerScreen.hasChildNodes()) {
            leftControllerScreen.removeChild(leftControllerScreen.firstChild);
            leftControllerScreen.append(elementClone);

        }
        leftControllerScreen.append(elementClone);

    })

})

