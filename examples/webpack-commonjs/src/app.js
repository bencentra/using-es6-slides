import Summer from './summer';

class App {

  constructor(initialValue = 0) {
    this.summer = new Summer();
    this.initialValue = initialValue;
    console.log(`The initial value is ${this.initialValue}`);
  }

  addManyNumbers(...numbers) {
    const sum = this.initialValue + this.summer.addManyNumbers(numbers);
    console.log(`The sum is ${sum}`);
  }

}

let app = new App();
app.addManyNumbers(2, 4, 6);

app = new App(10);
app.addManyNumbers(3, 5, 7, 9);
