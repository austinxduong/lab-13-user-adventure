const USER = 'USER';

export function getTheUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}


export function setTheUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}




export function updateUserGivenChoice(questId, choice) {

    const user = getTheUser();

    user.hp += choice.hp;

    user.gold += choice.gold;

    user.completed[questId] = true;

    setTheUser(user);

}
