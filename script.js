// Create & Modify an Array //

// Create an array called "hobbies" with 6 hobbies as elements.
var hobbies = [`mountain bike`, `hike`, `camp`, `boulder`, `ski`, `snowboard`];

// Use the length property to log out the length of the hobbies array.
console.log(hobbies.length); 

// Add a new hobby at the end of the array using push().
hobbies.push(`standup paddleboard`);
// console.log(hobbies);

// Log out the element at index 2.
console.log (hobbies[2]);

// Remove the last element using pop().
hobbies.pop();
//console.log(hobbies);

// After the second element, add two new elements using splice(). Log out the array.
hobbies.splice(2,0, `kayak`, `raft`);
console.log(hobbies);

// Remove the first element using shift().
hobbies.shift();
// console.log(hobbies);

// Add a new element at the beginning of the array using unshift(). Log out the hobbies array.
hobbies.unshift(`ice skate`, `swim`);
console.log(hobbies);


// Create a New Array & Combine Arrays //

// Create a second array called "goals" with 3 goals as elements.
var goals = [`finish my full stack developer certification`, `teach my daughter to ski and snowboard this winter`, `buy my property in the mountains`];

// Write a variable called allTheThings to join the hobbies and goals arrays. Use concat() to combine the arrays.
// var allTheThings = hobbies.concat(goals);
// console.log(allTheThings);

// ... or the spread operator to combine the arrays...
var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);

// Choose an element in the middle of your allTheThings array and use indexOf() to log out its index.
console.log(allTheThings.indexOf(`camp`));

// Using the index of the element you just discovered, remove the element using splice() and the index position.
allTheThings.splice(5,1);

// Log out the allTheThings array to check your work.
console.log(allTheThings);


// Map Over an Array //

// Create a new variable called plans and use map() to add `I can't wait to` to the start of each array element
var plans = allTheThings.map(function(item) {
    return `I can't wait to ${item}!`;
});
console.log(plans);
