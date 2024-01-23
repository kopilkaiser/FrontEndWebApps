// const container = document.getElementById("container");
// const registerBtn = document.getElementById("register");
// const loginBtn = document.getElementById("login");

// registerBtn.addEventListener("click", () => {
//   container.classList.add("active");
// });

// loginBtn.addEventListener("click", () => {
//   container.classList.remove("active");
// });

console.log("Script Started....");

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//length = 36

let passwordArr = [];
let passwordLength = 5;

// for (let i = 0; i < passwordLength; i++) {
//   let randomNumber = Math.floor((Math.random() * 100) % alphabets.length);
//   passwordArr.push(alphabets[randomNumber]);
// }

// //1. passwordArr.join("");
// //2. passwordArr.toString().replaceAll(',', "");
// let password = passwordArr.join("");
// console.log(password);

// Examination 1:
// code: Math.floor(Math.random() * x);
// where the result will range from [0, x-1], meaning x is exclusive.

//However, if we use Math.round() instead of Math.floor() the x will then be inclusive in the range of possible numbers.
// let val = Math.floor(Math.random() * 36);
// console.log("val: " + val);

let btnAdd = document.getElementById("btnAdd");
let userInput = document.getElementById("txtInput");
let list_items = document.getElementById("listItems");
let liDelButtons = document.getElementsByClassName("liDel");

btnAdd.addEventListener("click", addTodoListItem);

userInput.addEventListener("keyup", function(event){
  event.preventDefault();
  if(event.key === "Enter"){
    addTodoListItem();
  }
});

function addTodoListItem(){
  if (userInput.value == "") {
    alert("invalid input");
    return;
  }

  let liElem = document.createElement("li");
  let divElem = document.createElement("div");
  divElem.className = "liElemStyle";

  let spanElem = document.createElement("span");
  spanElem.innerText = `${userInput.value}`;
  spanElem.addEventListener("click", () => {
    if (spanElem.style.textDecoration == "line-through") {
      spanElem.style.textDecoration = "";
    } else {
      spanElem.style.textDecoration = "line-through";
    }
  });
  divElem.appendChild(spanElem);

  let liDelBtn = document.createElement("button");
  liDelBtn.textContent = "X";
  liDelBtn.classList.add("liDelBtn");

  liDelBtn.addEventListener("click", () => {
    if (liElem) {
      liElem.remove();
      console.log("liElem removed");
    } else {
      console.log("item couldn't be removed: " + liElem);
    }
  });
  divElem.appendChild(liDelBtn);

  liElem.appendChild(divElem);

  list_items.append(liElem);
  userInput.value = "";
}


console.log("something done before script ended");
console.log("Script Ended!");

