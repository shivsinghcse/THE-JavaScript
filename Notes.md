# Runtime Environment and Setup

## 1. JavaScript File Extension

- The standard file extension for JavaScript files is `.js`.
- Example: `test.js`

```javascript
console.log("Shiv Singh");
```

## 2. How Does JavaScript Code Execute?

JavaScript code needs a **JavaScript runtime environment** to execute.

A runtime environment provides the JavaScript engine and the supporting APIs required to run JavaScript code.

For example:
- Browsers use JavaScript engines to execute JavaScript.
- Node.js, Deno, and Bun allow JavaScript to run outside the browser.

### Does the file extension determine how code executes?

The file extension helps tools identify the type of file, but the extension alone does not determine how the code is executed.

Consider these files:

**`test.js`**
```javascript
console.log("Shiv Singh");
```

**`test.txt`**
```javascript
console.log("Shiv Singh");
```

Both files contain the same text, but their treatment depends on the tool used to open or execute them.

- Running `node test.js` executes the JavaScript code.
- A `.txt` file is generally treated as a text file, not as an executable JavaScript file.
- JavaScript keywords and built-in functions have specific meanings defined by the language. The runtime and JavaScript engine process the code according to JavaScript's rules.

**Remember:** A file extension is a useful indicator of file type, but the actual execution depends on the tool and environment.

## 3. JavaScript Engines and Runtime Environments

Initially, JavaScript was primarily used in web browsers. JavaScript engines were integrated into browsers, so developers could execute JavaScript without installing a separate runtime.

Today, JavaScript can also run independently of a browser using runtime environments.

### Popular JavaScript runtimes

- **Node.js** — Created by Ryan Dahl and first released in 2009.
- **Deno** — Created by Ryan Dahl and released in 2020, with Bert Belder among its early contributors.
- **Bun** — Created by Jarred Sumner and first released in 2022.

These runtimes allow developers to execute JavaScript outside the browser.

## 4. Installing Node.js

For beginners, installing the **LTS (Long-Term Support)** version of Node.js is generally recommended.

Download it from the official website:

https://nodejs.org/

Node.js includes `npm` (Node Package Manager), which is commonly used to install and manage JavaScript packages and project dependencies.

## 5. Verifying the Installation

After installing Node.js:

1. Open your terminal or command prompt.
2. Check the Node.js version:

```bash
node -v
```

Alternatively:

```bash
node --version
```

3. Check the npm version:

```bash
npm -v
```

Alternatively:

```bash
npm --version
```

If version numbers appear, the commands are available in your terminal.

## 6. Executing a JavaScript File

### Step 1: Create a JavaScript file

Create a file named `test.js`.

### Step 2: Write JavaScript code

```javascript
console.log("Hello, JavaScript!");
console.log("My name is Shiv Singh.");
```

### Step 3: Open the terminal

Navigate to the directory containing `test.js`.

### Step 4: Execute the file

Run:

```bash
node test.js
```

### Output

```text
Hello, JavaScript!
My name is Shiv Singh.
```

**Important:** Run the command from the directory containing the file, or provide the correct path to the file.

## 7. Setting Up a JavaScript Environment Using GitHub Codespaces

GitHub Codespaces provides a cloud-based development environment where you can write and execute code without installing the complete development environment on your local computer.

### Step 1: Create a GitHub repository

1. Sign in to GitHub.
2. Create a new repository.
3. Add a `README.md` file.
4. Open the repository.

### Step 2: Create a Codespace

1. Click the **Code** button.
2. Open the **Codespaces** tab.
3. Select **Create codespace on main**.

GitHub will create a cloud-based development environment for your repository.

### Step 3: Configure the JavaScript development environment

1. Open the Explorer panel.
2. Open the Command Palette using `Ctrl + Shift + P`.
3. Search for `Dev Containers: Add Dev Container Configuration Files`.
4. Select the command.
5. Search for Node.js and select the appropriate Node.js and JavaScript development container definition.
6. Select the Node.js version you want to use, preferably an appropriate LTS version if available.
7. Confirm the configuration.
8. If prompted, rebuild the container.

The environment will be configured with the development tools specified by the selected container definition.

### Step 4: Verify the environment

Open the terminal in Codespaces and execute:

```bash
node -v
npm -v
```

If both commands return version numbers, Node.js and npm are available.

### Step 5: Run your first JavaScript program

Create `test.js` and write:

```javascript
console.log("Hello from GitHub Codespaces!");
```

Execute it:

```bash
node test.js
```

