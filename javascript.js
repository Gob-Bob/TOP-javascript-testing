// Ask user for input number
let userInput = prompt("Input a number")

// Starting from 1, print each number up to the user's input number
for (let i = 1; i <= userInput; i++) {
    // For every number with the multiple of 3 & 5, print "FizzBuzz" instead
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    // For every number with the multiple of 3, print "Fizz" instead
    } else if (i % 3 == 0) {
        console.log("Fizz")
    // For every number with the multiple of 5, print "Buzz" instead
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}