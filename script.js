// Avatar Preview
const avatar = document.getElementById("avatar");
const preview = document.getElementById("preview");

avatar.addEventListener("change", function () {
  const file = avatar.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});

// Form Submission
document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  localStorage.setItem("userNome", nome); // salva nome
  window.location.href = "welcome.html";
});
const nome = localStorage.getItem("userNome");
    document.getElementById("perfilNome").textContent = nome;