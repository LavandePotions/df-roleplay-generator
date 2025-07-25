const characterObject = {
    hash: 0,
    name: '',
    gender: '',
    race: '',
    face: 0,
    background: [],
    class: {
        name: '',
        description: '',
        skills: {
            primary: [{}, {}, {}],
            major: [{}, {}, {}],
            minor: [{}, {}, {}, {}, {}, {}]
        },
        special: {
            value: 14,
            advantages: [],
            disadvantages: [],
            'max-hp-level': 8
        }
    },
    attributes: {
        strength: {
            text: '',
            value: 10,
            dmg: '',
            enc: ''
        },
        intelligence: {
            text: '',
            value: 10,
            spl: ''
        },
        willpower: {
            text: '',
            value: 10,
            mres: ''
        },
        agility: {
            text: '',
            value: 10,
            hit: ''
        },
        endurance: {
            text: '',
            value: 10,
            hp: '',
            hrat: ''
        },
        personality: {
            text: '',
            value: 10
        },
        speed: {
            text: '',
            value: 10
        },
        luck: {
            text: '',
            value: 10
        }
    },
    missions: []
};

window.onload = () => {
    console.log('Hello Nirn');

    translateUI();

    randomize();
};

async function randomize() {
    // Read df-data
    const raceArray = JSON.parse(JSON.stringify(races));
    const genderArray = JSON.parse(JSON.stringify(Object.entries(genders)));
    const nameObject = JSON.parse(JSON.stringify(nameRules));
    const missionsArray = JSON.parse(JSON.stringify(Object.entries(missions)));
    const attributesObject = JSON.parse(JSON.stringify(attributes));
    const skillArray = JSON.parse(JSON.stringify(skills));
    const advantagesArray = JSON.parse(JSON.stringify(Object.entries(specialClassAdvantages)));
    const disadvantagesArray = JSON.parse(JSON.stringify(Object.entries(specialClassDisadvantages)));
    const classNameObject = JSON.parse(JSON.stringify(classNameRules));

    cleanUI();

    randomCharacterInfos(raceArray, genderArray, nameObject);

    randomAttributesPointsRepartition(attributesObject);

    computeAttributesEffects();

    const randomness = document.getElementById('randomness').value;

    switch (randomness) {
        case 'coherent':
            coherentSkillsSelection(skillArray);
            break;

        default:
            randomSkillsSelection(skillArray);

            randomClassSpecial(advantagesArray, disadvantagesArray);

            randomClassName(classNameObject);

            randomMissionSelection(document.getElementById('missions-number').value, missionsArray);
            break;
    }

    console.log(characterObject);

    updateValueUI();

    updateTooltip();
}

function randomCharacterInfos(raceArray, genderArray, nameObject) {
    const raceIndex = Math.floor(Math.random() * raceArray.length);
    characterObject.race = raceArray[raceIndex];

    const genderIndex = Math.floor(Math.random() * genderArray.length);
    characterObject.gender = genderArray[genderIndex][0];

    characterObject.name = randomNameGenerationVanilla(nameObject);

    const faceIndex = Math.floor(Math.random() * 10);
    characterObject.face = faceIndex;
}

function randomNameGenerationVanilla(nameObject) {
    const prefixNameIndex = Math.floor(Math.random() * nameObject[characterObject.race.key][characterObject.gender].prefix.length);
    const suffixNameIndex = Math.floor(Math.random() * nameObject[characterObject.race.key][characterObject.gender].suffix.length);

    const prefixName = nameObject[characterObject.race.key][characterObject.gender].prefix[prefixNameIndex];
    const suffixName = nameObject[characterObject.race.key][characterObject.gender].suffix[suffixNameIndex];

    if (characterObject.race.key === 'redguard') {
        const vowelIndex = Math.floor(Math.random() * nameObject.redguard.vowel.length);
        const consonantIndex = Math.floor(Math.random() * nameObject.redguard.consonant.length);

        const vowel = nameObject.redguard.vowel[vowelIndex];
        const consonant = nameObject.redguard.consonant[consonantIndex];
        let name = prefixName + vowel + consonant;

        if (!Math.round(Math.random())) {
            name += suffixName;
        }

        if (characterObject.gender === 'female') {
            const finalSuffixIndex = Math.floor(Math.random() * nameObject.redguard.femaleFinalSuffix.length);
            const finalSuffix = nameObject.redguard.femaleFinalSuffix[finalSuffixIndex];
            name += finalSuffix;
        }

        return name;
    }

    const suffixFamillyIndex = Math.floor(Math.random() * nameObject[characterObject.race.key].familly.suffix.length);
    const prefixFamillyIndex = Math.floor(Math.random() * nameObject[characterObject.race.key].familly.prefix.length);

    const prefixFamilly = nameObject[characterObject.race.key].familly.prefix[prefixFamillyIndex];
    const suffixFamilly = nameObject[characterObject.race.key].familly.suffix[suffixFamillyIndex];

    const familly = prefixFamilly + suffixFamilly;
    const name = prefixName + suffixName;

    return name + ' ' + familly;
}

