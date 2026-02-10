let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

let str = "Hello";
alert( str.toUpperCase() ); // HELLO

let n = 1.23456;
alert( n.toFixed(2) ); // 1.23

alert( typeof 0 ); // "number"
alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);
if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}

let num = Number("123"); // convert a string to number

alert(null.test); // error




let billion = 1000000000;

let billion1 = 1_000_000_000;

let billion2 = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mсs = 0.000001;

let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001
// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123
// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255
alert( a == b ); // true, the same number 255 at both sides

let num1 = 255;
alert( num1.toString(16) );  // ff
alert( num1.toString(2) );   // 11111111

alert( 123456..toString(36) ); // 2n9c

let num2 = 1.23456;
alert( Math.round(num2 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

let num3 = 12.34;
alert( num3.toFixed(1) ); // "12.3"

let num4 = 12.36;
alert( num4.toFixed(1) ); // "12.4"

let num5 = 12.34;
alert( num5.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004

alert(0.1.toString(2)); // 0.0001100110011001100110011001100110011001100110011001101
alert(0.2.toString(2)); // 0.001100110011001100110011001100110011001100110011001101
alert((0.1 + 0.2).toString(2)); // 0.0100110011001100110011001100110011001100110011001101

alert( 0.1.toFixed(20) ); // 0.10000000000000000555

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

let sum1 = 0.1 + 0.2;
alert( +sum1.toFixed(2) ); // 0.3

alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001

// Hello! I'm a self-increasing number!
alert( 9999999999999999 ); // shows 10000000000000000

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

let num6 = +prompt("Enter a number", '');
// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num6) );

alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true
// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false
// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123

alert( +"100px" ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

alert( parseInt('a123') ); // NaN, the first symbol stops the process

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works
alert( parseInt('2n9c', 36) ); // 123456

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

alert( Math.pow(2, 10) ); // 2 in power 10 = 1024



let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;

function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines

let guestList1 = "Guests: * John"; /* Error: Unexpected token ILLEGAL*/

let guestList2 = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList2); // a multiline list of guests, same as above

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
// two lines using a normal newline and backticks
let str2 = `Hello
World`;
alert(str1 == str2); // true

alert( `The backslash: \\` ); // The backslash: \

alert( 'I\'m the Walrus!' ); // I'm the Walrus!

alert( "I'm the Walrus!" ); // I'm the Walrus!

alert( `My\n`.length ); // 3

let str3 = `Hello`;
// the first character
alert( str3[0] ); // H
alert( str3.at(0) ); // H
// the last character
alert( str3[str3.length - 1] ); // o
alert( str3.at(-1) );

let str4 = `Hello`;
alert( str4[-2] ); // undefined
alert( str4.at(-2) ); // l

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

let str5 = 'Hi';
str5[0] = 'h'; // error
alert( str5[0] ); // doesn't work

let str6 = 'Hi';
str6 = 'h' + st6[1]; // replace the string
alert( str6 ); // hi

alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

alert( 'Interface'[0].toLowerCase() ); // 'i'

let str7 = 'Widget with id';
alert( str7.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str7.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str7.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let stri = 'Widget with id';
alert( stri.indexOf('id', 2) ) // 12

let strg = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = strg.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

let strn = "As sly as a fox, as strong as an ox";
let target1 = "as";
let pos1 = -1;
while ((pos1 = strn.indexOf(target1, pos1 + 1)) != -1) {
  alert( pos1 );
}

let str8 = "Widget with id";
if (str8.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}

alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

let str9 = "stringify";
alert( str9.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str9.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str88 = "stringify";
alert( str88.slice(2) ); // 'ringify', from the 2nd position till the end

let str44 = "stringify";
// start at the 4th position from the right, end at the 1st from the right
alert( str44.slice(-4, -1) ); // 'gif'

let str55 = "stringify";
// these are same for substring
alert( str55.substring(2, 6) ); // "ring"
alert( str55.substring(6, 2) ); // "ring"
// ...but not for slice:
alert( str55.slice(2, 6) ); // "ring" (the same)
alert( str55.slice(6, 2) ); // "" (an empty string)

let str66 = "stringify";
alert( str66.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

let str33 = "stringify";
alert( str33.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

alert( 'a' > 'Z' ); // true

alert( 'Österreich' > 'Zealand' ); // true

// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)

let str11 = '';
for (let i = 65; i <= 220; i++) {
  str11 += String.fromCodePoint(i);
}
alert( str11 );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

alert( 'Österreich'.localeCompare('Zealand') ); // -1

let arr2 = new Array();
let arr22 = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits ); // Apple,Orange,Plum

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// get the object at index 1 and then show its name
alert( arr[1].name ); // John
// get the function at index 3 and run it
arr[3](); // hello

let fruits = [
  "Apple",
  "Orange",
  "Plum",
];

let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length-1] ); // Plum

let fruits = ["Apple", "Orange", "Plum"];
// same as fruits[fruits.length-1]
alert( fruits.at(-1) ); // Plum

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

let fruits = ["Banana"]

let arr4 = fruits; // copy by reference (two variables reference the same array)
alert( arr4 === fruits ); // true
arr4.push("Pear"); // modify the array by reference
alert( fruits ); // Banana, Pear - 2 items now

let fruits = []; // make an array
fruits[99999] = 5; // assign a property with the index far greater than its length
fruits.age = 25; // create a property with an arbitrary name

fruits.shift(); // take 1 element from the start

fruits.pop(); // take 1 element from the end

let arr5 = ["Apple", "Orange", "Pear"];
for (let i = 0; i < arr.length; i++) {
  alert( arr5[i] );
}

let fruits = ["Apple", "Orange", "Plum"];
// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}

let arr9 = ["Apple", "Orange", "Pear"];
for (let key in arr) {
  alert( arr9[key] ); // Apple, Orange, Pear
}

let fruits = [];
fruits[123] = "Apple";
alert( fruits.length ); // 124

let arr7 = [1, 2, 3, 4, 5];
arr7.length = 2; // truncate to 2 elements
alert( arr7 ); // [1, 2]
arr7.length = 5; // return length back
alert( arr7[3] ); // undefined: the values do not return

let arr8 = new Array("Apple", "Pear", "etc");

let arr6 = new Array(2); // will it create an array of [2] ?
alert( arr6[0] ); // undefined! no elements.
alert( arr6.length ); // length 2

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
alert( matrix[0][1] ); // 2, the second value of the first inner array

let arr7 = [1, 2, 3];
alert( arr7 ); // 1,2,3
alert( String(arr7) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"

alert( [] == [] ); // false
alert( [0] == [0] ); // false

alert( 0 == [] ); // true
alert('0' == [] ); // false

// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0
alert('0' == '' ); // false, no type conversion, different strings

let arr7 = ["I", "go", "home"];
delete arr7[1]; // remove "go"
alert( arr7[1] ); // undefined
// now arr = ["I",  , "home"];
alert( arr7.length ); // 3

//arr7.splice(start[, deleteCount, elem1, ..., elemN])

let arr7 = ["I", "study", "JavaScript"];
arr7.splice(1, 1); // from index 1 remove 1 element
alert( arr7 ); // ["I", "JavaScript"]

let arr0 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr0.splice(0, 3, "Let's", "dance");
alert( arr0 ) // now ["Let's", "dance", "right", "now"]

let arr1 = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr1.splice(0, 2);
alert( removed ); // "I", "study" <-- array of removed elements

let arr7 = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
arr7.splice(2, 0, "complex", "language");
alert( arr7 ); // "I", "study", "complex", "language", "JavaScript"

let arr77 = [1, 2, 5];
// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr77.splice(-1, 0, 3, 4);
alert( arr77 ); // 1,2,3,4,5

arr77.slice([start], [end])

let arr44 = ["t", "e", "s", "t"];
alert( arr44.slice(1, 3) ); // e,s (copy from 1 to 3)
alert( arr44.slice(-2) ); // s,t (copy from -2 till the end)

arr.concat(arg1, arg2);

let arr55 = [1, 2];
// create an array from: arr and [3,4]
alert( arr55.concat([3, 4]) ); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
alert( arr55.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
alert( arr55.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr23 = [1, 2];
let arrayLike = {
  0: "something",
  length: 1
};
alert( arr23.concat(arrayLike) ); // 1,2,[object Object]

let arr45 = [1, 2];

let arrayLik1 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr45.concat(arrayLike1) ); // 1,2,something,else

arr.forEach(function(item, index, array) {
  // ... do something with an item
});

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

let arr88 = [1, 0, false];
alert( arr88.indexOf(0) ); // 1
alert( arr88.indexOf(false) ); // 2
alert( arr88.indexOf(null) ); // -1
alert( arr88.includes(1) ); // true

let fruits = ['Apple', 'Orange', 'Apple']
alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

const arr7 = [NaN];
alert( arr7.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr7.includes(NaN) );// true (correct)

let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
alert(user.name); // John

let users1 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
// Find the index of the first John
alert(users1.findIndex(user => user.name == 'John')); // 0
// Find the index of the last John
alert(users1.findLastIndex(user => user.name == 'John')); // 3

let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

let users2 = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users2.filter(item => item.id < 3);
alert(someUsers.length); // 2

let result3 = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

let arr12 = [ 1, 2, 15 ];
// the method reorders the content of arr
arr12.sort();
alert( arr12 );  // 1, 15, 2

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr67 = [ 1, 2, 15 ];
arr67.sort(compareNumeric);
alert(arr67);  // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});

let arr49 = [ 1, 2, 15 ];
arr49.sort(function(a, b) { return a - b; });
alert(arr49);  // 1, 2, 15

arr.sort( (a, b) => a - b );







let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3

let john3 = { name: "John" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
// john is the key for the map
visitsCountMap.set(john3, 123);
alert( visitsCountMap.get(john3) ); // 123

let joh = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = {}; // try to use an object
visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[joh] = 123; // try to use john object as the key, ben object will get replaced
// That's what got written!
alert( visitsCountObj["[object Object]"] ); // 123

map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}
// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  alert(entry); // cucumber,500 (and so on)
}

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});

// array of [key, value] pairs
let map5 = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map5.get('1') ); // str1

let obj = {
  name: "John",
  age: 30
};

let map45 = new Map(Object.entries(obj));
alert( map45.get('name') ); // John

let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2

let jo = { name: "John" };
// the object can be accessed, john is the reference to it
// overwrite the reference
jo = null;
// the object will be removed from memory

let user1 = {
  name: "John",
  age: 30
};

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];

let user3 = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith

let now = new Date();
alert( now ); // shows current date/time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );
// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );

let user2 = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}








