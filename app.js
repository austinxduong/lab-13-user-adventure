import { setTheUser } from './local-storage-utils.js';
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');
    const userClass = data.get('class');

    const user = {
        hp: 35,
        gold: 0,
        name: name,
        class: userClass,
        completed: {}
    };

    setTheUser(user);

    window.location = './map';
});
