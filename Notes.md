# JavaScript Notes: Runtime Environment and Setup

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