You have now configured a basic JavaScript development environment in GitHub Codespaces.

## 8. Quick Revision

| Concept | Key Point |
|---|---|
| JavaScript extension | `.js` |
| JavaScript engine | Parses, compiles and/or executes JavaScript code |
| Runtime environment | Provides the engine and supporting APIs to run JavaScript |
| Node.js | Runs JavaScript outside the browser |
| Deno | Another JavaScript and TypeScript runtime |
| Bun | JavaScript runtime and toolkit |
| npm | Package manager commonly installed with Node.js |
| Check Node.js version | `node -v` |
| Check npm version | `npm -v` |
| Execute a JavaScript file | `node filename.js` |
| GitHub Codespaces | Cloud-based development environment |

## 9. Key Takeaways

- JavaScript can run in browsers and in standalone runtime environments.
- The `.js` extension conventionally identifies a JavaScript file.
- A JavaScript engine executes the code; a runtime environment provides additional capabilities around the engine.
- Node.js is a popular choice for running JavaScript outside the browser.
- npm is used to manage packages and dependencies.
- GitHub Codespaces lets you develop and execute JavaScript in the cloud.


# JavaScript Engines, Variables, Console Methods, and Comments

## 1. JavaScript Engines in Different Browsers

A **JavaScript engine** is a program that parses, compiles, and/or executes JavaScript code.

Different browsers use different JavaScript engines.

| Browser | JavaScript Engine |
|---|---|
| Google Chrome | V8 |
| Microsoft Edge | V8 |
| Mozilla Firefox | SpiderMonkey |
| Apple Safari | JavaScriptCore (JSC) |

**Key points:**
- V8 is also used by Node.js and Bun.
- Modern JavaScript engines use techniques such as Just-In-Time (JIT) compilation to improve performance.
- A JavaScript engine is not the same as a runtime environment. A runtime provides the engine along with additional APIs and capabilities.

## 2. Variables in JavaScript

A **variable** is a named identifier used to reference or hold a value in a program.

Example:

```javascript
let username = "Shiv";
let age = 25;

console.log(username);
console.log(age);
```

Here, `username` and `age` are variable names.

### 2.1 Rules for Naming Variables

Follow these guidelines when naming variables:

1. **Use descriptive names.** A variable name should explain what the value represents.
2. **Follow a consistent naming convention.** JavaScript commonly uses `camelCase` for variables and functions.
3. Variable names are case-sensitive. `userName` and `username` are different identifiers.
4. A variable name cannot begin with a digit.
5. Spaces are not allowed in variable names.
6. Reserved keywords, such as `let`, `const`, and `if`, cannot be used as ordinary variable names.

**Good examples:**

```javascript
let userName = "Shiv";
let totalPrice = 1500;
let isLoggedIn = true;
let productCount = 10;
```

**Poor examples:**

```javascript
let x = "Shiv";
let tp = 1500;
let a = true;
```

Short names are acceptable when their meaning is obvious, such as `i` in a simple loop. Otherwise, descriptive names improve readability.

### 2.2 Common JavaScript Naming Conventions

| Convention | Example | Common usage |
|---|---|---|
| camelCase | `firstName` | Variables and functions |
| PascalCase | `ProductCard` | Classes and React components |
| UPPER_SNAKE_CASE | `MAX_RETRIES` | Constants representing fixed configuration values |
| snake_case | `first_name` | Less common in typical JavaScript code |

JavaScript does not enforce these conventions; they are widely used coding practices.

## 3. Declaring Variables: `var`, `let`, and `const`

JavaScript provides three keywords for declaring variables: `var`, `let`, and `const`.

### 3.1 Using `var`

```javascript
var userName = "Shiv";
userName = "Singh";

console.log(userName); // Singh
```

Characteristics:
- Function-scoped, or globally scoped when declared at the top level of a classic script.
- Can be reassigned.
- Can be redeclared in the same scope.
- Hoisted and initialized with `undefined`.

### 3.2 Using `let`

```javascript
let age = 25;
age = 26;

console.log(age); // 26
```

Characteristics:
- Block-scoped.
- Can be reassigned.
- Cannot be redeclared in the same scope.
- Cannot be accessed before its declaration is initialized.

### 3.3 Using `const`

```javascript
const country = "India";

console.log(country); // India
```

Characteristics:
- Block-scoped.
- Cannot be reassigned.
- Cannot be redeclared in the same scope.
- Must be initialized when declared.
- Cannot be accessed before its declaration is initialized.

