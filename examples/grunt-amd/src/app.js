import Adder from 'src/adder';

class App {

  constructor(initialValue = 0) {
    this.adder = new Adder();
    this.initialValue = initialValue;
    this.print('Grunt + AMD Example!');
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

export default App;
