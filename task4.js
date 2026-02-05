// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = "I am a hard working person";

const arr = statement.split(" ");
const arr2 = [];
for (let ar of arr) {
  arr2.unshift(ar);
}
const result = arr2.join(" ");
console.log(result);
