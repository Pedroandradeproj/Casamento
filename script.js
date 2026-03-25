function copiarPix() {
  const input = document.getElementById("pixKey");
  input.select();
  input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value)
    .then(() => {
      document.getElementById("msg").innerText = "Chave copiada!";
    })
    .catch(() => {
      document.getElementById("msg").innerText = "Erro ao copiar.";
    });
}