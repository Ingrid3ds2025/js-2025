// COLOCANDO AS MENSAGENS EM UM VETOR OU ARRAY
let messages = [];

function addMessage() {
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');

    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    if(!username || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // ADICIONAR NOVA MENSAGEM AO VETOR OU ARRAY
    const newMessage = {
        username: username,
        message: message,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    };

    messages.push(newMessage);

    //ATUALIZAR TABELA
    updateChat();

    //Limpa campos
    messageInput.value = '';
    messageInput.focus();

}

    function updateChat(){
        const chatBody = document.getElementById('chat-body');
        chatBody.innerHTML = '';

        messages.forEach(msg => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${msg.username}</td>
              <td>${msg.message}</td>
              <td class="timestamp">${msg.timestamp}</td>
            `;
            chatBody.appendChild(row);
        })
    }

    //PERMITIR ENVIAR COOM A TEKCLA ENTER
    document.getElementById('message').addEventListener('keypress', function(e){
        if(e.key === 'Enter'){
            addMessage();
        }
    });