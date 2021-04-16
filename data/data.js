// quests[0].choices[0].description; ==> 'negotiate with them'


const gods = {
    id: 'gods',
    title: 'Mount Olympus',
    map: {
        top: '10%',
        left: '40%'
    },
    image: 'gods.png',
    description: `
        You climbed mount Olympus, and got caught in the middle of a clash between the Greek Gods. It's wild up up here. 
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Because you're such a good peacemaker, and flexed your communication skills, Zeus gives you 35 gold.
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You didn't last a chance and took a -30 damage hit, but you found 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Pretend you saw nothing ',
        result: `
            They saw you, and couldn't let you get away. You took a -50 damage hit.
        `,
        hp: -50,
        gold: 0
    }]
};

const minotaur = {
    id: 'minotaur',
    title: 'Labryinth',
    map: {
        top: '57%',
        left: '36%'
    },
    image: 'minotaur.jpg',
    //audio: 'dragon.wav',
    //action: 'dragon-growl.aiff',
    description: `
        Navigating the labryinth, you keep hearing scary sounds echoing the walls. As you try to escape, the thumping sounds keep getting louder and louder. Eventually, you make the wrong turn and a minotaur is in front of you.
    `,
    choices: [{
        id: 'run',
        description: 'SKRTTT out the Labryinth',
        result: `
            You slide under the Minotaur but got scathed on your cheek from his hoof. You take a 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the Minotaur with your sword. The Minotaur swings his club, and you dodge. However, he grabs you with his right hand. You get pummeled and take -45 damage. 
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Offer a cookie',
        result: `
            You appeal to the Minotaur's senses, and his beastly quality melts away when he sees the cookie. You 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const oracle = {
    id: 'oracle',
    title: 'Holy Temple',
    map: {
        top: '34%',
        left: '70%'
    },
    prerequisites: ['dragon', 'gods'],
    image: 'oracle.jpg',
    //audio: 'treasure-chests.wav',
    //action: 'chest-opening.wav',
    description: `
        You visit a cool temple & meet an Orcale in Olympus. You are advised 3 blessings from 3 Greek Gods. Choose your blessing.
    `,
    choices: [{
        id: 'Aphrodite',
        description: 'Aphrodites Beauty',
        result: 'Because you are so beautiful now, a civilian gifted you 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'Ares',
        description: 'Ares strength',
        result: 'Too much of anything, especially strength is detrimental. You take a -50 damage hit because your body could not handle it',
        hp: -50,
        gold: 0
    }, {
        id: 'Athena',
        description: 'Athenas wisdom',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    gods, 
    oracle,
    minotaur,
];

export default quests;