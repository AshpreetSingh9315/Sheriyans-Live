# 📜 JavaScript Advanced HOFs, Callbacks, and Closures

<details>
  <summary><strong>Create a function that takes a callback and executes it after every `n` seconds indefinitely.</strong></summary>

  ```js
  function repeatFunction(callback, interval) {
      setInterval(callback, interval * 1000);
  }

  // Example usage
  repeatFunction(() => console.log("Repeating..."), 2); 
  // Logs "Repeating..." every 2 seconds
  ```
</details>

<details>
  <summary><strong>Implement a function that returns a function with a preset greeting (Closure).</strong></summary>

  ```js
  function greetUser(greeting) {
      return function (name) {
          return `${greeting}, ${name}!`;
      };
  }

  // Example usage
  const greetHello = greetUser("Hello");
  console.log(greetHello("Alice")); // "Hello, Alice!"
  console.log(greetHello("Bob"));   // "Hello, Bob!"
  ```
</details>

<details>
  <summary><strong>Implement a function that takes a callback and only executes it once (HOF + Closure).</strong></summary>

  ```js
  function once(fn) {
      let executed = false;
      return function (...args) {
          if (!executed) {
              executed = true;
              return fn(...args);
          }
      };
  }

  // Example usage
  const init = once(() => console.log("Initialized!"));
  init(); // "Initialized!"
  init(); // (No output)
  ```
</details>

<details>
  <summary><strong>Implement a function that throttles another function (HOF + Closures).</strong></summary>

  ```js
  function throttle(fn, delay) {
      let lastCall = 0;
      return function (...args) {
          let now = Date.now();
          if (now - lastCall >= delay) {
              lastCall = now;
              fn(...args);
          }
      };
  }

  // Example usage
  const throttledFn = throttle(() => console.log("Throttled Execution"), 2000);
  throttledFn();
  throttledFn();
  throttledFn(); // Only executes the first call, others are ignored until 2 sec passes
  ```
</details>

---
