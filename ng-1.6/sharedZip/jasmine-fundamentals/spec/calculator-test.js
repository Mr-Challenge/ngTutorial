describe("Calculator test using jasmine", function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it("it should add two numbers", function () {
    var actual = calculator.add(1, 1);
    var expected = 7;
    expect(actual).toEqual(expected);
  });

  it("it should multiply two numbers", function () {
    var actual = calculator.multiply(2, 3);
    var expected = 6;
    expect(actual).toEqual(expected);
  });
});