A `const` variable can still refer to a mutable object or array:

```javascript
const user = {
  name: "Shiv"
};

user.name = "Singh"; // Allowed

console.log(user.name); // Singh
```

However, reassigning the variable itself is not allowed:

```javascript
const user = {
  name: "Shiv"
};

// user = {}; // TypeError
```

### 3.4 Difference Between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function/global script | Block | Block |
| Reassignment | Allowed | Allowed | Not allowed |
| Redeclaration in same scope | Allowed | Not allowed | Not allowed |
| Initialization required at declaration | No | No | Yes |
| Temporal Dead Zone | No | Yes | Yes |

**Best practice:** Prefer `const` by default. Use `let` when reassignment is necessary. Avoid `var` in modern JavaScript unless you have a specific reason to use it.

## 4. Console Methods in JavaScript

The `console` object provides methods that help developers inspect values, debug code, and display information.

### 4.1 `console.log()`

Displays general information in the console.

```javascript
const userName = "Shiv";
const age = 25;

console.log(userName);
console.log(age);
console.log("Hello, JavaScript!");
```

### 4.2 `console.table()`

Displays suitable arrays or objects in a tabular format.

```javascript
const users = [
  { name: "Shiv", age: 25 },
  { name: "Aman", age: 24 }
];

console.table(users);
```

This is useful when working with arrays of objects because their properties are easier to compare.

### 4.3 Other Useful Console Methods

**`console.error()`** — Displays an error message.

```javascript
console.error("Something went wrong!");
```

**`console.warn()`** — Displays a warning message.

```javascript
console.warn("This action may cause an issue.");
```

**`console.info()`** — Displays informational output.

```javascript
console.info("Application started.");
```

**`console.debug()`** — Displays debugging information, although visibility may depend on console filtering.

```javascript
console.debug("Debugging variable values.");
```

**`console.clear()`** — Clears the console where supported.

```javascript
console.clear();
```

**`console.count()`** — Counts how many times a particular label has been called.

```javascript
console.count("Button clicked");
console.count("Button clicked");
console.count("Button clicked");
```

**`console.time()` and `console.timeEnd()`** — Measure elapsed time for a section of code.

```javascript
console.time("loop");

for (let i = 0; i < 100000; i++) {
  // Some operation
}

console.timeEnd("loop");
```

**`console.group()` and `console.groupEnd()`** — Organize related messages into a group.

```javascript
console.group("User Details");
console.log("Name: Shiv");
console.log("Country: India");
console.groupEnd();
```

### 4.4 `console.log()` vs `console.table()`

| `console.log()` | `console.table()` |
|---|---|
| Displays general values | Displays suitable data in a table |
| Works well for strings, numbers, objects, and arrays | Especially useful for arrays of objects |
| Useful for quick debugging | Useful for comparing records and properties |

Note: Console output formatting can vary between Node.js and browser developer tools.

## 5. Strict Mode in JavaScript

Strict mode enables a stricter set of JavaScript rules and helps catch certain programming mistakes.

It can be enabled by adding `"use strict";` at the beginning of a script or function body.

### 5.1 Without Strict Mode

In a classic, non-strict JavaScript script, assigning to an undeclared variable can create a global variable:

```javascript
username = "Shiv";

console.log(username);
```

This behavior is error-prone and should be avoided.

### 5.2 With Strict Mode

```javascript
"use strict";

username = "Shiv"; // ReferenceError
```

The assignment fails because `username` was not declared.

Correct version:

```javascript
"use strict";

let username = "Shiv";

console.log(username);
```

### 5.3 Other Strict Mode Rules

Strict mode also:
- Prevents certain accidental assignments to read-only properties.
- Disallows duplicate parameter names in ordinary function declarations.
- Changes the behavior of `this` in ordinary function calls: it remains `undefined` rather than being automatically substituted with the global object.

**Important:** JavaScript modules are automatically strict, including ES modules commonly used in modern React projects. Class bodies are also strict by default, so `"use strict";` is usually unnecessary in these contexts.

## 6. Comments in JavaScript

Comments explain code and are ignored during normal JavaScript execution.

### 6.1 Single-Line Comments

Use `//` for a single-line comment.

```javascript
// Store the user's name
const userName = "Shiv";
```

### 6.2 Multi-Line Comments

Use `/* ... */` for a block comment.

```javascript
/*
  Calculate the total price.
  Include the delivery charge.
*/
const totalPrice = 1500;
```

### 6.3 Practical Example

