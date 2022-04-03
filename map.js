const students = [
  {
    name: "Jill",
    lastname: "Doe",
    age: 24,
    course: "Marketing",
  },
  {
    name: "John",
    lastname: "Doe",
    age: 22,
    course: "Web Development",
  },
  {
    name: "Jack",
    lastname: "Doe",
    age: 20,
    course: "Accounting",
  },
  {
    name: "Ryan Jhon",
    lastname: "Ray",
    age: 23,
    course: "Web Development",
  },
  {
    name: "Jane",
    lastname: "Doe",
    age: 20,
    course: "Financial Management",
  },
];

/*const result = students.map((student, index) => {
  return {
    id: index,
    fullName: student.name + ' ' + student.lastname
  }
})*/

const result = students.map((student, index) => {
  return {
    ...student, 
    fullName: student.name + ' ' + student.lastname
    }
})


console.log(result)

