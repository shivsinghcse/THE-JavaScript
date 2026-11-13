let div = document.querySelector('#box');
console.log(div)
let att = div.getAttribute('id');
console.log(att)
div.setAttribute('class', 'container')
console.log(div)

const btn = document.createElement('button')
btn.innerText = 'Click Me'
document.body.prepend(btn)
btn.style.backgroundColor = 'red'
btn.style.color = 'white'

const para = document.querySelector('.paragraph');
// para.setAttribute('class', 'para')
para.classList.add('para')