var name = "john";

function sayHi() {
    name = "bob";
    console.log("hi" + name)
}


//destructuring
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  const personCopy = person;
  const actualCopyPerson = {...person};
//   const {addresses:[{city: Washington}]} = person;
//   console.log(Washington);

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const [,someAnimal,,someOtherAnimal] = animals;
// console.log(someAnimal, someOtherAnimal);

// //rest and spread -- 

// //pass by reference
// const a = [10,20,30];
// const b = a;
// const c = [...a];
// a.push(1000);
// b.push(4444);
// c.push(10000);

// console.log(a);
// console.log(b);
// console.log(c);

//--- arrow functions ---

// function sayHello2(name) {
//     console.log('Hello ' + name);
// }

var sayHello = function(name) {
    console.log('Hello ' + name);
};

const arrowHello = (name) => {
    console.log('Hello' + name);
}

const smallHello = name => console.log('Hello ' + name);

const sum =  (a,b) => {
    return a+b;
}
const sum2 = (a,b) => a+b;

smallHello("john");
console.log(sum(5,7));
console.log(sum2(6,8));

//--Ternary Operator -- 
const g = 1;
if (g>1) {
    console.log("yes");
} else {
    console.log("no");
}

g > 1 ? console.log("yes") :  console.log("no");