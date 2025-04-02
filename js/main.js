const cardsDescription = document.querySelectorAll('.card p');
const characterLimit = 67;

cardsDescription.forEach(paragraph => {
    const fullText = paragraph.innerText; // Guarda o texto original
    const isAboveLimit = fullText.length > characterLimit;
    
    if (isAboveLimit) {
        paragraph.dataset.fullText = fullText; // Armazena o texto completo no atributo data
        paragraph.innerText = fullText.substring(0, characterLimit) + '...';

        paragraph.addEventListener('mouseenter', () => {
            paragraph.innerText = fullText; // Mostra o texto completo ao passar o mouse
        });

        paragraph.addEventListener('mouseleave', () => {
            paragraph.innerText = fullText.substring(0, characterLimit) + '...'; // Volta ao encurtado ao tirar o mouse
        });
    }
});