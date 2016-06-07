import Adder from './adder';

class App {

  constructor(initialValue = 0) {
    this.adder = new Adder();
    this.initialValue = initialValue;
    this.print('Webpack + CommonJS Example!');
    this.print(`The initial value is ${this.initialValue}`);
  }

  addManyNumbers(...numbers) {
    const sum = this.initialValue + this.adder.addManyNumbers(numbers);
    this.print(`The sum is ${sum}`);
  }

  print(string) {
    const p = document.createElement('p');
    p.textContent = string;
    document.body.appendChild(p);
  }

}

let app = new App();
app.addManyNumbers(2, 4, 6);

app = new App(10);
app.addManyNumbers(3, 5, 7, 9);
