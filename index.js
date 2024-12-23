function decideCareer(skills) {
  const { html, css, bootstrap, js, react, node } = skills;

  if (html && css && bootstrap && !js && !react && !node) {
    return "UI/UX Designer";
  } else if (html && css && bootstrap && js && react && !node) {
    return "Frontend Developer";
  } else if (html && css && bootstrap && js && node && !react) {
    return "Backend Developer";
  } else if (html && css && bootstrap && js && node && react) {
    return "Fullstack Developer";
  } else {
    return "Go and join 10000-coders";
  }
}

const studentSkills = {
  html: true,
  css: true,
  bootstrap: true,
  js: true,
  react: false,
  node: false,
};

console.log(decideCareer(studentSkills));













// // 1. What is the result of 10 + '5'?
// console.log(10 + '5'); // Output: '105' (string concatenation)

// // 2. What is the value of x after x = 10; x += 5;?
// let x = 10;
// x += 5;
// console.log(x); // Output: 15

// // 3. What is the result of 10 - null?
// console.log(10 - null); // Output: 10 (null is treated as 0)

// // 4. What is the value of x after x = 10; x *= 2;?
// x = 10;
// x *= 2;
// console.log(x); // Output: 20

// // 5. What is the result of 10 / '2'?
// console.log(10 / '2'); // Output: 5 (string '2' is converted to a number)

// // 6. What is the result of 10 % 3?
// console.log(10 % 3); // Output: 1 (remainder of the division)

// // 7. What is the value of x after x = 10; x = x ** 2;?
// x = 10;
// x = x ** 2;
// console.log(x); // Output: 100 (exponentiation)

// // 8. What is the result of 10 > 5 && 5 < 10?
// console.log(10 > 5 && 5 < 10); // Output: true (both conditions are true)

// // 9. What is the result of 10 === '10'?
// console.log(10 === '10'); // Output: false (strict equality, different types)

// // 10. What is the result of null ?? 'default'?
// console.log(null ?? 'default'); // Output: 'default' (nullish coalescing operator)

// // 11. What is the result of 10 || 'default'?
// console.log(10 || 'default'); // Output: 10 (first truthy value)

// // 12. What is the result of !true?
// console.log(!true); // Output: false (negation operator)

// // 13. What is the result of 10 & 5?
// console.log(10 & 5); // Output: 0 (bitwise AND operation)
