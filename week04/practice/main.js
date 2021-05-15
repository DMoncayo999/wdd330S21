'use strict'
const form = document.forms[0];
class Item {
    constructor(name) {
        this.name = name;
    }
}
//event listener to the form to see when the user adds information
const controller = {
    watch(form) {
        form.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form.name.value);
        }, false);
    },
    add(name) {
        const item = new Item(name);
        view.render(item);
    }
};

//a view object that shows the instance’s name
const view = {
    render(item) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.innerHTML = item.name;
        list.appendChild(li);
        // reset the input field
        form.name.value = '';
    }
};

//method of the controller that keeps an eye on the form and checks when it is submitted
controller.watch(form);
