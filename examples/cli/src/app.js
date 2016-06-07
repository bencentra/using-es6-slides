{
  const addTwoNumbers = (a, b) => {
    return a + b;
  };

  class App {

    constructor(initialValue = 0) {
      this.initialValue = initialValue;
      this.print('Basic CLI Example!');
      this.print(`The initial value is ${initialValue}`);
    }

    addManyNumbers(...numbers) {
      const sum = numbers.reduce(addTwoNumbers, this.initialValue);
      this.print(`The sum is ${sum}`);
    }

    print(string) {
      const p = document.createElement('p');
      p.textContent = string;
      document.body.appendChild(p);
    }

  }

  window.App = App;
}

let app = new App();
app.addManyNumbers(2, 4, 6);

app = new App(10);
app.addManyNumbers(3, 5, 7, 9);
