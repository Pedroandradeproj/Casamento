function copiarPix() {
  const input = document.getElementById("pixKey");
  input.select();
  input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value)
    .then(() => {
      document.getElementById("msg").innerText = "Chave copiada!";
      setTimeout(() => {
        document.getElementById("msg").innerText = "";
      }, 3000);
    })
    .catch(() => {
      document.getElementById("msg").innerText = "Erro ao copiar.";
    });
}

function voltarSite() {
  window.location.href = "https://sites.icasei.com.br/victore_lorrane/home";
}
