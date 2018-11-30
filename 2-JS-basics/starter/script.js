/*
Variables and data types


var firstName = 'Tom';
console.log(firstName);

var lastName = 'Burchhardt';
var age = 35;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable Naming Rules


var _3years = 3;
var markJohn
*/
/********************
 * Variable mutation and type coercion
 */

//  var firstName ='John';
//  var age = 28;
// //Type coercion
//  console.log(firstName + ' ' + age);

//  var job, isMarried;
//  job = 'teacher';
//  isMarried = false;

//  console.log(firstName + ' ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  //Variable Mutation

//  age = 'twenty eight';
//  job = 'ninja';

//  alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  var lastName = prompt('What is his last name?');
//  console.log(firstName + ' ' + lastName);

/************************
 * Basic Operators
 */
// var year, yearBirthJohn, yearBirthMark, ageJohn, ageMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// //math operators
// yearBirthJohn = now - ageJohn;
// yearBirthMark = now - ageMark;
//  console.log(yearBirthJohn);
//  console.log(now + 2);
//  console.log(now * 2);
//  console.log(now / 10);
 
//  // Logical operators

//  var johnOlder = ageJohn < ageMark;
//  console.log(johnOlder);

//  //typeof operator

//  console.log(typeof johnOlder);
//  console.log(typeof ageJohn);
//  console.log(typeof 'string');
//  var x;
//  console.log(typeof x);

/**************************
 * Operator precedence
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;
// //Multiple operators
//  var isFullAge = now - yearJohn >= fullAge; //true
//  console.log(isFullAge);
// //Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);
//Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8*4-6 // 32 - 6 // 26
// console.log(x, y);

//= works right to left where as math operators go left to right

//More operators
// x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++
// console.log(x);

/**********************
 * Coding Challenge 1
 */
// var markHeight = 1.3;
// var markWeight = 23;
// var johnHeight = 1.2;
// var johnWeight = 27;
// //another option is to make a formula for each of their BMI's
// var compareBMI = (markWeight/(markHeight*markHeight)) >= (johnWeight/johnHeight*johnHeight);
// console.log("Is Mark's BMI higher than John's?" + compareBMI)

 /*****************************
  * If / else statement
  */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is not married');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is not married');
// }

// var massMark = 78;
// var heightMark = 1.69;

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }
 
/******************
 * Ternary Operator and Switch Statements
 */

//  var firstName = 'John';
//  var age = 20;
// //Ternary Operator
//  age >= 18 ? console.log(firstName + ' drinks beer.')
//  : console.log(firstName + ' drinks juice.');

//  var drink = age >= 18 ? 'beer' : 'juice';

// console.log(drink);

// // if (age >= 18) {
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }

// //Switch Statement

// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids to code');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives a car');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');

// }

// age = 10;
// switch(true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
// }

//If/else statement
// if (age < 13) {
//     console.log(firstName + ' is a boy');
// }else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// }else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }


/********************
 * Truthy and Falsy values and equality operators
 */
// falsy values:undefined, null, 0, '', NaN
// truthy values: Not falsy values

// var height;

// height= 23;

// if(height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }


// //Equality operators
// if (height === '23') {
//     console.log('the == operator does type coercion');
// }

/************************
 * Coding Challenge 2
 */
// var teamJohn = ((89 + 120 + 103)/3);
// var teamMike = ((116 + 94 + 123)/3);
// var teamMary = ((97 + 134 + 105)/3);

// if (teamJohn > teamMike && teamMary){
//   console.log( "John wins with " + teamJohn + "points!");
// }else if (teamMike > teamJohn && teamMary) {
//   console.log( "Mike wins with " + teamMike + "points!");
// }else if (teamMary > teamJohn && teamMike){
//   console.log( "Mary wins with " + teamMary + "points!");
// }else (teamMike === teamJohn || teamMike === teamMary || teamJohn === teamMary) 
//   console.log("It's a draw!");

/***************************
 * Functions
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;

  if(retirement > 0) {
  console.log(firstName + ' retires in ' + retirement + 'years.')
  }else {
    console.log(firstName + ' is already retired.')
  }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');