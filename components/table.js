class Table {
    data;
    tableElement;
    tHeadElement;
    tBodyElement;

    constructor(tableDataArrOfObj) {
        this.data = tableDataArrOfObj;
        this.create();
        this.createHead();
        this.createBody();
    }

    create() {
        this.tableElement = document.createElement('table');
        this.tableElement.classList.add(
            'table',
            'table-hover',
            'table-striped',
            'text-center'
        );
    }

    createHead() {
        this.tHeadElement = document.createElement('thead');
        const trElement = document.createElement('tr');
        trElement.classList.add('text-uppercase');
        for (let key in this.data[0]) {
            const thElement = document.createElement('th');
            thElement.scope = 'col';
            thElement.textContent = key.split('_').join(' ');
            trElement.append(thElement);
        }
        this.tHeadElement.append(trElement);
        this.tableElement.insertAdjacentElement(
            'afterbegin',
            this.tHeadElement
        );
    }

    createBody() {
        this.tBodyElement = document.createElement('tbody');
        this.data.forEach((dataObj) => {
            const trElement = document.createElement('tr');
            for (let key in dataObj) {
                const tdElement = document.createElement('td');
                tdElement.textContent = dataObj[key];
                trElement.append(tdElement);
            }
            this.tBodyElement.append(trElement);
        });
        this.tableElement.insertAdjacentElement('beforeend', this.tBodyElement);
    }

    inserOnDocument(tableContainerElementId) {
        const tableContainerElement = document.getElementById(
            tableContainerElementId
        );
        tableContainerElement.append(this.tableElement);
    }
}

export default Table;
