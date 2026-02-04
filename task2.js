// Task 2
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var numbers = ["Tom", "Tim", "Tin", "Tik"];
let names = "";
for (num of numbers) {
  names = names + num;
}
console.log(names);
