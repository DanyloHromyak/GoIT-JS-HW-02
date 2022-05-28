// Завдання 1
const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, {}, ["a"], 222];
const sumArr = Arr1[1] + Arr2[1];
console.log(`Сума: ${sumArr}, Доданки: ${Arr1[1]}, ${Arr2[1]}`);

//Завдання 2
Arr1[Arr1.length] = 22;
console.log(Arr1);

// Завдання 3
for (const item of Arr2) {
  console.log(typeof item, item);
}

// Завдання 4
const message = "Welcome to Ukraine!";
const messageLetters = message.split("");
console.log(messageLetters, message.indexOf("l"));
const message2 = messageLetters.join("");
console.log(message2);

// Завдання 5
const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, "Класика");
console.log(styles.shift());
styles.unshift("Реп", "Реггі");
console.log(styles);
