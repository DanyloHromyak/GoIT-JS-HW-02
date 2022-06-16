// Завдання 1
const logItems = array => {
  for (const item of array) {
    console.log(`Номер елементу: ${array.indexOf(item) + 1} - ${item}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// Завдання 2
const calculateEngravingPrice = (message, pricePerWord) => {
  let total = 0;
  let words = 0;
  words = message.split(" ").length;
  total = pricePerWord * words;
  return total;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

// Завдання 3
const findLongestWord = string => {
  let words = string.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

// Завдання 4
const formatString = string => {
  if (string.length > 40) {
    string = string.slice(0, 40).concat("...");
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

// Завдання 5
const checkForSpam = message =>
  message.toLowerCase().includes("spam") ||
  message.toLowerCase().includes("sale")


console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));

// Завдання 6
let input;
const numbers = [];
let total = 0;

const calculateTotal = () => {
  for (
    input = prompt("Введіть число");
    input != null;
    input = prompt("Введіть число")
  ) {
    if (!isNaN(input) && input !== "") numbers.push(parseInt(input));
    else alert("Введіть число");
  }

  for (const number of numbers) {
    total += number;
  }

  if (total !== 0) {
    console.log(`Загальна сума дорівнює ${total}`);
  } else {
    console.log("Скасовано користувачем!");
  }
};

calculateTotal();

// Завдання 7
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => allLogins.includes(login);

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  if (!isLoginUnique(logins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login);
  return "Логін успішно доданий";
};

console.log(addLogin(logins, "Ajax"));
console.log(addLogin(logins, "robotGoogles"));
console.log(addLogin(logins, "Zod"));
console.log(addLogin(logins, "jqueryisextremelyfast"));
