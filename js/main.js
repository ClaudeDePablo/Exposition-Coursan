// ecoute des controllers VR

let leftControllerScreen = document.querySelector('#left-hand-screen');
let sc = document.querySelector('a-scene');
let camera = document.querySelector('#cam-rig');

let screenText = document.createElement('a-plane');
screenText.setAttribute('width', 1);
screenText.setAttribute('height', 0.5);
screenText.setAttribute('material', 'color', 'lime');
leftControllerScreen.append(screenText);
let textControle = document.createElement('a-text');

screenText.append(textControle);

console.log(sc.object3D)


document.addEventListener('keypress', (e) => {
    console.log('ok')
    
    

})