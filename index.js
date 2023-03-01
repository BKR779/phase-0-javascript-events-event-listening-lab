const btn = document.getElementById("button");
const div = document.querySelector("body div");

function addingEventListener() {
  btn.addEventListener("click", () => alert("Ayo!"));
  div.addEventListener("mouseenter", function () {
    button.disabled = true;
  });
  div.addEventListener("mouseleave", function () {
    button.disabled = false;
  });
}

addingEventListener();