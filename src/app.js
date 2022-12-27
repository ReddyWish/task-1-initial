import {getRandomColor} from "./utilits";


export function initApp() {
    console.log('Hello world');

    const colorChangeButton = document.createElement('button')
    colorChangeButton.className = 'button'
    colorChangeButton.textContent = 'Изменить цвет страницы'
    document.body.append(colorChangeButton)

    colorChangeButton.addEventListener('click', (event) => {
        const {target} = event;
        document.body.style.backgroundColor = getRandomColor()
    })
}