const person = {
    name: 'Changyang',
    age: '27',
    location: {
        city: 'Stockholm',
        temp: 1
    }
};

const { name : firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location;
if (city && temperature){
    console.log(`It is ${temperature} in ${city}`)
}

const book = {
    title: 'Ego is th Enemy',
    author: 'Ryan Holiday',
    publisher : {
        name: 'Penguin'
    }
};

const {name : publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

const address = ['siwjiw', 'wdkowkdow'];
const [, , state = 'abc'] = address;
console.log(`You are in ${state}`)