/**
 * =============================================
 * Script para Funcionalidades FMPM IPTV
 * =============================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Funcionalidade do Acordeão (FAQ)
     * Procura por todos os botões de pergunta no FAQ e
     * adiciona um ouvinte de clique para alternar a classe 'active',
     * que mostra ou esconde a resposta.
     */
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const questionButton = item.querySelector('.faq-question');
            
            if (questionButton) {
                questionButton.addEventListener('click', () => {
                    // Fecha todos os outros itens para manter apenas um aberto
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });

                    // Alterna (abre/fecha) o item clicado
                    item.classList.toggle('active');
                });
            }
        });
    }

    // Você pode adicionar mais scripts de interatividade aqui no futuro.

});