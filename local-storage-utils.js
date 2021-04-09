const USER = 'USER';

export function getTheUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}





//export function setUser(user) {
    //const stringyUser = JSON.stringify(user);

    //localStorage.setItem(USER, stringyUser);
//}