class ErrorCard {
    errorCardElement;
    imgElement;
    errorCardBodyElement;
    errorTitleElement;
    errorTextElement;
    constructor() {
        this.errorCardElement = this.createElement('div', [
            'card',
            'text-center',
            'col-lg-6',
            'col-sm-10',
            'm-y',
            'mx-auto',
            'p-5',
        ]);
        this.imgElement = this.createElement('img', ['w-25', 'mx-auto']);
        this.imgElement.src = './assets/seal-warning.svg';
        this.imgElement.alt = 'Warning icon';
        this.errorCardBodyElement = this.createElement('div', ['card-body']);
        this.errorTitleElement = this.createElement(
            'h2',
            ['card-title'],
            'Descuslpe! Algo deu errado'
        );
        this.errorTextElement = this.createElement(
            'p',
            ['card-text'],
            'Tente novamente mais tarde.'
        );
        this.errorCardBodyElement.append(
            this.errorTitleElement,
            this.errorTextElement
        );
        this.errorCardElement.append(
            this.imgElement,
            this.errorCardBodyElement
        );
    }

    createElement(elementStr, classArr, content) {
        const element = document.createElement(elementStr);
        if (classArr) element.classList.add(...classArr);
        if (content) element.textContent = content;
        return element;
    }

    insertOnDocument() {
        document.body.append(this.errorCardElement);
    }
}

export default ErrorCard;
