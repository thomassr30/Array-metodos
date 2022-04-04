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

const result = students.sort((a,b) => {
  if(a.age > b.age){
    return 1
  }else{
    return -1
  }
})

console.log(result)
console.log("------------------------------")

const numbers = [5,1,30,15, 22, 18, 4, 12, 17, 45, 33]

console.log(numbers.sort((a,b) => a -b))


