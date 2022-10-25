// GIVEN
// console.log(example);
// let example = "I'm the example!";    

//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(hello);  //logs undefined                                 
// var hello = 'world';      

// var needle = 'haystack';
// test(); //logs magnet
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); // logs super cool

// var food = 'chicken';
// console.log(food); //logs chicken
// eat(); //logs half-chicken
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// mean(); //
// console.log(food); //logs undefined
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); // logs undefined


// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }



