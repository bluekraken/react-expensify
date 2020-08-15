// const person = {
//     // name: "Andrew",
//     age: 61,
//     location: {
//         city: "Alton",
//         country: "United Kingdom"
//     }
// };

// const {name: firstName = "Anonymous", age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, country} = person.location;

// console.log(`${city} is in the ${country}.`);

// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const {name: publisherName = "Self-published"} = book.publisher;

// console.log(publisherName);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [drink, , mediumPrice] = item;

console.log(`A medium ${drink} costs ${mediumPrice}`);