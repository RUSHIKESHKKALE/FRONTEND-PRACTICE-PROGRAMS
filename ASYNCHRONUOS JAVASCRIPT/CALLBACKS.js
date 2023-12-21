//example of callback function

function greet(name, callback) {
  console.log(`hi ${name}`);
  callback();
}

function askquestion() {
  //this is callback function
  console.log("how are you");
}

greet("ram", askquestion);

console.log("\n", "this is time pass code");
const books = {
  name: "bhhk",
  price: 120,
};

const { price } = books;
console.log(price);
console.log(books.name);

console.log(books);
