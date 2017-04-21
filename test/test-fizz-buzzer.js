const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return fizz-buzz, buzz, or fizz when num is divisible by 15, 5, or 3 respectively', function() {
    const working = [15, 30, 45, 60];
    working.forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });
  
  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });
  
  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
  
  it('should return num if it is not multiple of 3, 5, or 15', function() {
    [1, 2, 4, 7, 8].forEach(function(input) {
      fizzBuzzer(input).should.equal(input);
    });
  });
  
  it('should throw an error if input is not a number', function() {
   const badInput = ['bird', true, function() {}, [1, 2, 3]]
   badInput.forEach(function(input) {
     (function() {
       fizzBuzzer(input)
     }).should.throw(Error);
   });
  });
});