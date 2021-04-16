// quests[0].choices[0].description; ==> 'negotiate with them'


const gods = {
    id: 'gods',
    title: 'Clash of the Gods',
    map: {
        top: '10%',
        left: '40%'
    },
    image: 'gods.png',
    description: `
        You enter the quest chamber only to be confronted by a hoard of
        monsters. And they look hungry. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the monsters are not too bright, you offer to go buy them all
            turkey dinners from the village pub. They give you 35 gold for meals
            that will never be delivered. I hope you can live with yourself. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            Brandishing your sword you let out a warrior's cry and charge into the monsters
            hacking and slashing. Before long you stand panting gazing across the bodies of
            your vanquished foes. The bad news is you take 30 hp damage. The good news is you
            find 50 gold.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Run away like good Sir Robin',
        result: `
            As you make a dash for the door a giant spider descends and take a bite of flesh,
            causing 50 hp damage.
        `,
        hp: -50,
        gold: 0
    }]
};

const minotaur = {
    id: 'minotaur',
    title: 'Minotaur Labryinth',
    map: {
        top: '57%',
        left: '36%'
    },
    image: 'minotaur.jpg',
    //audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
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
    title: 'Visit Oracle for blessings',
    map: {
        top: '34%',
        left: '70%'
    },
    prerequisites: ['dragon', 'gods'],
    image: 'oracle.jpg',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        You visit a temp you meet an Orcale in Olympus. You are advised 3 blessings from 3 Greek Gods. Choose your blessing.
    `,
    choices: [{
        id: 'Aphrodite',
        description: 'Aphrodites Beauty',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'Ares',
        description: 'Ares strength',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
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