function randomAttributesPointsRepartition(attributesObject) {
    let sumFloatRepartition = 0;
    // each attributes get a random float
    for (const key in characterObject.attributes) {
        const value = Math.random();
        sumFloatRepartition += value;
        characterObject.attributes[key].value = value;
    }

    let sumIntRepartition = 0;
    // each attributes random float is clamp and converted to an int
    for (const key in characterObject.attributes) {
        const rawValue = characterObject.attributes[key].value / sumFloatRepartition * 320;
        let cleanValue = Math.floor(rawValue) + attributesObject.minAttributes;

        if (cleanValue > attributesObject.maxAttributes) {
            cleanValue = attributesObject.maxAttributes;
        }
        sumIntRepartition += cleanValue;
        characterObject.attributes[key].value = cleanValue;
        characterObject.attributes[key].text = key;
        characterObject.attributes[key].abbreviation = attributesObject[key].abbreviation;
        characterObject.attributes[key].enumeration = attributesObject[key].enumeration;
        characterObject.attributes[key].description = attributesObject[key].description;
    }

    const pointsRemaining = 50 * 8 - sumIntRepartition;
    let smallestAttribute = 'strength';
    // loop to find the smallest attributes and add to it the remainings points
    for (const key in characterObject.attributes) {
        if (characterObject.attributes[key].value < characterObject.attributes[smallestAttribute].value) {
            smallestAttribute = key;
        }
    }

    characterObject.attributes[smallestAttribute].value += pointsRemaining;
}

function computeAttributesEffects() {
    const dmgModifier = Math.trunc((characterObject.attributes.strength.value - 50) / 5);
    const dmgModifierSign = Math.sign(dmgModifier) === 1 ? '+' : '';
    characterObject.attributes.strength.dmg = dmgModifierSign + dmgModifier;
    characterObject.attributes.strength.enc = Math.floor(characterObject.attributes.strength.value * 1.5);

    characterObject.attributes.intelligence.spl = Math.trunc(characterObject.attributes.intelligence.value * 0.5);

    const mresModifier = Math.trunc((characterObject.attributes.willpower.value - 50) / 10);
    // const mresModifierSign = Math.sign(mresModifier) === 1 ? '+' : '';
    characterObject.attributes.willpower.mres = mresModifier;

    const hitModifier = Math.trunc((characterObject.attributes.agility.value - 50) / 10);
    const hitModifierSign = Math.sign(hitModifier) === 1 ? '+' : '';
    characterObject.attributes.agility.hit = hitModifierSign + hitModifier;

    const hpModifier = Math.trunc((characterObject.attributes.endurance.value - 50) / 10);
    const hpModifierSign = Math.sign(hpModifier) === 1 ? '+' : '';
    characterObject.attributes.endurance.hp = hpModifierSign + hpModifier;
    const hratModifier = Math.trunc(characterObject.attributes.endurance.value / 10);
    const hratModifierSign = Math.sign(hratModifier) === 1 ? '+' : '';
    characterObject.attributes.endurance.hrat = hratModifierSign + hratModifier;
}

function randomSkillsSelection(skillArray) {
    for (const type in characterObject.class.skills) {
        for (let index = 0; index < characterObject.class.skills[type].length; index++) {
            const randomIndex = Math.floor(Math.random() * skillArray.length);
            const randomSkill = skillArray[randomIndex];

            skillArray.splice(randomIndex, 1);

            let baseValue = 10;
            switch (type) {
                case 'primary':
                    baseValue = 25;
                    break;
                case 'major':
                    baseValue = 15;
                    break;
                default:
                    baseValue = 10;
                    break;
            }
            characterObject.class.skills[type][index] = randomSkill;
            const randomBonus = Math.floor(Math.random() * 4) + 3;
            characterObject.class.skills[type][index].value = baseValue + randomBonus;
        }
    }
}

