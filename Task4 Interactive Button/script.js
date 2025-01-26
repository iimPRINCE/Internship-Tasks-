
const button = document.getElementById('interactiveButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    const messages = [
        "Hello, World!",
        "You clicked the button!",
        "Keep going, you're doing great!",
        "JavaScript is fun!",
        "Have a fantastic day!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
});
