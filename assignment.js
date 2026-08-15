// Task-1
// Array Methods

let fruits = ["Apple", "Mango", "Banana"];

fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Mango", "Banana", "Orange"]

fruits.pop();
console.log(fruits); // Output: ["Apple", "Mango", "Banana"]

console.log("forEach output:");
fruits.forEach(function(fruit) {
  console.log(fruit);
})

// Task -2
// Map() & filter()

let numbers = [10, 20, 30, 40, 50];

let addedNumbers = numbers.map((num) => num + 10);
console.log(addedNumbers); // Output: [20, 30, 40, 50, 60]

let filteredNumbers = numbers.filter((num) => num > 30);
console.log(filteredNumbers); // Output: [40, 50]

Task -3
Reduce(),find(),findIndex()

let marks = [40, 55, 70, 85, 30];

let totalMarks = marks.reduce((sum,mark) => sum + mark, 0);
console.log(totalMarks); // Output: 280

let findMark = marks.find((mark) => mark >= 70);
console.log(findMark); // Output: 70 

let indexOf85 = marks.findIndex((mark) => mark === 85);
console.log(indexOf85); // Output: 3

// Task -4
// Object Methods

let student = {
    name: "Rahim",
  age: 22,
  city: "Chittagong"
};

console.log("Object.keys():", Object.keys(student)); // Output: ["name", "age", "city"]
console.log("Object.values():", Object.values(student)); // Output: ["Rahim", 22, "Chittagong"]
console.log("Object.entries():", Object.entries(student)); // Output: [["name", "Rahim"], ["age", 22], ["city", "Chittagong"]]
console.log("Object.hasOwnProperty('name'):", student.hasOwnProperty('name')); // Output: true


// Task -5
// Set

let numberSet = new Set([10,20,30]);

numberSet.add(40);
console.log(numberSet); // Output: Set(4) {10, 20, 30, 40}

numberSet.delete(20);
console.log(numberSet); // Output: Set(3) {10, 30, 40}

console.log(numberSet.has(30)); // Output: true

console.log("forEach on Set:");
numberSet.forEach((value) => {
  console.log(value);
});

// Task -6
// Map
let studentMap = new Map();

studentMap.set("name", "Rahim");
studentMap.set("age", 22);

console.log("get('name'):", studentMap.get("name"));
console.log("has('age'):", studentMap.get("age"));
console.log("size:", studentMap.size);

// Task -7
// Spread & Rest

//Spread
let a = [1, 2, 3];
let b = [4, 5, 6];
let combined = [...a, ...b];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//Rest
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(10, 20, 30)); // Output: 60

Task -8
Class & Constructor

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

let student1 = new Student("Rahim", 22, "Javascript");
let student2 = new Student("Karim", 23, "React");

console.log(student1); // Output: Student { name: 'Rahim', age: 22, course: 'Javascript' }
console.log(student2); // Output: Student { name: 'Karim', age: 23, course: 'React' }

Task -9
Inheritance & Overriding

class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

class Student extends Person {
  constructor(name, course) {
      super(name);
      this.course = course;
    }

    // Method Overriding: same method name, different (child-specific) output
    introduce() {
      console.log(
        `Hi, I am ${this.name} and I am studying ${this.course}.`
      );
    }
  }

  let person1 = new Person("Karim");
  person1.introduce(); // uses Person's introduce()

  let student1 = new Student("Rahim", "JavaScript");
  student1.introduce(); // uses Student's overridden introduce()


  // Task-10 
  // Small OOP Project: Bank Account

  class BankAccount{
    constructor(name,balance){
      this.name = name;
      this.balance = balance;
    }

    deposit(amount){
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  
    }
    withdraw(amount){
      if(amount > this.balance){ 
        console.log(`Insufficient balance. Current balance: ${this.balance}`);
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
    }

    // Bonus: Static Method
    static bankInfo(){
      console.log("Welcome to XYZ Bank. We offer savings and checking accounts.");
    }
  }

    let account = new BankAccount("Rahim", 1000);
    account.deposit(500); // Deposited 500. New balance: 1500
    account.withdraw(200); // Withdrew 200. New balance: 1300
    account.withdraw(1500); // Insufficient balance. Current balance: 1300
  
    console.log(`Account Holder: ${account.name}, Balance: ${account.balance}`); // Account Holder: Rahim, Balance: 1300
    BankAccount.bankInfo(); // Welcome to XYZ Bank. We offer savings and checking accounts.
  