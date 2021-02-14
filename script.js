let count=0
let arr=new Array(9).fill(null)
let p1=""
let p2=""

let menu=document.querySelector("#name")
let player1=document.querySelector(".input1")
let player2=document.querySelector(".input2")
let button=document.querySelector("button")

function nameing(){
  p1=player1.value
  p2=player2.value
  menu.style.display="none"
  
}

//writing X or O
function change(){
  if(count%2==0){
    this.innerText="X"
    count=count+1
    arr[this.value]=true
    name="O"
  }
  else{
    this.innerText="O"
    count=count+1
    arr[this.value]=false
    name="X"
  }
  this.disabled="true"
  
}
//selection the buttons
let drli1=document.querySelectorAll("button.r1")
let drli2=document.querySelectorAll("button.r2")
let drli3=document.querySelectorAll("button.r3")

//adding events here
for(let elem of drli1){
  elem.addEventListener("click",change)
  elem.addEventListener("click",check)
}
for(let elem of drli2){
  elem.addEventListener("click",change)
  elem.addEventListener("click",check)
}
for(let elem of drli3){
  elem.addEventListener("click",change)
  elem.addEventListener("click",check)
}
button.addEventListener("click",nameing)

//conditions for a win or draw
function check(){
  if(arr[0]===true && arr[1]===true && arr[2]===true ||
     arr[3]===true && arr[4]===true && arr[5]===true ||
     arr[6]===true && arr[7]===true && arr[8]===true ||
     arr[0]===true && arr[3]===true && arr[6]===true ||
     arr[1]===true && arr[4]===true && arr[7]===true ||
     arr[2]===true && arr[5]===true && arr[8]===true ||
     arr[0]===true && arr[4]===true && arr[8]===true ||
     arr[2]===true && arr[4]===true && arr[6]===true ){

       setTimeout(()=>{
         alert(`${p1} wins!!!`)
         reset()
       },50)
       
     }

  else if(arr[0]===false && arr[1]===false && arr[2]===false ||
     arr[3]===false && arr[4]===false && arr[5]===false ||
     arr[6]===false && arr[7]===false && arr[8]===false ||
     arr[0]===false && arr[3]===false && arr[6]===false ||
     arr[1]===false && arr[4]===false && arr[7]===false ||
     arr[2]===false && arr[5]===false && arr[8]===false ||
     arr[0]===false && arr[4]===false && arr[8]===false ||
     arr[0]===false && arr[4]===false && arr[8]===false ||
     arr[2]===false && arr[4]===false && arr[6]===false ){

      setTimeout(()=>{
         alert(`${p2} wins!!!`)
         reset()
       },50)

     }
  else if(count>=9){
      setTimeout(()=>{
         alert(`It was a DRAW!`)
         reset()},10)
  }
}

//reset the game
function reset(){
  for(let elem of drli1){
  elem.innerText=""
  elem.removeAttribute("disabled")
  
}
for(let elem of drli2){
  elem.innerText=""
   elem.removeAttribute("disabled")
}
for(let elem of drli3){
  elem.innerText=""
   elem.removeAttribute("disabled")
}
for(let i=0;i<9;i++){
  arr[i]=null
}
menu.style.display=""
count=0
}
