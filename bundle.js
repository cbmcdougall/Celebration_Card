(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {renderCard, deleteCard, clearForm} = require("./helpers");
const inputForm=document.querySelector("form");
const card=document.getElementById("card");

function handleFormSubmit(e) {
    e.preventDefault();
    const greeting = e.target.greeting.value;
    const event = e.target.eventType.value;
    const message = e.target.message.value;
    inputForm.className="hideItem";
    card.className="showItem";
    renderCard(greeting,event,message);
}
function submitNewForm(e) {
    e.preventDefault();
    inputForm.className="showItem";
    card.className="hideItem";
    deleteCard();
    clearForm();
}

module.exports = { 
    handleFormSubmit, 
    submitNewForm 
}
},{"./helpers":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
const { handleFormSubmit, submitNewForm } = require("./handlers")

const inputForm=document.querySelector("form");
inputForm.addEventListener("submit", handleFormSubmit);

const newForm=document.getElementById("newCard");
newForm.addEventListener("submit", submitNewForm);
},{"./handlers":1}]},{},[3]);
