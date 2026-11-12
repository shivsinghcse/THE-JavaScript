const heading = document.querySelector('h1');

heading.addEventListener("mouseover", () => {
    heading.style.color = 'blue';
})

heading.addEventListener("mouseout", () => {
    heading.style.color = 'white';
})
 
document.body.style.backgroundColor = "dodgerblue";

console.log(heading)
console.dir(heading)
console.dir(document.body.childNodes[1].innerText)

const h2 = document.createElement('h2');
h2.innerText = "Hello JavaScript";
document.body.append(h2)

heading.innerText += " from Apna College students"