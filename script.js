function showSection(id) {
  const secoes = document.querySelectorAll(".secao");
  secoes.forEach(secao => secao.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}
