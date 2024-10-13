// Create & modify an array:
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