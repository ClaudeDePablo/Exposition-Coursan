let toutesLesPhotos = document.querySelectorAll('.photo-expo');

toutesLesPhotos.forEach ((element) => {


    element.addEventListener ('mouseenter', ()=> {
        element.setAttribute('color', "#c6ab91");
    });

    element.addEventListener ('mouseleave', ()=> {
        element.setAttribute('color', "white");
    });

    element.addEventListener('click', () => {
        
        let elementClone = element.cloneNode();
        elementClone.setAttribute('scale', {x:0.3,y:0.3,z:0.3});
        elementClone.setAttribute('color', "white");
        elementClone.setAttribute('position', {
            x:0 + elementClone.getAttribute('width') / 10,
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

