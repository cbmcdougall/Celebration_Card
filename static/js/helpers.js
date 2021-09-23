const card = document.getElementById("card-body");
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
    setBackgroundImage();
}

function deleteCard() {
    cardGreeting.textContent = "";
    cardEvent.textContent = "";
    cardMessage.textContent = "";
    card.style.backgroundImage=null;
    card.style.backgroundRepeat=null;
    card.style.backgroundSize=null;
}

function clearForm() {
    const greetingForm = document.getElementById("greeting")
    const eventForm = document.getElementsByName("eventType")
    const messageForm = document.getElementById("message")
    greetingForm.value = "";
    eventForm.forEach(event => { event.checked = false });
    messageForm.value = "";   
}

async function getPic() {
    try {
        const resp = await fetch('https://aws.random.cat/meow')
        const data = await resp.json();
        return data.file;
    } catch(err) {
        console.error('Whoops, no pics found! ${err}');
    }   
}

async function setBackgroundImage() {
    const picUrl = await getPic();
    card.style.backgroundImage=`url(${picUrl})`;
    card.style.backgroundRepeat="no-repeat";
    card.style.backgroundSize="cover";
}

module.exports = {
    renderCard,
    deleteCard,
    clearForm
}