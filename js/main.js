// ecoute des controllers VR

let leftControllerScreen = document.querySelector('#left-hand-screen');

let screenText = document.createElement('a-plane');
screenText.setAttribute('width', 1);
screenText.setAttribute('height', 0.5);
screenText.setAttribute('material', 'color', 'lime');
leftControllerScreen.append(screenText);
let textControle = document.createElement('a-text');

screenText.append(textControle);


function showCode(val) {
    console.log('ok')
    textControle.setAttribute('value', val);

}


document.addEventListener('keypress', (e) => {
    let val = str(e.keyCode);
    showCode(val)

})