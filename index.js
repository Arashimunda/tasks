const users = [];

const maleFirstNames = ["Александр", "Степан", "Дмитрий", "Владислав", "Федор"];
const femaleFirstNames = ["Ирина", "Анна", "Татьяна", "Елена", "Екатерина"];
const cities = [
  "Санкт-Питербург",
  "Москва",
  "Ростов-на-Дону",
  "Краснодар",
  "Сочи",
];
const levels = ["TRIAL", "BASIC", "PRIME", "PRIME_PLUS", "BLACK"];

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomString = (strings) => {
  return strings[Math.floor(Math.random() * strings.length)];
};

const getFirstName = (gender) => {
  if (!["MALE", "FEMALE"].includes(gender)) {
    throw new Error("Пол не указан");
  }
  const currentNames = gender === "MALE" ? maleFirstNames : femaleFirstNames;
  const name = getRandomString(currentNames);
  return name;
};

function User(index) {
  if (!new.target) {
    return new User(index);
  }

  this.gender = getRandomString(["MALE", "FEMALE"]);
  this.firstName = getFirstName(this.gender);
  this.age = getRandomInteger(18, 60);
  this.phoneNumber = 79990000000 + index;
  this.city = getRandomString(cities);
  this.level = getRandomString(levels);
}

const fillUsers = (amount) => {
  if (amount <= 0) throw new Error("Неверное кол-во");
  let i = 0;

  while (i < amount) {
    const user = new User(i);
    users.push(user);
    i++;
  }
  console.log({ users });
};

const countUsers = () => {
  let males = 0;
  let females = 0;

  for (const { gender } of users) {
    gender === "MALE" ? males++ : females++;
  }
  console.log("Кол-во юзеров", { males, females });
  return { males, females };
};

(() => {
  fillUsers(10000);
  countUsers();
})();
