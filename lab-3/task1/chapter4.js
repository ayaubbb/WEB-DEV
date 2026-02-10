let user = new Object(); // "object constructor" syntax
let user1 = {};  // "object literal" syntax

let user2 = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
alert( user2.name ); // John
alert( user2.age ); // 30
user2.isAdmin = true;

delete user2.age;

let user3 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};

//The last property in the list may end with a comma:
/*let user = {
  name: "John",
  age: 30,
} */

/* this would give a syntax error
user.likes birds = true
*/
let user5 = {};

// set
user5["likes birds"] = true;

// get
alert(user5["likes birds"]); // true

// delete
delete user5["likes birds"];

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;

let key1 = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key1] ); // John (if enter "name")

let key2 = "name";
alert( user.key2 ) // undefined



let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"

let bag1 = {};
// take property name from the fruit variable
bag1[fruit] = 5;

let fruit1 = 'apple';
let bag2 = {
  [fruit1 + 'Computers']: 5 // bag.appleComputers = 5
};


function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
let user = makeUser("John", 30);
alert(user.name); // John

/*function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}*/

let obj = {
  for: 1,
  let: 2,
  return: 3
};
alert( obj.for + obj.let + obj.return );  // 6


let obje = {
  0: "test" // same as "0": "test"
};
// both alerts access the same property (the number 0 is converted to string "0")
alert( obje["0"] ); // test
alert( obje[0] ); // test (same property)

let objt = {};
objt.__proto__ = 5; // assign a number
alert(objt.__proto__); // [object Object] - the value is an object, didn't work as intended


let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"

"key" in object

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let key7 = "age";
alert( key7 in user ); // true, property "age" exists

let objc = {
  test: undefined
};
alert( objc.test ); // it's undefined, so - no such property?
alert( "test" in objc ); // true, the property does exist!

for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};
for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};
for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert( prop ); // name, surname, age
}

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

const user = {
  name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete


let clone = {}; // the new empty object 
// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}
// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
alert( user.name ); // still John in the original object

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true


let user = { name: "John" };
Object.assign(user, { name: "Pete" });
alert(user.name); // now user = { name: "Pete" }


let clone = Object.assign({}, user);
alert(clone.name); // John
alert(clone.age); // 30

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
alert( user.sizes.height ); // 182

let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes ); // true, same object
// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

let clone = structuredClone(user);
alert( user.sizes === clone.sizes ); // false, different objects
// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related


let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;
let clone = structuredClone(user);
alert(clone.me === clone); // true


// error
structuredClone({
  f: function() {}
});


