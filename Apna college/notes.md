**All Power is within You;
You can Do Anything 
And Everything**

---

## 1. JavaScript is a dynamically typed language

JavaScript is a dynamically typed programming language, meaning we don't need to explicitly specify the data type when declaring a variable.

The JavaScript engine determines the data type at runtime based on the assigned value.

Example:

```
let age = 25;       // Number
age = "Twenty-five"; // String
age = true;         // Boolean
```

The same variable can hold values of different data types during execution.

Important: JavaScript is dynamically typed, not untyped. Every value still has a data type.

## 2. JavaScript reserved words (Keywords)

Reserved words are words that have predefined meanings in JavaScript. They cannot generally be used as identifiers (variable names, function names, etc.).

Here is a categorized list.

A. Variable declaration and scope

```
var
let
const
```

B. Conditional statements

```
if
else
switch
case
default
```

C. Loops

```
for
while
do
break
continue
```

D. Functions and classes

```
function
return
class
extends
super
new
this
static
```

E. Error handling

```
try
catch
finally
throw
```

F. Modules

```
import
export
```

G. Other important keywords

```
typeof
instanceof
in
delete
void
debugger
yield
await
async
with
enum
```

H. Special reserved literals

```
true
false
null
```

### 3. Future reserved words

These words are reserved for possible future use or compatibility with other language specifications:

```
implements
interface
package
private
protected
public
```

Other reserved words include `abstract`, `boolean`, `byte`, `char`, `double`, `final`, `float`, `goto`, `int`, `long`, `native`, `short`, `synchronized`, `throws`, and `transient`.

Important distinction: Not every word listed above is reserved in exactly the same way. Some are contextual keywords, some are strict-mode restrictions, and some are future reserved words.

### 4. Test your understanding

Which of these variable declarations is valid?

```
let name = "Shiv";
let let = "JavaScript"; ❌
let class = "Developer"; ❌
let myAge = 30;
```

Think about it before running the code.

My suggestion for your notes: Keep these two topics under the heading `JavaScript Fundamentals`:

1. Dynamic vs. Static Typing
2. JavaScript Keywords and Reserved Words

For the complete authoritative list, refer to the [ECMAScript Language Specification](https://tc39.es/ecma262/?utm_source=chatgpt.com).