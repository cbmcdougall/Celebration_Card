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