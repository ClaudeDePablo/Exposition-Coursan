

let toutesLesPhotos = document.querySelectorAll('.photo-expo');
let leftControllerScreen = document.querySelector('#left-hand-screen');

console.log(toutesLesPhotos);


toutesLesPhotos.forEach ((element) => {


    element.addEventListener ('mouseenter', ()=> {
    });

    element.addEventListener ('mouseleave', ()=> {
    });

    element.addEventListener('click', () => {

        let elementClone = element.cloneNode();
        elementClone.setAttribute('color', "white");
        elementClone.setAttribute('scale', {x:0.5,y:0.5,z:0.5});

        leftControllerScreen.append(elementClone);

    })

})

