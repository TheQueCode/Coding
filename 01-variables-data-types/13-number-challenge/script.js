const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

sumOutput = `The sum of ${x} and ${y} (${x} + ${y}) is ${x + y}.`;
differenceOutput = `The difference of ${x} and ${y} (${x} - ${y}) is ${x - y}.`;
productOutput  = `The product of ${x} and ${y} (${x} * ${y}) is ${x * y}.`;
quotientOutput = `The quotient of ${x} divided by ${y} (${x} / ${y}) is ${x / y}.`;
remainderOutput = `The remainder of ${x} divided by ${y} (${x} % ${y}) is ${x % y}.`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(remainderOutput);