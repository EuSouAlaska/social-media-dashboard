const themeSwitcher = document.getElementById("switch-theme");
function troca() {
  const selectBody = document.body.classList.toggle("ativo");
}
themeSwitcher.addEventListener("click", troca);
