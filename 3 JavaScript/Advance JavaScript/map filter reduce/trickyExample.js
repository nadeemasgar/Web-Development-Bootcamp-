const users = [
  { firstname: "Nadeem", lastname: "Asgar", age: 20 },
  { firstname: "Rahul", lastname: "Kumar", age: 16 },
  { firstname: "Elon", lastname: "Musk", age: 45 },
  { firstname: "Abhishek", lastname: "Anand", age: 20 },
];

// List of Full Names
// ["Nadeem Asgar", "Rahul Kumar", "Elon Musk", "Abhishek Anand"]

const output1 = users.map(function (user) {
  return user.firstname + " " + user.lastname;
});

console.log(output1);

// Finding the differnt age in the array and how many people are with the same age
// {20: 2, 16: 1, 45: 1}

const output2 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output2);

// Chaining map, filter, reduce
// Find the firstname of all the user whose age is less than 30

const output3 = users
  .filter(function (user) {
    if (user.age < 30) {
      return user.firstname;
    }
  })
  .map((x) => x.firstname);

console.log(output3);

const output4 = users.filter((x) => x.age < 30).map((x) => x.firstname);
console.log(output4);


const output5 = users.reduce((acc, curr) => {
    if (curr.age < 30) {
      acc.push(curr.firstname);
    }
    return acc;
  }, []);
  console.log(output5);
