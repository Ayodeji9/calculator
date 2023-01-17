let input = document.getElementById('input')
let input1 = document.getElementById('input1')
let btn = document.getElementById('btn')


let TIME = document.getElementById('TIME')
let day = document.getElementById('day')

let today = new Date()

let hr = today.getHours()
let min = today.getMinutes()
let sec = today.getSeconds()

TIME.textContent = `${hr}: ${min}: ${sec}`


let DayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 


let days = today.getDay()
day.textContent = DayArr[days]

setInterval(UpdateTime, 1000)






ventListener('mouseover', ()=>{
    if ((input.value === '') || (input1.value === '')) {
        input.style.borderColor="red"
        input1.style.borderColor="red"
        btn.classList.toggle('sr')
    }

    else{
        input.style.borderColor="green"
        input1.style.borderColor="green"
        btn.classList.remove('sr')
    }
})




// function Submit() {
//     if (input.value == '' && input1.value == '') {
//         input.style.borderColor = 'red'
//         input1.style.borderColor = 'red'
//         btn.style.backgroundColor = 'red'
//         btn.classList.toggle('sr')
//     }
//     if (input.value.startsWith('a') || input.value.startsWith('b') || input.value.startsWith('c') || input.value.startsWith('d') || input.value.startsWith('e') || input.value.startsWith('f') || input.value.startsWith('g') || input.value.startsWith('h') || input.value.startsWith('i') || input.value.startsWith('j') || input.value.startsWith('k') || input.value.startsWith('l') || input.value.startsWith('m') || input.value.startsWith('n') || input.value.startsWith('o') || input.value.startsWith('p') || input.value.startsWith('q') || input.value.startsWith('r') || input.value.startsWith('s') || input.value.startsWith('t') || input.value.startsWith('u') || input.value.startsWith('v') || input.value.startsWith('w') || input.value.startsWith('x') || input.value.startsWith('y') || input.value.startsWith('z')  &&  input1.value.startsWith('a') || input1.value.startsWith('b') || input1.value.startsWith('c') || input1.value.startsWith('d') || input1.value.startsWith('e') || input1.value.startsWith('f') || input1.value.startsWith('g') || input1.value.startsWith('h') || input1.value.startsWith('i') || input1.value.startsWith('j') || input1.value.startsWith('k') || input1.value.startsWith('l') || input1.value.startsWith('m') || input1.value.startsWith('n') || input1.value.startsWith('o') || input1.value.startsWith('p') || input1.value.startsWith('q') || input1.value.startsWith('r') || input1.value.startsWith('s') || input1.value.startsWith('t') || input1.value.startsWith('u') || input1.value.startsWith('v') || input1.value.startsWith('w') || input1.value.startsWith('x') || input1.value.startsWith('y') || input1.value.startsWith('z')  ) {
//         btn.style.backgroundColor = 'green'
//         // btn.classList.toggle('mr')
//     }

//      if (input.value.startsWith('a') || input.value.startsWith('b') || input.value.startsWith('c') || input.value.startsWith('d') || input.value.startsWith('e') || input.value.startsWith('f') || input.value.startsWith('g') || input.value.startsWith('h') || input.value.startsWith('i') || input.value.startsWith('j') || input.value.startsWith('k') || input.value.startsWith('l') || input.value.startsWith('m') || input.value.startsWith('n') || input.value.startsWith('o') || input.value.startsWith('p') || input.value.startsWith('q') || input.value.startsWith('r') || input.value.startsWith('s') || input.value.startsWith('t') || input.value.startsWith('u') || input.value.startsWith('v') || input.value.startsWith('w') || input.value.startsWith('x') || input.value.startsWith('y') || input.value.startsWith('z')    ) {
//         input.style.borderColor = 'green'
       
//     }


//    else if(input.value == ''  ) {
        
        
//         input.style.borderColor = 'red'
//     }

//     if (input1.value.startsWith('a') || input1.value.startsWith('b') || input1.value.startsWith('c') || input1.value.startsWith('d') || input1.value.startsWith('e') || input1.value.startsWith('f') || input1.value.startsWith('g') || input1.value.startsWith('h') || input1.value.startsWith('i') || input1.value.startsWith('j') || input1.value.startsWith('k') || input1.value.startsWith('l') || input1.value.startsWith('m') || input1.value.startsWith('n') || input1.value.startsWith('o') || input1.value.startsWith('p') || input1.value.startsWith('q') || input1.value.startsWith('r') || input1.value.startsWith('s') || input1.value.startsWith('t') || input1.value.startsWith('u') || input1.value.startsWith('v') || input1.value.startsWith('w') || input1.value.startsWith('x') || input1.value.startsWith('y') || input1.value.startsWith('z')) {
//         input1.style.borderColor = 'green'
//     }
//     else if (input1.value == '' ) {
        
//         input1.style.borderColor = 'red'
      
//     }


    

// }






// if (input1.value == '') {
//     input1.style.borderColor = 'red'
// }
// else if (input1.value.startsWith('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')) {

// input1.style.borderColor = 'green'
// }