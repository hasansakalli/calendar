

const body = document.querySelector("body");
const dayNumberResult= document.getElementById("dayNumber-Result");
const hafta1 = document.querySelectorAll("#hafta1");
dayNameResult= document.getElementById("dayName-Result");
const sat= document.querySelectorAll(".sat");
const fri= document.querySelectorAll(".fri");
const inputText= document.getElementById("inputText");
const todoResult= document.getElementById("todoResult");
const todo= document.querySelector(".todo");



// let i=0
// for(i=0; i< 31; i++){
// pasiv[i].textContent;
    
// }
// //  console.log(pasiv[i].textContent) 

hafta1.forEach(number=> {
    number.addEventListener("click", showNumber)
       
    function showNumber(){
        dayNumberResult.innerHTML=this.textContent
        dayNameResult.innerHTML=this.className
        dayNameResult.style.
        console.log(this.className)
      
      
        }
   
});  

function addTodo(){
    if(inputText.value!=="")
   var newP= document.createElement("li");
    todo.appendChild(newP)
    newP.classList.add(".todoResult")
    newP.innerHTML= inputText.value;

    inputText.value="";

}