```javascript
// User details
const userName = "Shiv";
const age = 25;

/*
  Display the user's information
  in the console.
*/
console.log(userName);
console.log(age);
```

### Best Practices for Comments

- Explain *why* the code exists when the reason is not obvious.
- Avoid comments that simply repeat what the code already says.
- Update comments when the code changes.
- Use comments to clarify complex logic, assumptions, or important decisions.

## 7. Quick Revision

- **JavaScript engines:** V8, SpiderMonkey, JavaScriptCore.
- **Variable declarations:** `var`, `let`, `const`.
- **Naming convention:** Prefer descriptive `camelCase` names for variables.
- **Default declaration choice:** Use `const` unless reassignment is needed.
- **Console output:** Use `console.log()` for general output and `console.table()` for tabular inspection.
- **Strict mode:** Helps prevent certain unsafe or error-prone behaviors.
- **Comments:** Use `//` for single-line comments and `/* ... */` for block comments.


# JavaScript Notes: Data Types and `typeof`

## 1. Strict Mode in JavaScript

Strict mode enables a stricter set of rules for JavaScript code. It helps identify certain programming mistakes and prevents some unsafe behaviors.

```javascript
"use strict";

let userName = "Shiv";

console.log(userName);
```

### Important points

- `"use strict";` is a directive that enables strict mode.
- It does not switch JavaScript to the latest language version.
- It must appear at the beginning of a script or function body, apart from comments and whitespace, to enable strict mode in that scope.
- JavaScript modules and class bodies are strict by default.
- Strict mode prevents assignments to undeclared variables.

Example:

```javascript
"use strict";

totalPopulation = 3000000; // ReferenceError
```

Correct approach:

```javascript
"use strict";

let totalPopulation = 3000000;
```