function randomClassSpecial(advantagesArray, disadvantagesArray) {
    characterObject.class.special.value = 14; // neutral value

    const numberOfspecialClassAdvantages = Math.floor(Math.random() * 4) + 1;
    const numberOfspecialClassDisadvantages = numberOfspecialClassAdvantages + 2;

    // add advantages from race
    for (let index = 0; index < characterObject.race.advantages.length; index++) {
        const racialAdvantageObject = {
            text: characterObject.race.advantages[index],
            description: `Advantage from your ${characterObject.race.text} origin`
        };
        characterObject.class.special.advantages.push(racialAdvantageObject);
    }
    console.log('TODO : Add effect of racial Advantage');

    for (let index = 0; index < numberOfspecialClassAdvantages; index++) {
        const randomIndex = Math.floor(Math.random() * advantagesArray.length);
        const key = advantagesArray[randomIndex];

        let txt = key[0];

        if (key[1].suffix.length > 1) {
            const randomSuffix = Math.floor(Math.random() * key[1].suffix.length);
            txt += ' :\n' + Object.entries(key[1].suffix[randomSuffix])[0][0];

            characterObject.class.special.value += Object.entries(key[1].suffix[randomSuffix])[0][1];
        } else {
            characterObject.class.special.value += Object.entries(key[1].suffix[0])[0][1];
        }

        const advantageObject = {
            text: txt,
            description: key[1].description
        };

        let isDuplicate = false;
        characterObject.class.special.advantages.forEach(advantage => {
            if (advantage.text === txt) {
                isDuplicate = true;
            }
        });
        if (isDuplicate) {
            break;
        }
        characterObject.class.special.advantages.push(advantageObject);
    }

    for (let index = 0; index < numberOfspecialClassDisadvantages; index++) {
        const randomIndex = Math.floor(Math.random() * disadvantagesArray.length);
        const key = disadvantagesArray[randomIndex];

        let txt = key[0];

        if (key[1].suffix.length > 1) {
            const randomSuffix = Math.floor(Math.random() * key[1].suffix.length);
            txt += ' :\n' + Object.entries(key[1].suffix[randomSuffix])[0][0];

            characterObject.class.special.value += Object.entries(key[1].suffix[randomSuffix])[0][1];
        } else {
            characterObject.class.special.value += Object.entries(key[1].suffix[0])[0][1];
        }

        const disadvantageObject = {
            text: txt,
            description: key[1].description
        };

        let isDuplicate = false;
        characterObject.class.special.disadvantages.forEach(disadvantage => {
            if (disadvantage.text === txt) {
                isDuplicate = true;
            }
        });
        if (isDuplicate) {
            break;
        }
        characterObject.class.special.disadvantages.push(disadvantageObject);
    }

    if (characterObject.class.special.value < -12) {
        const difference = -12 + Math.abs(characterObject.class.special.value);
        characterObject.class.special['max-hp-level'] += difference;
        characterObject.class.special.value += difference;
    }
}

function randomClassName(classNameObject) {
    let highestKey = [];
    let highestValue = 0;

    Object.entries(characterObject.attributes).forEach(attribute => {
        if (attribute[1].value === highestValue) {
            highestKey.push(attribute[0]);
        }

        if (attribute[1].value > highestValue) {
            highestKey = [attribute[0]];
            highestValue = attribute[1].value;
        }
    });

    if (highestKey.length > 1) {
        highestKey = [highestKey[Math.floor(Math.random() * highestKey.length)]];
    }

    const enumerationIndex = computeAttributeEnumeration(characterObject.attributes[highestKey[0]].value);
    let attributePrefix = characterObject.attributes[highestKey[0]].enumeration[enumerationIndex];

    attributePrefix = capitalizeFirstLetter(attributePrefix);

    let tagsArray = [];
    tagsArray = tagsArray.concat(characterObject.class.skills.primary[0].tags);
    tagsArray = tagsArray.concat(characterObject.class.skills.primary[1].tags);
    tagsArray = tagsArray.concat(characterObject.class.skills.primary[2].tags);
    tagsArray = tagsArray.concat(characterObject.class.skills.major[0].tags);
    tagsArray = tagsArray.concat(characterObject.class.skills.major[1].tags);
    tagsArray = tagsArray.concat(characterObject.class.skills.minor[0].tags);

    const count = tagsArray.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    highestKey = [];
    highestValue = 0;

    Object.entries(count).forEach(tag => {
        if (tag[1] === highestValue) {
            highestKey.push(tag[0]);
        }

        if (tag[1] > highestValue) {
            highestKey = [tag[0]];
            highestValue = tag[1];
        }
    });

    if (highestKey.length > 1) {
        highestKey = [highestKey[Math.floor(Math.random() * highestKey.length)]];
    }

    const suffixArray = classNameObject[highestKey[0]];
    const skillSuffix = suffixArray[Math.floor(Math.random() * suffixArray.length)];

    characterObject.class.name = `${attributePrefix} ${skillSuffix}`;
    characterObject.class.description = 'Your random custom class';
}

