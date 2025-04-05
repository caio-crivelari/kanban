const cardsDescription = document.querySelectorAll(".card p");
const characterLimit = 67;

cardsDescription.forEach((paragraph) => {
  const fullText = paragraph.innerText; // Guarda o texto original
  const isAboveLimit = fullText.length > characterLimit;

  if (isAboveLimit) {
    paragraph.dataset.fullText = fullText; // Armazena o texto completo no atributo data
    paragraph.innerText = fullText.substring(0, characterLimit) + "...";

    paragraph.addEventListener("mouseenter", () => {
      paragraph.innerText = fullText; // Mostra o texto completo ao passar o mouse
    });

    paragraph.addEventListener("mouseleave", () => {
      paragraph.innerText = fullText.substring(0, characterLimit) + "..."; // Volta ao encurtado ao tirar o mouse
    });
  }
});

/* DRAG AND DROP */

const cardItem = document.querySelectorAll(".card");

cardItem.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
  dropzones.forEach((dropzone) => {
    dropzone.classList.add("highlighted-zone");
  });
  e.currentTarget.classList.add("is-dragging"); // Adiciona a classe "dragging" ao item arrastado
}

function dragEnd(e) {
  dropzones.forEach((dropzone) => {
    dropzone.classList.remove("highlighted-zone");
  });
  e.currentTarget.classList.remove("is-dragging");
}

const dropzones = document.querySelectorAll(".dropzone");

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
});

function dragenter() {}

function dragover(e) {
  e.currentTarget.classList.add("over");
  const draggingCard = document.querySelector(".is-dragging");
  e.currentTarget.appendChild(draggingCard);
}

function dragleave(e) {
  e.currentTarget.classList.remove("over");
}
