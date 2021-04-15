// quests[0].choices[0].description; ==> 'negotiate with them'


const gods = {
    id: 'gods',
    title: 'Clash of the Gods',
    map: {
        top: '89%',
        left: '44%'
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
        top: '17%',
        left: '37%'
    },
    image: 'minotaur.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        Navigating the labryinth, you keep hearing scary sounds echoing the walls. As you try to escape, the thumping sounds keep getting louder and louder. Eventually, you make the wrong turn and a minotaur is in front of you.
    `,
    choices: [{
        id: 'run',
        description: 'SKRTTT out the Labryinth',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Offer a cookie',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const oracle = {
    id: 'oracle',
    title: 'Visit Oracle for blessings',
    map: {
        top: '31%',
        left: '5%'
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