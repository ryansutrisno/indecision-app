const add = function(a, b) {
  return a + b;
};
console.log(add(55, 1));

const user = {
  name: "Ryan",
  cities: ["Yogyakarta", "Bantul", "Sleman"],
  printPlaceLived() {
    const cityMessages = this.cities.map(city => {
      return city;
    });
    return cityMessages;
  }
};
console.log(user.printPlaceLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
