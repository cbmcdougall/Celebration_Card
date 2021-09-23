const { handleFormSubmit, submitNewForm } = require("./handlers")

const inputForm=document.querySelector("form");
inputForm.addEventListener("submit", handleFormSubmit);

const newForm=document.getElementById("newCard");
newForm.addEventListener("submit", submitNewForm);