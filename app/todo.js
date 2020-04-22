class todo {
    userId = null;
    id = null;
    title = '';
    completed = false;

    constructor(todoData) {
        Object.assign(this, todoData);
    }
    render() {

        const container = document.createElement('div');
        container.id = 'todo-' + this.id;
        container.style.borderTop = 'solid black 1px';

        const nameEl = document.createElement('h2');
        nameEl.innerHTML = this.title;
        container.appendChild(nameEl);

        const posterEl = document.createElement('code');
        posterEl.innerHTML = 'completed :' + (this.completed ? 'Completed!' : 'Not Completed yet !');
        container.appendChild(posterEl);

        const bodyEl = document.createElement('p');
        bodyEl.innerHTML = this.title;
        container.appendChild(bodyEl);

        return container;
    }
}