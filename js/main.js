const background = document.querySelector('body');
const button = document.querySelector('button');
console.log(background, button);

button.addEventListener('click', () => {

    function colorMix() {

        const mix = [red, blue, yellow, green]

        const random = mix[Math.floor(Math.random * mix.length)]

        return random
    }
    background.style.backgroundColor = random
})