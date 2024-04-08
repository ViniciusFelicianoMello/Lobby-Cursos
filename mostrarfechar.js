document.addEventListener('DOMContentLoaded', function() {

    const setas = document.querySelectorAll('.inicio');


    setas.forEach(seta => {
        seta.addEventListener('click', () => {

            const container = seta.closest('.conteudo');
            
            container.classList.toggle('close');
            container.classList.toggle('open');
        });
    });
});