let count=0


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
  
}
//selection the buttons
let drli1=document.querySelectorAll("button.r1")
let drli2=document.querySelectorAll("button.r2")
let drli3=document.querySelectorAll("button.r3")
//adding events here
for(let elem of drli1){
  elem.addEventListener("click",change)
 
}
for(let elem of drli2){
  elem.addEventListener("click",change)
 
}
for(let elem of drli3){
  elem.addEventListener("click",change)
 
}

//conditions for a win


