
// 0.select

// let ID1 = document.getElementById('ID1') 
// ID1.innerHTML = 'DOM is EASSY'

// let ClassName1 = document.getElementsByClassName("ClassName1")[0];
// ClassName1.innerHTML = 'it is usefull model'
// let ClassName2 = document.getElementsByClassName("ClassName1")[1];
// ClassName2.innerHTML = 'getElementsByClassName return an array'

// let Name = document.getElementsByName('h5')[0] 
// Name.innerHTML = 'getElementsByName return an array.'

// let TagName = document.getElementsByTagName('p')[2] 
// TagName.innerHTML = 'TagName also return an array'

// document.querySelector('.ClassName1')
// =====================================

// 1.ONCLICK EVENT

// function CLICKme(){
//     document.getElementById('id1').innerHTML= Date()

// }
// ============================

// 2. child to parent TRAVERSING

// let pNote = document.querySelector('.pNote')
// console.log(pNote.parentNode)
// ==============================

// 3. parents to child TRAVERSING
 
// let parent = document.querySelector('.parentsDiv')
// console.log(parent.children)
// ==============================

// 4.dom SIBLING ELEMENT

// let current = document.querySelector('.current')
// console.log(current.nextElementSibling)
// console.log(current.previousElementSibling)
// ============================

// 5. CREATE NEW ELEMENT

// let div = document.createElement('div')

// // div.innerHTML ='<p>this is p tag</p>' 

// div.className = 'sagor_class'
// div.id = ' sagor_id'

// // let text = document.createTextNode('inner text into the div')

// let h1 = document.createElement('h1')
// h1.textContent = ' this is heading1'
// div.appendChild(h1)
// // div.appendChild(text)

// document.body.appendChild(div)


// //
// let ul = document.createElement('ul')
// ul.id = 'menu'

// let li1=document.createElement('li')
// li1.textContent = 'Home'
// ul.appendChild(li1)

// let li2=document.createElement('li')
// li2.textContent = 'About'
// ul.appendChild(li2)

// document.body.appendChild(ul)

//
// let script = document.createElement("script")
// script.src ="shaogor.js"
// document.body.appendChild(script)
// ============================


//  6.appendChild
// let div = document.createElement('div')
// div.id = 'menu'
// let p = document.createElement('p')
// p.innerHTML = 'this is NEW P tag'
// div.appendChild(p)
// document.body.appendChild(div)

// shortcut
// let menu2= document.querySelector("#menu2")
// function createMenu(name){
//     let li = document.createElement('li')
//     li.textContent = name;
//     return li;
// }
// menu2.appendChild(createMenu('shagor'))
// menu2.appendChild(createMenu('ali'))
// menu2.appendChild(createMenu('sajib'))
// ============================

// 7. innerHTML

// ============================


// 8. innerHTML vs createElement()
//let menu = document.querySelector('#menu3')
// let p = document.createElement('p')
// p.textContent ='this is DOM'
// menu.appendChild(p)

// or
// let menu = document.querySelector('#menu3')
// menu.innerHTML ='<P> this is new DOM</P>'
// ==============================


// 9. DOM Document Fragment
// let menu4 = document.querySelector('#menu4')

// let lang = ['c','c++','c#','python','javascript']
// let  fragment = document.createDocumentFragment();
// lang.forEach((L)=>{
//     let li = document.createElement('li')
//     li.textContent= L;
//     fragment.appendChild(li)
// })

// menu4.appendChild(fragment)
// ==============================


// 10. DOM insertBefore
// let menu5 = document.querySelector('#menu5')
// let li = document.createElement('li')
// li.textContent = 'Food'
// menu5.insertBefore(li,menu5.firstElementChild)
// ==============================


// 11. append & prepend
//append
// let app = document.querySelector('#app')
// let names = ['tamim','mushfique','mashrafe']

// let DOMscript = names.map((nme)=>{
//     let li = document.createElement('li')
//     li.textContent = nme;
//     return li;
// })
// app.append(...DOMscript)

//prepend
// let apps = document.querySelector('#apps')
// let names = ['tamim','mushfique','mashrafe']

// let DOMscript = names.map((nme)=>{
//     let li = document.createElement('li')
//     li.textContent = nme;
//     return li;
// })
// apps.prepend(...DOMscript)
// ==============================


// 12.insertAdjasentHTML
// let menu6 = document.querySelector('#menu6')
// menu6.insertAdjacentHTML('beforebegin','<h2>begining</h2>')
// menu6.insertAdjacentHTML('afterbegin','<h2> after begining</h2>')
// menu6.insertAdjacentHTML('afterend','<h3>afterend</h3>')
// menu6.insertAdjacentHTML('beforeend','<h4>before end</h4>')
// ==============================