function randomMissionSelection(number = 1, missionsArray) {
    const missionsSelectedArray = [];

    for (let index = 0; index < number; index++) {
        const missionIndex = Math.floor(Math.random() * missionsArray.length);
        const mission = missionsArray[missionIndex];

        const suffixIndex = Math.floor(Math.random() * mission[1].suffix.length);

        let missionString = mission[1].prefix;

        if (mission[1].prefix !== '') {
            missionString += ' ';
        }

        if (mission[0] === 'armor' || mission[0] === 'weapon') {
            const materialIndex = Math.floor(Math.random() * mission[1].material.length);
            missionString += mission[1].material[materialIndex] + ' ';
        } else if (mission[0] === 'house') {
            const houseIndex = Math.floor(Math.random() * mission[1].house.length);
            missionString += mission[1].house[houseIndex] + ' ';
        }

        missionString += mission[1].suffix[suffixIndex];
        missionString = capitalizeFirstLetter(missionString);

        missionsSelectedArray.push(missionString);
        missionsArray.splice(missionIndex, 1);
    }

    characterObject.missions = missionsSelectedArray;
}

function coherentSkillsSelection(skillArray) {
    console.log('TODO: coherent Skills Selection');
}

function updateValueUI() {
    // update character infos
    document.getElementById('character-gender').value = characterObject.gender;
    document.getElementById('character-race').value = characterObject.race.key;
    document.getElementById('character-name').setAttribute('value', characterObject.name);
    document.getElementById('character-face').setAttribute('src', 'resources/images/faces/' + characterObject.race.key + '/' + characterObject.gender + '/' + characterObject.face + '-0.PNG');
    document.getElementById('character-class-name').setAttribute('value', characterObject.class.name);

    // populate missions
    for (let index = 0; index < characterObject.missions.length; index++) {
        const newMission = document.createElement('span');

        const txt = characterObject.missions[index];
        newMission.innerHTML = txt;

        document.getElementById('missions-container').insertAdjacentElement('afterbegin', newMission);
    }

    // update attributes
    for (const key in characterObject.attributes) {
        document.getElementById(key + '-value').innerHTML = characterObject.attributes[key].value;
    }

    // update attributes effects
    document.getElementById('strength-effects-dmg').value = characterObject.attributes.strength.dmg;
    document.getElementById('strength-effects-enc').value = characterObject.attributes.strength.enc;
    document.getElementById('intelligence-effects-spl').value = characterObject.attributes.intelligence.spl;
    document.getElementById('willpower-effects-mres').value = characterObject.attributes.willpower.mres;
    document.getElementById('agility-effects-hit').value = characterObject.attributes.agility.hit;
    document.getElementById('endurance-effects-hp').value = characterObject.attributes.endurance.hp;
    document.getElementById('endurance-effects-hrat').value = characterObject.attributes.endurance.hrat;

    // update skills
    for (const type in characterObject.class.skills) {
        for (let index = 0; index < characterObject.class.skills[type].length; index++) {
            const elementId = type + '-' + (index + 1);
            document.getElementById(elementId).innerHTML = characterObject.class.skills[type][index].name;

            const tooltipSkill = document.createElement('span');
            tooltipSkill.classList.add('tooltiptext', 'tooltiptext-left');
            const tooltipSkillDescription = document.createTextNode(characterObject.class.skills[type][index].description);
            tooltipSkill.appendChild(tooltipSkillDescription);

            document.getElementById(elementId).appendChild(tooltipSkill);
        }
    }

    // update skills value
    let index = 1;
    for (const key in characterObject.class.skills.primary) {
        document.getElementById('primary-' + index + '-number').value = characterObject.class.skills.primary[key].value;
        index++;
    }

    index = 1;
    for (const key in characterObject.class.skills.major) {
        document.getElementById('major-' + index + '-number').value = characterObject.class.skills.major[key].value;
        index++;
    }

    index = 1;
    for (const key in characterObject.class.skills.minor) {
        document.getElementById('minor-' + index + '-number').value = characterObject.class.skills.minor[key].value;
        index++;
    }

    // populate advantages
    for (let index = 0; index < characterObject.class.special.advantages.length; index++) {
        const newAdvantage = document.createElement('span');
        newAdvantage.innerHTML = characterObject.class.special.advantages[index].text;
        newAdvantage.classList.add('tooltip');
        const newAdvantageTooltip = document.createElement('span');
        newAdvantageTooltip.innerHTML = characterObject.class.special.advantages[index].description;
        newAdvantageTooltip.classList.add('tooltiptext', 'tooltiptext-left');
        newAdvantage.appendChild(newAdvantageTooltip);
        document.getElementById('special-advantages').insertAdjacentElement('beforeend', newAdvantage);
    }

    // populate disadvantages
    for (let index = 0; index < characterObject.class.special.disadvantages.length; index++) {
        const newDisadvantage = document.createElement('span');
        newDisadvantage.innerHTML = characterObject.class.special.disadvantages[index].text;
        newDisadvantage.classList.add('tooltip');
        const newDisadvantageTooltip = document.createElement('span');
        newDisadvantageTooltip.innerHTML = characterObject.class.special.disadvantages[index].description;
        newDisadvantageTooltip.classList.add('tooltiptext', 'tooltiptext-left');
        newDisadvantage.appendChild(newDisadvantageTooltip);
        document.getElementById('special-disadvantages').insertAdjacentElement('beforeend', newDisadvantage);
    }

    // update class special
    document.getElementById('max-hp-level').setAttribute('value', characterObject.class.special['max-hp-level']);
    document.getElementById('special-ad-range').setAttribute('value', characterObject.class.special.value);
}

