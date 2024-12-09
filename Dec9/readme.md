# JavaScript Hoisting

## Overview
JavaScript Hoisting is a behavior where variable and function declarations are moved to the top of their scope during the compilation phase, allowing their usage before actual declaration in code. However, this can lead to unexpected results if not understood properly.

---

## Key Points

- **Only declarations are hoisted, not initializations.**  
  Variables are known but remain `undefined` until assigned a value.

- **Function declarations are completely hoisted.**  
  You can call a function before its definition in the code.

- **Variables declared with `var` are hoisted** with an initial value of `undefined`.  
  They are accessible before the assignment line.

- **Variables declared with `let` and `const` are hoisted** but remain uninitialized.  
  Accessing them before declaration results in a `ReferenceError` due to the **Temporal Dead Zone (TDZ)**.

---

## Examples

### Example 1: Variable Hoisting
```javascript
console.log(x); // Outputs: undefined
var x = 5;
```
**Explanation:**
- Declaration of `x` is hoisted to the top of the scope.
- The code is interpreted as:
  ```javascript
  var x;
  console.log(x); // Outputs: undefined
  x = 5;
  ```

### Example 2: Function Hoisting
```javascript
foo(); // Outputs: "Hello"

function foo() {
  console.log("Hello");
}
```
**Explanation:**
- Function declarations are hoisted entirely, including their definitions.

---

## Benefits of Hoisting

1. **Improves Code Readability:**  
   - Allows organizing code in a logical flow, regardless of where declarations are placed.

2. **Facilitates Function Organization:**  
   - Functions can be defined at the bottom of a file but still used throughout the code.

---

## Recommendations

- **Declare variables and functions at the top** of their scope for better readability.
- Use `let` and `const` instead of `var`:
  - They have block scope.
  - They prevent issues caused by unexpected behavior of hoisting.

---

## References

Learn more about JavaScript hoisting:
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

---

## License

This document is licensed under the [MIT License](LICENSE).