// 13.replace,clone,remove Child.
// let menu7 = document.querySelector('#menu7')
// replace
// let li = document.createElement('li')
// li.textContent = "Home"
// menu7.replaceChild(li,menu7.firstElementChild);
//remove
// menu7.removeChild(menu7.firstElementChild); 
//clone
// let cloneNode = menu7.cloneNode(true)
// document.body.appendChild(cloneNode)
// ==============================


// 14. DOM with HTML Attributes
// let btn = document.querySelector('#btn')
 //set()
// if(btn){
//     btn.setAttribute("id","shgaor")
// }

//get()
    // console.log(btn.getAttribute("target"))

//remove()
// btn.removeAttribute("target")  

//has()
// console.log(btn.hasAttribute("target"))
// ==============================


// 15.starting style with DOM
// let menu8 = document.querySelector('#menu8')
// menu8.style.width = '20%'
// menu8.style.height = '20%'
// menu8.style.color = 'red'
// menu8.style.backgroundColor = 'yellow'
// menu8.style.padding = '10px'
// ==============================


//16. getComputedStyle()
// let menu9 = document.querySelector('#menu9')
// let style = getComputedStyle(menu9)
// console.log(style.width)
// ==================================================


// 17.class List property
// let menu10 = document.querySelector('#menu10')
// menu10.classList.add('mennu')
// menu10.classList.remove('tennu_')
// menu10.classList.replace('mennu','dhannu')
// ==================================================


// 18. get width & height
// let menu11 = document.querySelector('#menu11')
// let width = menu11.offsetWidth;
// let height= menu11.offsetHeight
// console.log(width,height)
// ==================================================


// 19.starting with events
// let button1 = document.querySelector("#button1")
// button1.addEventListener("click",function(e){
//     alert('button is clicked!')
// })

// function Clicked(){
//     alert('button clicled!')
// }
// ==========================================================


// 20.event handling
// let btn = document.querySelector('#Clicked')
// btn.onclick = function (){
//     alert('this is attribute!')
// }
// 
// let DOM2 = document.querySelector('#DOM2')
// DOM2.addEventListener('click',()=>{
//     alert('DOM 2 level handler')
// })
// ============================================================


// 21.page load event
// ============================================================


// 22. mouse event
// let track  = document.querySelector('#track')

// function mouseEvent(e){
//     console.log(e.type)
// }
// track.addEventListener("mousedown",mouseEvent)
// track.addEventListener("mouseup",mouseEvent)
// track.addEventListener("click",mouseEvent)
// track.addEventListener("dblclick",mouseEvent)
// track.addEventListener("mouseover",mouseEvent)
// track.addEventListener("mouseout",mouseEvent)
// track.addEventListener("mouseenter",mouseEvent)
// ============================================================



// 23.keyboard event
let message  = document.querySelector("#message")
 function Eventname(e){
    console.log(e.key)
    document.write(e.key)
 }
//  message.addEventListener("keyup",Eventname)
//  message.addEventListener("keydown",Eventname)
//  message.addEventListener("keypress",Eventname)
// ============================================================



// 24.scroller event
let scroller =0;
window.addEventListener("scroll",()=>{
    let newscroller = window.scrollYOffset||document.documentElement.scrollTop 
    if(newscroller > scroller)
   { console.log("scroll down")}
else
{console.log('scrollup')}
scroller = newscroller
})
// ============================================================



// 25.focus and blur event
let myinput = document.querySelector('#myinput')
myinput.addEventListener("focus",(e)=>{
  e.target.style.backgroundColor = 'red'
  e.target.style.color = 'yellow'
})

myinput.addEventListener("blur",(e)=>{
    e.target.style.backgroundColor = 'yellow'
    e.target.style.color = 'red'
  })
  // ================================================



// 26.radio button
const group  = document.querySelector("#group")
let output = document.querySelector('#output')

const sizes = ['S','M','N',"L","XL","XXL"];

group.innerHTML = sizes.map((size)=>
  `<div>
      <input type="radio" id="${size}" value="${size}" name="size">
      <label for="${size}">${size}</label>
    </div>`
).join(" ")

const radioButton = document.querySelectorAll('input')
for( const radiobtn of radioButton){
  radiobtn.addEventListener("change",showOutput)
}

function showOutput(e){
  console.log(e)
  if(this.checked){
    document.querySelector("#output").innerHTML=`you selected ${this.value}`
  }
}