function updateTooltip() {
    // race
    document.getElementById('character-race-description').innerHTML = characterObject.race.description;
    // class
    document.getElementById('character-class-description').innerHTML = characterObject.class.description;
    // attributes
    Object.entries(characterObject.attributes).forEach(attribute => {
        const adjective = attribute[1].enumeration[computeAttributeEnumeration(attribute[1].value)];
        const suffixDescription = `At ${attribute[1].value} you are considered ${adjective}.`;

        document.getElementById(attribute[0] + '-description').innerHTML = attribute[1].description;
        const pDescription = document.createElement('p');
        pDescription.innerHTML = suffixDescription;
        document.getElementById(attribute[0] + '-description').appendChild(pDescription);
    });
    // attributes effects
    console.log('TODO : Add attributes effects Tooltips');
    // document.getElementById('strength' + '-effect-' + 'enc' + 'description').innerHTML = characterObject.attributes.strength.enc.description;
}

function cleanUI() {
    // remove all previous missions
    characterObject.missions = [];
    const missionsContainer = document.getElementById('missions-container');
    while (missionsContainer.lastElementChild) {
        missionsContainer.removeChild(missionsContainer.lastElementChild);
    }

    //  remove all previous advantages/disavantages
    characterObject.class.special.advantages = [];
    characterObject.class.special.disadvantages = [];
    characterObject.class.special['max-hp-level'] = 8;

    const advantagesRootNode = document.getElementById('special-advantages');
    while (advantagesRootNode.lastElementChild) {
        advantagesRootNode.removeChild(advantagesRootNode.lastElementChild);
    }

    const disadvantagesRootNode = document.getElementById('special-disadvantages');
    while (disadvantagesRootNode.lastElementChild) {
        disadvantagesRootNode.removeChild(disadvantagesRootNode.lastElementChild);
    }

    document.getElementById('max-hp-level').setAttribute('value', 8);
}

function computeAttributeEnumeration(attributeValue) {
    if (attributeValue >= 1 && attributeValue <= 9) {
        return 0;
    } else if (attributeValue >= 10 && attributeValue <= 19) {
        return 1;
    } else if (attributeValue >= 20 && attributeValue <= 29) {
        return 2;
    } else if (attributeValue >= 30 && attributeValue <= 39) {
        return 3;
    } else if (attributeValue >= 40 && attributeValue <= 49) {
        return 4;
    } else if (attributeValue >= 50 && attributeValue <= 59) {
        return 5;
    } else if (attributeValue >= 60 && attributeValue <= 69) {
        return 6;
    } else if (attributeValue >= 70 && attributeValue <= 79) {
        return 7;
    } else if (attributeValue >= 80 && attributeValue <= 89) {
        return 8;
    } else {
        return 9;
    }
}

function translateUI() {
    console.log('TODO : Translation');
}

function capitalizeFirstLetter(lowerCaseString) {
    const firstLetter = lowerCaseString.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = lowerCaseString.slice(1);

    return firstLetterCap + remainingLetters;
}

function updateRandomnessTooltip(randomnessValue) {
    document.getElementById('randomness-description').innerHTML = randomness[randomnessValue].description;
}

function unfoldSettings() {
    if (document.getElementById('settings').classList.contains('folded')) {
        document.getElementById('settings').setAttribute('class', 'unfolded');
    } else {
        document.getElementById('settings').setAttribute('class', 'folded');
    }
}
