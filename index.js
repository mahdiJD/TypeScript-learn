
const users = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Mahdi", age: 24 },
  { id: 3, name: "Sara", age: 30 }
];

const adults = users.filter(user => user.age >= 18)
console.log(adults)

const names = users.map(user => user.name)
console.log(names)

const adultNames = users
  .filter(u => u.age >= 18)
  .map(u => u.name)
console.log(adultNames)

const totalAge = users.reduce((sum, user) => {
  return sum + user.age;
}, 0);
console.log(totalAge)

const task1 = users
  .filter(u => u.age >= 18)
  .map(u => ({name: u.name, id: u.id}))
console.log(task1)


// const adults = users.filter(u => u.age >= 18);
const avgAge = adults.reduce((sum, u) => sum + u.age, 0) / adults.length;

console.log(avgAge)

import { assertNumber } from "./validators/number.js";
import { assertString } from "./validators/string.js";

function normalizeUsers(users) {
  if (!Array.isArray(users)) {
    throw new TypeError("users must be an array");
  }

  return users.map((user, index) => {
    if (user === null || typeof user !== "object") {
      throw new TypeError(`users[${index}] must be an object`);
    }

    const { id, name } = user;

    assertNumber(id, "id");
    assertString(name, "name");

    return { id, name };
  });
}

console.log(normalizeUsers(users))

function getAdultUserNames(users) {
  return users
    .filter(u => u.age >= 18)
    .map(u => u.name)
}
console.log(getAdultUserNames(users))

function getLongName(users) {
  return users
    .filter(u => u.name.length > 3)
    .map(u => ({id: u.id, name: u.name}))
}
function getAdultUserAgeAvg(users) {
  const adults = users.filter(u => u.age >= 18)
  if (adults.length === 0) 
    return null;
  return adults
    .reduce((sum, u) => sum + u.age, 0) / adults.length
}