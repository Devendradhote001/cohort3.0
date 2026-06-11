const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;

  todoBox.innerHTML += `<div class="li">
          <h3>${value}</h3>
          <div>
            <button class="btn edit">Edit</button>
            <button class="btn del">Delete</button>
          </div>
        </div>`;

  inp.value = "";
});
