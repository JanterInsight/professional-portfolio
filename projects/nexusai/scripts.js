// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotModal = document.getElementById('chatbot-modal');
    const closeChatbot = document.getElementById('close-chatbot');
    const sendMessage = document.getElementById('send-message');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    // Open chatbot when clicking "Empezar" on Basic plan
    const basicPlanBtn = document.querySelector('.pricing-card:first-child .btn');
    if (basicPlanBtn) {
        basicPlanBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openChatbot();
        });
    }
    
    // Close chatbot
    if (closeChatbot) {
        closeChatbot.addEventListener('click', closeChatbotModal);
    }
    
    // Send message
    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
    
    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatbotModal.classList.contains('active')) {
            closeChatbotModal();
        }
    });
    
    // Close when clicking outside
    chatbotModal.addEventListener('click', function(e) {
        if (e.target === chatbotModal) {
            closeChatbotModal();
        }
    });
    
    function openChatbot() {
        chatbotModal.classList.add('active');
        chatbotInput.focus();
    }
    
    function closeChatbotModal() {
        chatbotModal.classList.remove('active');
    }
    
    function sendChatMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addUserMessage(message);
        chatbotInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            addBotMessage(getBotResponse(message));
        }, 500);
    }
    
    function addUserMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message user-message';
        msgDiv.textContent = message;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function addBotMessage(message) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message bot-message';
        msgDiv.textContent = message;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(userMessage) {
        const responses = [
            "¡Interesante! Cuéntame más sobre eso.",
            "Entiendo. ¿Qué más necesitas?",
            "Perfecto, puedo ayudarte con eso.",
            "¡Buena pregunta! Esa es una característica premium.",
            "Gracias por tu mensaje. ¿En qué más puedo asistirte?",
            "¡Genial! Estoy aquí para ayudar.",
            "Interesante punto de vista. ¿Qué más opinas?",
            "¡Excelente! Esa es una de nuestras funciones principales."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
});