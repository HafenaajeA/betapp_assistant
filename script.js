document.getElementById("gameToggle").addEventListener("change", function () {
  const table = document.querySelector("table");
  if (this.checked) {
    table.classList.add("show-soccer13");
  } else {
    table.classList.remove("show-soccer13");
  }
});
