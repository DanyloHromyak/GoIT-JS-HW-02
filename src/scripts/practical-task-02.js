// Завдання 1
const hello1 = () => console.log("Hello, JavaScript");

hello1();

// Завдання 2
const hello2 = name => console.log(`Hello, ${name}`);

hello2("Василь");

// Завдання 3
const mul = (n = 0, m = 0) => {
  console.log(`${n * m} - Добуток`);
  console.log(`${n + m} - Сума`);
  console.log(`${n - m} - Різниця`);
};

mul(5, 1);

// Завдання 4
const myNewArrowFunction = (...rest) => console.log(rest);

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// Завдання 5
const myAverageScore = scores => {
  let averageScore = 0;
  let grade = 0;
  for (let i = 0; i < scores.length; i++) {
    let currentScore = scores[i];
    averageScore += currentScore;
  }
  averageScore = averageScore / scores.length;
  if (averageScore > 100) {
    grade = "S";
  } else if (averageScore > 90 && averageScore <= 100) {
    grade = "A";
  } else if (averageScore > 80 && averageScore <= 90) {
    grade = "B";
  } else if (averageScore > 70 && averageScore <= 80) {
    grade = "C";
  } else {
    grade = "D";
  }
  return `Your score is: ${averageScore}. Your grade is: ${grade}`;
};

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));
