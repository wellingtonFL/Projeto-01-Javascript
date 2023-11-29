const valor = document.getElementById('valor');
const maisButton = document.getElementById('mais');
const menosButton= document.getElementById('menos');
const resetarButton = document.getElementById('resetar');

const updateValue = () =>{
    valor.innerHTML = count;
}

let count = 0;
let intervalId= 0 ;


maisButton.addEventListener('mousedown',() =>{
    intervalId = setInterval(()=> {
       count += 1;
       updateValue();
    
    }, 100)
})
menosButton.addEventListener('mousedown',() =>{
    intervalId = setInterval(()=> {
       count -= 1;
       updateValue();
    
    }, 100)
})

resetarButton.addEventListener('click',() =>{
   count = 0 ;
   updateValue();
})

document.addEventListener('mouseup', () => clearInterval(intervalId) )