// ScrollReveal animations
ScrollReveal().reveal('.menu-item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('header img', {
    delay: 500,
    distance: '50px',
    origin: 'top'
});

ScrollReveal().reveal('#location', {
    delay: 300,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('footer', {
    delay: 500,
    distance: '50px',
    origin: 'bottom'
});

// Chatbot toggle functionality
const chatIcon = document.getElementById('chatIcon');
const chatbotContainer = document.getElementById('chatbotContainer');

chatIcon.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'block' : 'none';
});
