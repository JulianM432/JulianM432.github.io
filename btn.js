var unBtn = document.createElement("button");
unBtn.id = "back-btn";
unBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});
const unLink = document.createElement("link");
unLink.rel = "stylesheet";
unLink.href = "../../btn.css";
const $head = document.querySelector("head");
$head.appendChild(unLink);
const node = document.querySelector("body");
node.prepend(unBtn);
