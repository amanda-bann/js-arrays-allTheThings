// Create & Modify an Array//

// Create an array called "hobbies" with 6 hobbies as elements.
var hobbies = [`mountain biking`, `hiking`, `camping`, `bouldering`, `skiing`, `snowboarding`];

// Use the length property to log out the length of the hobbies array.
console.log(hobbies.length); 

// Add a new hobby at the end of the array using push().
hobbies.push(`standup paddleboarding`);
// console.log(hobbies);

// Log out the element at index 2.
console.log (hobbies[2]);

// Remove the last element using pop().
hobbies.pop();
//console.log(hobbies);

// After the second element, add two new elements using splice(). Log out the array.
hobbies.splice(2,0, `kayaking`, `rafting`);
console.log(hobbies);

// Remove the first element using shift().
hobbies.shift();
// console.log(hobbies);

// Add a new element at the beginning of the array using unshift(). Log out the hobbies array.
hobbies.unshift(`ice skating`, `swimming`);
console.log(hobbies);


// Create a New Array & Combine Arrays//

// Create a second array called "goals" with 3 goals as elements.
var goals = [`finish full stack developer certification`, `start snowboarding again`, `buy a property in the mountains`];

// Write a variable called allTheThings to join the hobbies and goals arrays. Use concat() to combine the arrays.
// var allTheThings = hobbies.concat(goals);
// console.log(allTheThings);

// ... or the spread operator to combine the arrays...
var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

// Choose an element in the middle of your allTheThings array and use indexOf() to log out its index.
console.log(allTheThings.indexOf(`camping`));

// Using the index of the element you just discovered, remove the element using splice() and the index position.
allTheThings.splice(5,1);

// Log out the allTheThings array to check your work.
console.log(allTheThings);


