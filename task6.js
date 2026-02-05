// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
  { name: "jon", marks: 93 },
  { name: "Alice", marks: 60 },
];

for (let student of students) {
  const result = `${student.name} : ${student.marks}`;
  console.log(result);
}
