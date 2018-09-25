class Bar {
    constructor(value) {
        this.value = value;
    }

    show() {
        console.log(this.value);
    }
}

const firstBar = new Bar();
console.log(firstBar);
const secondBar = new Bar('foo');
secondBar.show();
