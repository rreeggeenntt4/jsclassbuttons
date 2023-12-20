class ColorfulButton {
    constructor(buttonElement) {
        this.element = buttonElement;
        this.element.classList.add('colorful-button');
        this.element.addEventListener('click', this.onClickHandler);
    }
    onClickHandler() {
        this.element.transition = 'color 0.3s ease-out, background-color 0.3s ease-out';
        this.element.color = this.generateRandomColor();
        this.element.backgroundColor = this.generateRandomColor();
        await sleep(300); // Wait 0.3 seconds
        this.element.transition = '';
    }
    generateRandomColor() {
        const rgb = [
            generateRandomInt(0, 255),
            generateRandomInt(0, 255),
            generateRandomInt(0, 255),
        ];
        return 'rgb(${rgb.join()})';
    }
    generateRandomInt(start, end) {
        return Math.round(Math.random() * end + start);
    }
}
const buttons = document.querySelectorAll('button');
for (const button of buttons) {
    new ColorfulButton(button);
}