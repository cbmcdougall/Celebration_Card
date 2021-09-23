const inputForm=document.querySelector("form");
inputForm.addEventListener("submit", handleFormSubmit);

const newForm=document.getElementById("newCard");
newForm.addEventListener("submit", submitNewForm);

function handleFormSubmit(e) {
    e.preventDefault();
    const greeting = e.target.greeting.value;
    const event = e.target.eventType.value;
    const message = e.target.message.value;
    inputForm.className="hideForm";
    newForm.className="showForm";
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

function submitNewForm(e) {
    e.preventDefault();
    inputForm.className="showForm";
    newForm.className="hideForm";
    deleteCard();
    clearForm();
}

function deleteCard() {
    const cardGreeting = document.getElementById("card-greeting");
    const cardEvent = document.getElementById("card-event");
    const cardMessage = document.getElementById("card-message");
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