const cardGreeting = document.getElementById("card-greeting");
const cardEvent = document.getElementById("card-event");
const cardMessage = document.getElementById("card-message");

function renderCard(greeting,event,message) {
    let eventText;
    switch (event) {
        case "birthday":
            eventText = "Happy birthday!";
            break;
        case "wedding":
            eventText = "Congratulations on your wedding!";
            break;
        case "new job":
            eventText = "Good luck in your new job!"
            break;
        default:
            eventText = "Happy schmingling!"
            break;
    }
    cardGreeting.textContent = greeting;
    cardEvent.textContent = eventText;
    cardMessage.textContent = message;
}

function deleteCard() {
    cardGreeting.textContent = "";
    cardEvent.textContent = "";
    cardMessage.textContent = "";
}

function clearForm() {
    const greetingForm = document.getElementById("greeting")
    const eventForm = document.getElementsByName("eventType")
    const messageForm = document.getElementById("message")
    greetingForm.value = "";
    eventForm.forEach(event => { event.checked = false });
    messageForm.value = "";   
}

module.exports = {
    renderCard,
    deleteCard,
    clearForm
}