// Task 1

function cubeArray(numbers) {
  return numbers.map((number) => Math.pow(number, 3));
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 41];
// cubeArray(array);
console.log(cubeArray(inputArray));

//Task 2

function sum(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum(inputArray));

//Task 3

function isPrime(number) {
  let count = 0;
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
function filterPrime(numbers) {
  return numbers.filter(isPrime);
}

console.log(filterPrime(inputArray));

//Task 4

function sumSquareOdd(numbers) {
  const oddNumbers = numbers.filter((number) => number % 2 == 1);
  const squaredOddNumbers = oddNumbers.map((number) => number * number);
  const sumOfSquares = squaredOddNumbers.reduce(
    (sum, number) => sum + number,
    0
  );

  return sumOfSquares / numbers.length;
}

console.log(sumSquareOdd(inputArray));

//Task 5

function longestString(stringArray) {
  const lengths = stringArray.map((element) => element.length);
  const maxLength = lengths.reduce(
    (max, current) => (current > max ? current : max),
    0
  );
  const longestStrings = stringArray.filter((str) => str.length === maxLength);
  return longestStrings[0];
}

const inputStringArray = [
  "apple",
  "banana",
  "cherry",
  "blueberry",
  "strawberry",
];
console.log(longestString(inputStringArray));

//Task 6

function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const inputSentence = "hello world, this is a test sentence.";
console.log(capitalize(inputSentence))

//Task 7

function filterStudents(students){
    return students.filter(student=>student.score>=60)
}

const students = [
    { name: 'Parth', score: 58 },
    { name: 'Srushti', score: 76 },
    { name: 'Aditya', score: 93 },
    { name: 'Kartik', score: 45 },
    { name: 'Jai', score: 60 }
  ];

console.log(filterStudents(students))

//Task 8
function createCounter() {
    let count = 0; 
    return {
      increment() {
        count++;
      },
      decrement() {
        count--;
      },
      getCount() {
        return count;
      }
    };
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  counter1.increment();
  counter1.increment();
  console.log("Counter1:",counter1.getCount()); 
  
  counter2.increment();
  console.log("Counter2:",counter2.getCount()); 
  
  counter1.decrement();
  console.log("Counter1:",counter1.getCount()); 
  
  console.log("Counter2:",counter2.getCount());
  

//Task 9

function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
      switch (operation) {
        case 'addition':
          resolve(num1 + num2);
          break;
        case 'subtraction':
          resolve(num1 - num2);
          break;
        case 'multiplication':
          resolve(num1 * num2);
          break;
        case 'division':
          if (num2 === 0) {
            reject(new Error('Division by zero is not allowed.'));
          } else {
            resolve(num1 / num2);
          }
          break;
        default:
          reject(new Error('Invalid operation: Supported operations are addition, subtraction, multiplication, and division.'));
      }
    });
  }
  
  calculate(10, 5, 'addition')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));
  
  calculate(10, 0, 'division')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message)); 
  
  calculate(10, 'five', 'multiplication')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message)); 
  
  calculate(10, 5, 'unknown')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message)); 
  

//Task 10
function calculateTotalScore(arr) {
    let totalScore = 0;
  
    arr.forEach(item => {
      totalScore += item.score;
    });
  
    return totalScore;
  }

console.log(calculateTotalScore(students))