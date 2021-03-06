import findById from '../common/find-by-id.js';
import quests from '../data/data.js';
import { saveTheUser, getTheUser } from '../data/api.js';
import loadProfile from '../common/load-profile.js';
import createChoice from './create-choice.js';
import scoreQuest from './score-quest.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);

const questId = searchParams.get('id');

const quest = findById(quests, questId);

if (!quest) {
    window.location = '../map';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
const audio = document.getElementById('audio');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

title.textContent = quest.title;
image.src = '../assets/quest/' + quest.image;
audio.src = '../assets/quest/' + quest.audio;
description.textContent = quest.description;

for (let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];

    const choiceDOM = createChoice(choice);

    choices.appendChild(choiceDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);

    const user = getTheUser();

    scoreQuest(choice, quest.id, user);

    saveTheUser(user);

    audio.src = '../assets/quests/' + quest.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.result;

    loadProfile();


});





