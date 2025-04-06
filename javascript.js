// Validação do Formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede envio padrão do formulário

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") { // Campos vazios ao tentar enviar
        alert("Por favor, preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso!"); // Confirmação para o usuário
    document.getElementById("formulario").reset(); // Limpa o formulário após envio
});

// Menu Responsivo
const menuToggle = document.getElementById("menu-toggle"); // Botão hambúrguer
const menuLinks = document.getElementById("menu"); // Lista de links do menu

// Alterna os menus -> abre/fecha
menuToggle.addEventListener("click", function () {
  menuLinks.classList.toggle("active"); // Adiciona ou remove a ativação do menu
});

// Fecha o menu ao clicar em alguma opção
const links = menuLinks.querySelectorAll("a"); // Seleciona todos os links do menu
links.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.classList.remove("active"); // Fecha o menu após clique
  });
});

// Modal de Zoom
document.addEventListener("DOMContentLoaded", function () {
    const imagens = document.querySelectorAll(".projeto img"); // Seleciona todas as imagens dos projetos
    const modalZoom = document.getElementById("modalZoom"); // Modal de zoom
    const imagemZoom = document.getElementById("imagemZoom"); // Imagem ampliada dentro do modal
    const fecharZoom = document.querySelector(".fecharZoom"); // Botão para fechar o zoom
    const descricaoZoom = document.getElementById("descricaoZoom"); // Descrição dentro do modal

    imagens.forEach(img => {
        img.addEventListener("click", () => {
            imagemZoom.src = img.src; // Define a imagem clicada como foco do modal
            modalZoom.classList.add("ativo"); // Mostra o modal com fade

            // Pega a descrição do projeto correspondente
            const projeto = img.closest(".projeto"); // Container do projeto atual
            const descricao = projeto.querySelector(".descricao").innerHTML; // Conteúdo da descrição
            descricaoZoom.innerHTML = descricao; // Insere a descrição no modal
        });
    });

    fecharZoom.addEventListener("click", () => {
        modalZoom.classList.remove("ativo"); // Fecha o modal ao clicar no "X"
    });

    modalZoom.addEventListener("click", event => {
        if (event.target === modalZoom) {
            modalZoom.classList.remove("ativo"); // Fecha o modal ao clicar fora da imagem
        }
    });
});
