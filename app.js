let input = document.getElementById('input')
let input1 = document.getElementById('input1')
let ac = document.getElementById('ac')
let del = document.getElementById('del')
let btnp = document.getElementById('btnp')
let btnd = document.getElementById('btnd')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btnm = document.getElementById('btnm')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btns = document.getElementById('btns')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btna = document.getElementById('btna')
let btn0 = document.getElementById('btn0')
let btndot = document.getElementById('btndot')
let btne = document.getElementById('btne')
let btnequal = document.getElementById('btnequal')






btn1.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 1
})
btn2.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 2
})
btn3.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 3
})
btn4.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 4
})
btn5.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 5
})
btn6.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 6
})
btn7.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 7
})
btn8.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 8
})
btn9.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 9
})
btn0.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 0
})
btn0.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + 0
})
btndot.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '.'
})
btnd.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '/'
})
btnm.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '*'
})
btna.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '+'
})
btnp.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '%'    
})
btns.addEventListener('click',()=>{
    let x = input.value 
    input.value = x + '-'
})
ac.addEventListener('click',()=>{
    let x = input.value 
    input.value =''
})
del.addEventListener('click',()=>{
    let x = input.value 
    input.value = x.substring(0 , x.length - 1)
})
btne.addEventListener('click',()=>{
    input.value = eval(input.value)
    
})
btnequal.addEventListener('click',()=>{
    input1.value = eval(input.value)

})