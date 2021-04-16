import loadProfile from '../common/load-profile.js';
import { getTheUser } from '../data/api.js';
import scoreGold from './score-gold.js';
import scoreHp from './score-hp.js';



loadProfile();

const user = getTheUser();

const hpResult = scoreHp(user.booger);
const goldResult = scoreGold(user.gold);

let goldMessages = null;
if (hpResult === 'dead') {
    goldMessages = deadGoldMessages;
}
else {
    goldMessages = aliveGoldMessages;
}

const goldMessage = goldMessages[goldResult];
