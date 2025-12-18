import { assertNumber } from "./validators/number.js";
import { assertString } from "./validators/string.js";

function normalizeUser(input) {
  if (input === null || typeof input !== "object") {
    throw new TypeError("input must be an object");
  }

  const { name, age } = input;

  assertString(name, "name");

  const numericAge = Number(age);
  assertNumber(numericAge, "age");

  return {
    name,
    age: numericAge
  };
}

const user = normalizeUser({ name: "Mahdi", age: "24" });
console.log(user);