**Reference:** [ECMAScript Language Specification](https://tc39.es/ecma262/)

## 2. Data Types in JavaScript

JavaScript has seven primitive types and one object type.

### Primitive types

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

### Non-primitive values

Objects include:
- Objects
- Arrays
- Functions
- Dates
- Regular expressions

Functions are a special kind of object that can be called.

## 3. Primitive Data Types

Primitive values are immutable, meaning their values cannot be modified in place. A variable can still be reassigned to a different primitive value if it was declared with `let`.

### 3.1 String

A string represents text and is written using single quotes, double quotes, or backticks.

```javascript
let firstName = "Shiv";
let lastName = 'Singh';
let greeting = `Hello, ${firstName}!`;

console.log(firstName); // Shiv
console.log(greeting);  // Hello, Shiv!
console.log(typeof firstName); // string
```

### 3.2 Number

The `Number` type represents integers and floating-point numbers.

```javascript
let age = 23;
let price = 99.99;
let temperature = -5;

console.log(typeof age); // number
console.log(typeof price); // number
```

JavaScript does not have separate primitive types for integers and floating-point numbers.

#### Safe integer range

The largest safe integer is:

```javascript
Number.MAX_SAFE_INTEGER;
// 9007199254740991
```

The smallest safe integer is:

```javascript
Number.MIN_SAFE_INTEGER;
// -9007199254740991
```

The safe integer range is:

\[
-(2^{53}-1) \text{ to } (2^{53}-1)
\]

Integers outside this range may not be represented distinctly or accurately.

**Important:** The `Number` type can represent values outside this safe integer range, but not every integer in that range of magnitudes is represented exactly.

### 3.3 Boolean

A Boolean represents one of two values: `true` or `false`.

```javascript
let isLoggedIn = true;
let isMarried = false;

console.log(typeof isLoggedIn); // boolean
```

Booleans are commonly used in conditions and decision-making.

### 3.4 Undefined

A variable declared without an assigned value has the value `undefined`.

```javascript
let phoneNumber;

console.log(phoneNumber);        // undefined
console.log(typeof phoneNumber); // undefined
```

`undefined` commonly indicates that a value has not been assigned.

### 3.5 Null

`null` represents the intentional absence of a value.

```javascript
let address = null;

console.log(address);        // null
console.log(typeof address); // object
```

**Important interview point:** `typeof null` returns `"object"`. This is a historical JavaScript behavior and is not an indication that `null` is an object.

You can check for `null` directly:

```javascript
console.log(address === null); // true
```

### 3.6 Symbol

A Symbol creates a unique primitive value, often used as an object property key.

```javascript
let firstSymbol = Symbol("id");
let secondSymbol = Symbol("id");

console.log(firstSymbol === secondSymbol); // false
console.log(typeof firstSymbol); // symbol
```

Even though both Symbols have the same description, they are distinct values.

### 3.7 BigInt

BigInt represents integers of arbitrary precision, subject to available memory.

Append `n` to an integer literal to create a BigInt.

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // bigint
```

BigInt is useful when integer values exceed the safe integer range of `Number`.

**Important:** You cannot directly mix BigInt and Number in ordinary arithmetic operations.

```javascript
// 10n + 5; // TypeError

console.log(10n + 5n); // 15n
console.log(10n + BigInt(5)); // 15n
```

## 4. Reference Values: Objects, Arrays, and Functions

Objects can contain properties and can be modified after creation.

### 4.1 Object

An object stores data as key-value pairs.

```javascript
const user = {
  name: "Shiv",
  age: 23,
  country: "India"
};

console.log(user.name); // Shiv
console.log(typeof user); // object
```

Object properties can be changed even when the object is assigned to a `const` variable.

```javascript
user.name = "Shiv Singh";

console.log(user.name); // Shiv Singh
```

### 4.2 Array

An array stores an ordered collection of values.

```javascript
const fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true
```

An array is a special kind of object.

Use `Array.isArray()` when you need to determine whether a value is an array.

### 4.3 Function

A function is a reusable block of code that can be called.

```javascript
function greet() {
  console.log("Hello, Shiv!");
}

greet();

console.log(typeof greet); // function
```

Although functions are objects in JavaScript, `typeof` returns the special string `"function"` for callable functions.

### 4.4 Other Built-in Objects

**Date**

```javascript
const today = new Date();

console.log(typeof today); // object
```

**RegExp**

```javascript
const pattern = /javascript/i;

console.log(typeof pattern); // object
```

Both are built-in object types.

## 5. The `typeof` Operator

The `typeof` operator returns a string describing the type of a value.

```javascript
console.log(typeof "Shiv");       // string
console.log(typeof 43);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof Symbol("id")); // symbol
console.log(typeof 100n);         // bigint
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function () {}); // function
```

### Quick revision table

| Value | Result of `typeof` |
|---|---|
| `"Hello"` | `"string"` |
| `42` | `"number"` |
| `true` | `"boolean"` |
| `undefined` | `"undefined"` |
| `null` | `"object"` |
| `Symbol("id")` | `"symbol"` |
| `100n` | `"bigint"` |
| `{}` | `"object"` |
| `[]` | `"object"` |
| `function () {}` | `"function"` |

## 6. Primitive vs. Reference Values

| Feature | Primitive values | Objects and reference values |
|---|---|---|
| Examples | String, Number, Boolean, Null, Undefined, Symbol, BigInt | Objects, arrays, functions |
| Mutability | Primitive values are immutable | Objects can be mutable |
| Assignment | Copies the primitive value | Copies the reference value |
| Can be reassigned? | Depends on the variable declaration | Depends on the variable declaration |

### Example: Primitive assignment

```javascript
let firstNumber = 10;
let secondNumber = firstNumber;

secondNumber = 20;

console.log(firstNumber);  // 10
console.log(secondNumber); // 20
```

Changing `secondNumber` does not change `firstNumber`.

### Example: Object reference assignment

```javascript
const firstUser = { name: "Shiv" };
const secondUser = firstUser;

secondUser.name = "Singh";

console.log(firstUser.name);  // Singh
console.log(secondUser.name); // Singh
```

Both variables refer to the same object, so changing its property is visible through either variable.

## 7. Browser vs. Node.js

Some JavaScript features depend on the runtime environment.

```javascript
console.log(3 + 4); // 7
```

This works in both browsers and Node.js.

```javascript
// Browser environment
alert("Hello, World!");
```

`alert()` is provided by browser APIs and is not available as a built-in global in standard Node.js environments.

Use `console.log()` for simple output in either environment.

## 8. Key Takeaways

- JavaScript has seven primitive types.
- Objects, arrays, and functions are non-primitive values.
- Primitive values are immutable, but variables declared with `let` can be reassigned.
- Objects can be mutable even when assigned to `const`.
- `typeof null` returns `"object"` due to a historical quirk.
- `typeof []` also returns `"object"`. Use `Array.isArray()` to check for arrays.
- Use `Number.MAX_SAFE_INTEGER` and `Number.MIN_SAFE_INTEGER` to find the safe integer limits.
- Use the `n` suffix for BigInt integer literals.
- Strict mode enforces stricter rules; it does not select the latest JavaScript version.


