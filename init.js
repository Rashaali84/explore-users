window.onload = () => {
    document.getElementById('choose-todos-button')
        .onclick = (event) =>
            fetch('https://jsonplaceholder.typicode.com/users/' + event.target.form.UserId.value)
                .then(res => res.json())
                .then(userData => {
                    const newUser = new user(userData)
                    return newUser.populate();
                })
                .then(userInstance => {
                    console.log(userInstance);
                    const view = userInstance.render();
                    document.getElementById('root').innerHTML = '';
                    document.getElementById('root').appendChild(view);
                })
                .catch(err => console.error(err));
};