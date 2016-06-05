import Summer from 'src/summer';

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

export default App;
