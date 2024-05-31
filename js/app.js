// const title = document.querySelector('.title')

// title.innerText
// title.innerHTML 
// title.textContent

// title.innerText = 'Hello'
// title.innerHTML = 'Hello'
// title.textContent = 'Hello'

// title.innerHTML = '<a href="https://google.kz">Hello</a>'

// const img = document.querySelector('img')

// img.setAttribute('src', 'img/project_2.svg')
// img.setAttribute('alt', 'build picture')

// const x = img.getAttribute('src')
// console.log(x)

// ------------------------------------------------------------


// const input = document.querySelector('.inp')
// input.setAttribute('type', 'password')


// const heo = document.querySelector('.txt')
// console.log(heo)

// ------------------------------------------------------

// const inputs = document.querySelectorAll('.form input')

// function changeType(x){
//     x.setAttribute('type', 'password')
// }

// for(let i = 0; i < inputs.length; i++){
//    changeType(inputs[i])
// }

// -------------------------------------------------



// ----------------------------------------------------

// const btn = document.querySelector('.block button')

// btn.addEventListener('click', ()=>{
//     const imageNames = ['project_1.svg', 'project_2.svg', 'project_3.svg']

//     const imgs = document.querySelectorAll('.image')

//     let counter = 0

//     for(let i = 0; i < imgs.length; i++){
//         counter++
//         imgs[i].setAttribute('src', `img/project_${counter}.svg`)
//     }
// })

// ------------------------------------------------

// let nums = [34, 54, 565, 54, 23, 21]
// let hello = []

// for(let i = 0; i < nums.length; i++){
//     let res = nums[i] * 2
//     hello.push(res)
// }

// -----------------------------------------------

// let nums = [34, 54, 565, 54, 23, 21]
// let hi = []

// nums.forEach((hello)=>{
//     hi.push(hello * 2)
// })

// console.log(hi)
// -----------------------------------------------

// const names = ['John', 'Bob', 'Sam', 'Adam']

// names.forEach((name)=>{
//     console.log(`hello ${name}`)
// })

// -------------------------------------------------

// console.log(typeof 4), if

// 1) В массиве есть разные числа и строки. Задача узнать есть ли в списке строки.
//     Доп задача: Если есть узнать количество.  (for, forEach)

// ---------------------------------------------------

// let nums = [13, 234, 45, [10, 20, 30], 89, 76]

// for(let i = 0; i < nums.length; i++){ 
//     for(let j = 0; j < nums[i].length; j++){
//         console.log(nums[i][j])
//     }
// }

// ----------------------------------------

// let txts = [34, 43, 'Hello', 3434, 'just', 'hi', 7878]
// let countStr = 0

// for(let i = 0; i < txts.length; i++){
//     let typeEl = typeof txts[i]
//     if(typeEl == 'string'){
//         countStr++
//     }
// }

// console.log(`Строк в этом массиве ${countStr}`)
// -------------------------------------------


// const btn = document.querySelector('.block button')
// let x  = 0



// btn.addEventListener('click', ()=>{
//     x++
//     if(x % 2 == 1){
//         const imageNames = ['project_1.svg', 'project_2.svg', 'project_3.svg']

//         const imgs = document.querySelectorAll('.image')

//         let counter = 0

//         for(let i = 0; i < imgs.length; i++){
//             counter++
//             imgs[i].setAttribute('src', `img/project_${counter}.svg`)
//         }
//     }
//     else{
//         const imageNames = ['project_1.svg', 'project_2.svg', 'project_3.svg']

//         const imgs = document.querySelectorAll('.image')

//         let counter = 0

//         for(let i = 0; i < imgs.length; i++){
//             counter++
//             imgs[i].setAttribute('src', ``)
//         }
//     }
// })

// -----------------------------------------

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const inp1 = document.querySelector('.pass1')
// const inp2 = document.querySelector('.pass2')

// function hello(inp, btn){
//     let inpType = inp.getAttribute('type')
//     if(inpType == 'password'){
//         btn.innerText = 'Hide'
//         inp.setAttribute('type', 'text')
//     }
//     else{
//         inp.setAttribute('type', 'password')
//         btn.innerText = 'Show'
//     }
// }

// btn1.addEventListener('click', ()=>{
//     hello(inp1, btn1)
// })

// btn2.addEventListener('click', ()=>{
//     hello(inp2, btn2)
// })

