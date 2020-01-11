var _; // globals //TODO What is this?

//TODO Do we intall underscore?

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
 * "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
 * that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
 * It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function() {

  it("should use filter to return array items that meet a criteria", function () {
    var numbers = [1,2,3];
    var odd     = _(numbers).filter(function(x) { return x % 2 !== 0 }); //TODO what is _ for?
    
    expect(odd).toEqual([1, 3]);
    expect(odd.length).toBe(2);
    expect(numbers.length).toBe(3);
  });
    
  it("should use 'map' to transform each element", function() {
    var numbers      = [1, 2, 3];
    var numbersPlus1 = _(numbers).map(function(x) { return x + 1 });
    
    expect(numbersPlus1).toEqual([2, 3, 4]);
    expect(numbers).toEqual([1, 2, 3]);
  });
    
  it("should use 'reduce' to update the same result on each iteration", function () {
    var numbers   = [1, 2, 3];
    var reduction = _(numbers).reduce(
      function(memo, x) {

        // note: memo is the result from last call, and x is the current number  
        return memo + x;
      }, 
      /* initial */ 0 //TODO how does this zero get used? 
    );
    
    expect(reduction).toBe(6);
    expect(numbers).toEqual([1, 2, 3]);
  });
    
  it("should use 'forEach' for simple iteration", function() {
    var numbers = [1,2,3];
    var msg     = "";
    var isEven  = function(item) {
      msg += (item % 2) === 0;
    };

    _(numbers).forEach(isEven);
    
    expect(msg).toEqual("falsetruefalse");
    expect(numbers).toEqual([1,2,3]);
  });
    
  it("should use 'all' to test whether all items pass condition", function() {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).all(isEven)).toBe(true);
    expect(_(mixedBag).all(isEven)).toBe(false);
  });
    
  it("should use 'any' to test if any items passes condition" , function() {
    var onlyEven = [2,4,6];
    var mixedBag = [2,4,5,6];

    var isEven = function(x) { return x % 2 === 0 };

    expect(_(onlyEven).any(isEven)).toBe(true);
    expect(_(mixedBag).any(isEven)).toBe(true);
  });

  it("should use range to generate an array", function() {  
    expect(_.range(3)).toEqual([0, 1, 2]);
    expect(_.range(1, 4)).toEqual([1, 2, 3]);
    expect(_.range(0, -4, -1)).toEqual([0, -1, -2, -3]); 
  });

  it("should use flatten to make nested arrays easy to work with", function() {
    expect(_([ [1, 2], [3, 4] ]).flatten()).toEqual([1, 2, 3, 4]);
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
    var result = _([ [0, 1], 2 ]).chain()
                     .flatten() // [0, 1, 2]
                     .map(function(x) { return x+1 } ) // [1, 2, 3]
                     .reduce(function(sum, x) { return sum + x }) // 6
                     .value();

    expect(result).toEqual({6});
  });

});