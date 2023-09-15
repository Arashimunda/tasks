"use strict";

const fs = require("fs");

let usersFile = fs.readFileSync("users.json");
let users = JSON.parse(usersFile);
// console.log(users);

const findUsersByName = (arr, firstName) => {

  let someUsers = arr.filter((item) => item.firstName.toLowerCase() === firstName.toLowerCase());
  return someUsers;
};

const findUsersByGender = (arr, gender) => {
  if (!["MALE", "FEMALE"].includes(gender)) {
    throw new Error("Пол не указан");
  }

  let someUsers = arr.filter((item) => item.gender === gender);
  return someUsers;
};

console.log(findUsersByName(users, "ИрИНА"));
// console.log(findUsersByGender(users, "FEMALE"));

