const dayNumberResult = document.getElementById("dayNumber-Result");
const hafta1 = document.querySelectorAll("#hafta1");
dayNameResult = document.getElementById("dayName-Result");
const inputText = document.getElementById("inputText");
const todo = document.querySelector(".todo");

hafta1.forEach((number) => {
  number.addEventListener("click", showNumber);

  function showNumber() {
    dayNumberResult.innerHTML = this.textContent;
    dayNameResult.innerHTML = this.className;
    
  }
});

function addTodo() {
  if (inputText.value !== "") var newP = document.createElement("li");
  todo.appendChild(newP);
  newP.classList.add(".todoResult");
  newP.innerHTML = inputText.value;

  inputText.value = "";
}
