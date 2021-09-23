const inputForm=document.querySelector("form");
inputForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault();
    const greeting = e.target.greeting.value;
    const event = e.target.eventType.value;
    const message = e.target.message.value;
    inputForm.className="hideForm";
    renderCard(greeting,event,message);
}

function renderCard(greeting,event,message) {
    const cardGreeting = document.getElementById("card-greeting");
    const cardEvent = document.getElementById("card-event");
    const cardMessage = document.getElementById("card-message");
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