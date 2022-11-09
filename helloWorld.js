/*
  Write a function that takes in 2 numbers
  Adds them together
  Prints or alerts the answer
*/

const numberOne = 10;
const numberTwo = 20;
const num3 = 40;

const calcSum = (num1 = 0, num2 = 0) => num1 + num2;

console.log(calcSum(20, 50));

const sum = calcSum(10, 100);
console.log(sum);
// alert(sum);

// Objects
// key: value pair
const person = {
  name: "gunnsteinn",
  age: 29,
  numberOfArms: 10,
  numberOfFingers: 2,
  brother: "darri",
  facialAttributes: {
    hair: "curls",
    eyes: "blue",
    person: {
      name: "gunnsteinn",
      age: 29,
      numberOfArms: 10,
      numberOfFingers: 2,
      brother: "darri",
      facialAttributes: {
        hair: "curls",
        eyes: "blue",
      },
    },
  },
};

const makePersonHaveABirthday = () => {
  person.age = person.age + 1;
};

const givePersonLegs = () => {
  person.legs = 2;
};
givePersonLegs();
makePersonHaveABirthday();
console.log(person);

console.log(person.facialAttributes.eyes);

// Arrays
const array = [1, 2, 3, 4];

console.log(array);
array[0] = 10;
console.log(array);
array[4] = 0;
console.log(array);
array.push("Soemthing else");
console.log(array);
array[-34] = "G";
console.log(array);

person["age"] = 20;
console.log(person);

// Element selectors

const personOneElement = document.getElementById("personOne");
const personTwoElement = document.getElementById("personTwo");
const personThreeElement = document.getElementById("personThree");

personOneElement.innerHTML = personOneElement.innerHTML + "has been changed";
personOneElement.style = "color: blue";

/*

Assignment: 

Create an object for every character with their appropriate properties

1.
Harry

  - First name: Harry
  - Last name: Potter
  - (hair)color: Black

Hermione
  - First name: Hermione
  - Last name: Granger
  - (hair)color: Brown

Ron
  - First name: Ron
  - Last name: Weasley
  - (hair)color: Red

2.
  1. Select the element of the appropriate character
  2. Set their font color the same as their hair color
  3. Set their displayed name on website as their full name (First name + last name)

Acceptance criteria:
  1. Students can manually construct the object of the character
  2. Changing the HTML has to be done with an ARROW FUNCTION
     which needs to be called in order to change the DOM
  3. Use object as the source of truth. As in if I change the color
     attribute of Harry to 'blue', the font color also changes to blue.

Bonus challenge:
  Invoke the function by pressing a button (pressing the button changes the names and colors of the HTML DOM)
*/
