document.addEventListener("DOMContentLoaded", () => {

    class ColorfulButton {
        constructor(buttonElement) {
            this.element = buttonElement;
            this.element.classList.add('colorful-button');
        }

        static sleep(t) {
            return new Promise(resolve => setTimeout(resolve, t));
        }

        async onClickHandle2() {
            this.element.style.transition = 'color 0.3s ease-out, background-color 0.3s ease-out';
            this.element.style.color = this.generateRandomColor();
            this.element.style.backgroundColor = this.generateRandomColor();
            await ColorfulButton.sleep(3000); // Wait 0.3 seconds
            this.element.style.transition = '';
        }
        generateRandomColor() {
            const rgb = [this.generateRandomInt(0, 255), this.generateRandomInt(0, 255), this.generateRandomInt(0, 255)];
            return `rgb(${rgb.join()})`;
        }
        generateRandomInt(start, end) {
            return Math.round(Math.random() * end + start);
        }
    }


    var buttons = document.querySelectorAll('button');
    var obj = [];
    buttons.forEach((elem, i) => {
        obj[i] = new ColorfulButton(elem);
        document.querySelectorAll('button')[i].onclick = function () {
            obj[i].onClickHandle2();
        }
    })

});