// -----------------------------------------

// const imgs = ['city1.png', 'city2.avif', 'city3.jpg', 'city4.jpg']
// const navs = document.querySelectorAll('nav')
// const aside = document.querySelector('aside')

// for(let i = 0; i < navs.length; i++){
//     navs[i].addEventListener('click', ()=>{
//         aside.style.background = `url(../img/${imgs[i]}) no-repeat center/cover`
//     })
// }

// -----------------------------------

// const range1 = document.querySelector('.range1')
// const range2 = document.querySelector('.range2')
// const block = document.querySelector('.block')
// const spn1 = document.querySelector('.spn1')
// const spn2 = document.querySelector('.spn2')


// function changeBlock(range, spn, st){
//     block.style.st = range.value + 'px'
//     spn.innerText = range.value
// }

// range1.addEventListener('input', ()=>{
//     changeBlock(range1, spn1, width)

// })

// range2.addEventListener('input', ()=>{
//     changeBlock(range2, spn2, height)
// })

// ------------------------------------------
// Всплытие сообытия

// const block = document.querySelector('.block')

// const navs = document.querySelectorAll('.block nav')

// for(let i = 0; i < navs.length; i++){
//     navs[i].addEventListener('click', ()=>{
//         console.log('Hello')
//     })
// }

// navs.forEach((nav)=>{
//     nav.addEventListener('click', ()=>{
//         console.log('Hello')
//     })
// })

// block.addEventListener('click', (el)=>{
//     if(el.target.tagName == 'NAV'){
//         console.log("hello")
//     }
// })

// ----------------------------------------

// .innerHTML

// contextMenu = ['green', 'red', 'blue', 'purple', 'pink']
// const main = document.querySelector('main')

// function changeBack(x){
//     main.style.background = x
// }

// document.addEventListener('contextmenu', (el)=>{
//     el.preventDefault()
//     let mouseX = el.offsetX
//     let mouseY = el.offsetY

//     main.innerHTML = `<section style="position: absolute; top: ${mouseY}px; left: ${mouseX}px">
//         <nav onclick="changeBack('green')">${contextMenu[0]}</nav>
//         <nav onclick="changeBack('red')">${contextMenu[1]}</nav>
//         <nav onclick="changeBack('blue')">${contextMenu[2]}</nav>
//         <nav onclick="changeBack('purple')">${contextMenu[3]}</nav>
//         <nav onclick="changeBack('pink')">${contextMenu[4]}</nav>
//     </section>`
// })

// Как указать место мышки?

// -----------------------------------------

// const slider = document.querySelector('.slider'),
//       btnNext = document.querySelector('button')

// let moveCount = 0

// btnNext.addEventListener('click', ()=>{
//     moveCount = moveCount - 400
//     slider.style.left = `${moveCount}px`
//     if(moveCount < -1200){
//         moveCount = 0
//     }
//     console.log(moveCount)
    
// })

// ---------------------------


// let txt = 'guys'
// let city = 'Astana'

// console.log(`Hello ${txt} ${city} welcome`)
// ----------------------------------------------------


// const inp = document.querySelector('input'),
//       btn = document.querySelector('button'),
//       all = document.querySelector('.all')

// btn.addEventListener('click', ()=>{
//     let txt = inp.value
//     const nav = document.createElement('nav')
//     nav.innerText = txt

//     setTimeout(()=>{
//         all.appendChild(nav)
//     }, 3000)
    
// })

// ------------------------------------------------


// setTimeout(()=>{
//     console.log('Hello')
// }, 1000)


// setInterval(()=>{
//     console.log('Hello')
// }, 1000)

// -----------------------
// const just = document.querySelector('.just')

// let count = 0

// setInterval(()=>{
//     if(count > 300){
//         count = -100
//     }
//     count = count + 100
//     just.style.left = `${count}px`
// }, 1000)

// ------------------------------

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

let time = 1000

const showFirst = ()=>{
    first.style.background = 'red'
}

const showSecond = ()=>{
    first.style.background = 'none'
    second.style.background = 'yellow'
}

const showThird = () =>{
    second.style.background = 'none'
    third.style.background = 'green'
}


setTimeout(()=>{
    showFirst()

    setTimeout(()=>{

        showSecond()
        setTimeout(()=>{

            showThird()
        }, time)
    }, time)
}, time)

// --------------------




















