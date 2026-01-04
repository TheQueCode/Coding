const x = 100;

console.log(x);

console.error('This is an error message');
console.warn('This is a warning message');

console.table({ name: 'Alice', age: 30, city: 'New York' });

console.group('User Info');
console.log('Name: Alice');
console.log('Age: 30');
console.log('City: New York');
console.groupEnd();

const styles = 'padding: 10px; background-color: lightblue; color: darkblue; font-size: 16px;';
console.log('%cStyled Message: Hello, World!', styles);