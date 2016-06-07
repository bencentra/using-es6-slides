{
  const addTwoNumbers = (a, b) => {
    return a + b;
  };

  class App {

    constructor(initialValue = 0) {
      this.initialValue = initialValue;
      console.log(`The initial value is ${initialValue}`);
    }

    addManyNumbers(...numbers) {
      const sum = numbers.reduce(addTwoNumbers, this.initialValue);
      console.log(`The sum is ${sum}`);
    }

  }

  window.App = App;
}

let app = new App();
app.addManyNumbers(2, 4, 6);

app = new App(10);
app.addManyNumbers(3, 5, 7, 9);

console.log(typeof App);
console.log(typeof addTwoNumbers);
