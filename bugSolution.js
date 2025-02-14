function foo(a, b) {
  // Explicitly check if both a and b are numbers. If not, return 0.
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));    // Output: 10
console.log(foo(0, 5));   // Output: 5
console.log(foo('', 5));  // Output: 0
console.log(foo(false, 5));// Output: 0