// attributes and properties
// -setAttribute, getAttribute, removeAttribute, hasAttribute;
// with data -* name
// input.value (property, current state) vs input.getAttribute("value") (attribute, initial state)

// const h3 = document.querySelector("#id1");

// h3.setAttribute("width", "200px");

// console.log(h3.getAttribute("width"));

// // h3.removeAttribute("class");

// let res = h3.getAttribute("class");

// console.log(res);

// console.log(h3.hasAttribute("class"));

// const userCard = document.querySelector("#user_card");

// console.log(userCard.getAttribute("data-user-id"));

// userCard.dataset.userId = "678"

// console.log(userCard.getAttribute("data-user-id"));

// input.value vs input.getAttribute('value')

// const inp = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("this is inp.value->", inp.value);
//   console.log("this is via attribute->", inp.getAttribute("value"));
// });

// creating inserting and removing elements from dom

// 1. createElement

// **Old API (still runs everywhere):**

// - `appendChild()` / `insertBefore()` / `removeChild()`

// **Modern API (know both):**

// - `append()` — multiple nodes + strings in one call
// - `prepend()` / `before()` / `after()` / `replaceWith()`

// let footer = document.createElement("footer");
// const span = document.createElement("span");

// span.innerHTML = "hey i m <i>dynamic...</i>";

// main.append(footer, span);

// main.removeChild(span);

// insertBefore-------

const main = document.querySelector("main");

const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box2.classList.add("box");
box2.style.backgroundColor = "yellow";
box3.classList.add("box");
box3.style.backgroundColor = "blue";

main.append(box1, box2);
// main.prepend(box3) sabse pehle insert kro ya place karo

box1.replaceWith(box3)

main.replaceChild(box1, box3)