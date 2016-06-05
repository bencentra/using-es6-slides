const addTwoNumbers = (a, b) => {
  return a + b;
};

class Summer {

  addManyNumbers(numbers) {
    return numbers.reduce(addTwoNumbers, 0);
  }

}

export default Summer;
