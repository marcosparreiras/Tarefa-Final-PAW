class WeatherCard {
    cardElement;
    cardBodyElement;
    cardTitleElement;
    cardTextDateElement;
    cardtextTempElement;
    cardtextDescriptionElement;
    constructor({ title, date, description, temperature }) {
        this.cardElement = this.createElement('div', [
            'card',
            'text-center',
            'bg-light',
            'mx-auto',
            'bg-gradient',
        ]);
        this.cardBodyElement = this.createElement('div', ['card-body']);
        this.cardTitleElement = this.createElement('h2', ['card-title'], title);
        this.cardTextDateElement = this.createElement(
            'p',
            ['card-text', 'fw-semibold', 'fs-6'],
            date
        );
        this.cardtextTempElement = this.createElement(
            'p',
            ['card-text', 'fw-bold', 'fs-2'],
            `${temperature}°C`
        );
        this.cardtextDescriptionElement = this.createElement(
            'p',
            ['card-text', 'fw-semibold', 'fs-4'],
            description
        );

        this.cardBodyElement.append(
            this.cardTitleElement,
            this.cardTextDateElement,
            this.cardtextTempElement,
            this.cardtextDescriptionElement
        );
        this.cardElement.append(this.cardBodyElement);
    }

    createElement(elementStr, classArr, content) {
        const element = document.createElement(elementStr);
        if (classArr) element.classList.add(...classArr);
        if (content) element.textContent = content;
        return element;
    }

    insertOnDocument(cardContainerId) {
        const cardContainerElement = document.getElementById(cardContainerId);
        cardContainerElement.append(this.cardElement);
    }
}

export default WeatherCard;
