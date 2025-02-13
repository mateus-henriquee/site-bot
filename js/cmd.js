function copyCommands() {
    const commands = document.querySelector('.commands-section pre').innerText;
    navigator.clipboard.writeText(commands)
        .then(() => {
            const copyMessage = document.getElementById('copyMessage');
            copyMessage.style.display = 'flex';
            setTimeout(() => {
                copyMessage.style.display = 'none';
            }, 3000);
        })
        .catch(() => {
            alert('Erro ao copiar os comandos.');
        });
}

function typeCommands() {
    const commandsElement = document.querySelector('.commands-section pre code');
    const commandsText = `
/ola -
Exemplo: /ola

/musica -
Exemplo: /musica nome-da-musica

/piada -
Exemplo: /piada piada-engraçada

/horario -
Exemplo: /hoarario 20:08

/batalha -
Exemplo: /batalha user x bot

/incentivar -
Exemplo: /incentivo incentivo-motivador

/ajuda -
Exemplo: /ajuda

/aleatorio -
Exemplo: /exibe comando aleatorio

/gerar_imagem -
Exemplo: /imagem imagem-gerada
    `.trim(); // Remove espaços em branco no início e no final

    let index = 0;
    const typingSpeed = 55;

    function type() {
        if (index < commandsText.length) {
            commandsElement.innerHTML = commandsText.slice(0, index + 1);
            index++;
            setTimeout(type, typingSpeed);
            adjustDivHeight();
        }
    }

    type(); // Inicia a digitação
}

// Função para ajustar a altura da div da esquerda
function adjustDivHeight() {
    const commandsSection = document.querySelector('.commands-section');
    const preElement = document.querySelector('.commands-section pre');
    commandsSection.style.height = `${preElement.scrollHeight}px`; // Ajusta a altura conforme o conteúdo
}

// Inicia a animação ao carregar a página
window.onload = typeCommands;