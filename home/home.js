import { saveTheUser } from '../data/api.js';
import makeUser from './make-user.js';



const userSignUp = document.getElementById('user-sign-up');


userSignUp.addEventListener('submit', function (event) {

    event.preventDefault();

    const formData = new FormData(userSignUp);

    const user = makeUser(formData);

    saveTheUser(user);

    window.location = 'map';

});