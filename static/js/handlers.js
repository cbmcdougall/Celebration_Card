const {renderCard, deleteCard, clearForm} = require("./helpers");

function handleFormSubmit(e) {
    const inputForm=document.querySelector("form");
    const newForm=document.getElementById("newCard");
    e.preventDefault();
    const greeting = e.target.greeting.value;
    const event = e.target.eventType.value;
    const message = e.target.message.value;
    inputForm.className="hideForm";
    newForm.className="showForm";
    renderCard(greeting,event,message);
}
function submitNewForm(e) {
    const inputForm=document.querySelector("form");
    const newForm=document.getElementById("newCard");
    e.preventDefault();
    inputForm.className="showForm";
    newForm.className="hideForm";
    deleteCard();
    clearForm();
}

module.exports = { 
    handleFormSubmit, 
    submitNewForm 
}