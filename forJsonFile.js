"use strict";

const fs = require("fs");

const usersFile = fs.readFileSync("users.json");
const users = JSON.parse(usersFile);
// console.log(users);

const findUsers = (arr, key, value) => {
  const someUsers = arr.filter((item) => {
    if (typeof value !== String) {
      return item[key] === value;
    }
    return item[key].toLowerCase().includes(value.toLowerCase());
  });
  return someUsers;
};

const findUsersByGender = (arr, gender) => {
  if (!["MALE", "FEMALE"].includes(gender)) {
    throw new Error("Пол не указан");
  }

  const someUsers = arr.filter((item) => item.gender === gender);
  return someUsers;
};

console.log(findUsers(users, "age", 18));
// console.log(findUsersByGender(users, "FEMALE"));
