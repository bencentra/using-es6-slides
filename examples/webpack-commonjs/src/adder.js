const addTwoNumbers = (a, b) => {
  return a + b;
};

class Adder {

  addManyNumbers(numbers) {
    return numbers.reduce(addTwoNumbers, 0);
  }

}

export default Adder;
