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

const result = students.reduce((acc, student) => {
  return acc + student.age
},0)

console.log(`Total edad Alumnos: ${result}`)

const developer = [
  {
    id: 1,
    name: 'Thomas',
    skills: ['Html', 'Css', 'Javascript', 'React']
  },
  {
    id: 2,
    name: 'Thomas 2',
    skills: ['Html', 'Javascript', 'Bootstrap', 'NodeJS']
  },
  {
    id: 3,
    name: 'Thomas 3',
    skills: ['Javascript', 'NodeJS', 'MySql']
  }
]

const result2 = developer.reduce((allSkills, dev) => {
  return Array.from( new Set([...allSkills, ...dev.skills]))
}, [])

console.log(result2)

