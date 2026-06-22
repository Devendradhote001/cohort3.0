// // console.log(React);

// let h1 = document.createElement("h1");
// h1.textContent = "hello";

// console.log(h1);

// // react dom, virtual dom---

// let rh1 = React.createElement(
//   "h1",
//   null,
//   React.createElement("span", {}, "i m under h1")
// );

// let realDomElem = document.querySelector("#root");

// let rootOfReact = ReactDOM.createRoot(realDomElem).render(rh1);

import { a, sum } from "./main.js";

console.log(a);

let res = sum(50, 90);
console.log(res);

let RDomElement = document.querySelector("#root");

let div = React.createElement("div", {}, [
  React.createElement("h1", {}, React.createElement("span", {}, "i m span")),
  React.createElement(
    "h2",
    {},
    React.createElement("span", {}, "i m span in h2")
  ),
]);

ReactDOM.createRoot(RDomElement).render(div);
