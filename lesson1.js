const harry = {
    firstName: "Harry",
    lastName: "Potter",
    hairColor:"black",
};
const hermione = {
    firstName: "Hermione",
    lastName: "Granger",
    hairColor:"brown",
};
const ron = {
    firstName: "Ron",
    lastName: "Weasley",
    hairColor:"red",
};
/*
const harryElement = getCharacterElementById("harry");
setCharacteristicsToElement(harry, harryElement);

const hermioneElement = getCharacterElementById("hermione");
setCharacteristicsToElement(hermione, hermioneElement);

const ronElement = getCharacterElementById("ron");
setCharacteristicsToElement(ron, ronElement);


getCharacterElementById('harry');
*/
const createButton = document.createElement('button');
createButton.innerText= 'Render';
document.body.appendChild(createButton);
createButton.addEventListener('click', () => {
    const setCharacteristicsToElementByFirstnameAsId = (person) => {
        const personElement = document.getElementById(person.firstName.toLowerCase());
        personElement.innerHTML = person.firstName + " " + person.lastName;
        personElement.style = "color: " + person.hairColor;
    };
    setCharacteristicsToElementByFirstnameAsId(harry);
    setCharacteristicsToElementByFirstnameAsId(hermione);
    setCharacteristicsToElementByFirstnameAsId(ron); 
})


