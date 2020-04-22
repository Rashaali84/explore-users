class user {

    //Properties 

    id = null;
    name = '';
    username = '';
    email = '';
    populated = false;
    todos = [];

    constructor(userData) {
        Object.assign(this, userData);
    }
    populate() {
        //now it is time to populate 
        return fetch('https://jsonplaceholder.typicode.com/users/' + this.id + '/todos')
            .then(res => res.json())
            .then(todos => {
                this.todos = todos
                    .map(todoel => new todo(todoel));
                this.populated = true;
                return this;
            })
            .catch(err => console.error(err));
    }
    render() {

        const container = document.createElement('div');
        container.id = 'user id-' + this.id;

        const nameEl = document.createElement('h1');
        nameEl.innerHTML = this.username;
        container.appendChild(nameEl);

        const emailEl = document.createElement('code');
        emailEl.innerHTML = 'user-rmail: ' + this.email;
        container.appendChild(emailEl);


        const renderedTodos = this.todos
            .map(todo => todo.render())
            .reduce((all, next) => {
                all.appendChild(next);
                return all;
            }, document.createElement('div'));
        renderedTodos.id = 'comments';
        container.appendChild(renderedTodos);

        return container;



    }

}