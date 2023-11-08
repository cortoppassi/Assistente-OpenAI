const chatLog = document.getElementById('chat-log');
        const userInput = document.getElementById('user-input');
        const sendButton = document.getElementById('send-button');

        sendButton.addEventListener('click', () => {
            const userMessage = userInput.value;
            userInput.value = '';

            // Adicione a mensagem do usuário ao registro do chat
            chatLog.innerHTML += `<p><strong>Você:</strong> ${userMessage}</p>`;

            // Simule uma resposta do chatbot (você pode substituir isso por uma lógica real do chatbot)
            setTimeout(() => {
                const botResponse = 'Eu sou um chatbot futurista!';
                chatLog.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;

                // Role para a parte inferior do registro do chat
                chatLog.scrollTop = chatLog.scrollHeight;
            }, 500);
        });