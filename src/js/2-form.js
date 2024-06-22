const form = document.querySelector(".js-feedback-form");
const formMessage = document.querySelector("[name='message']");
const formEmail = document.querySelector("[name='email']");

const formKey = "feedback-form-state";

const formData = {
    email: "",
  message: "", 

  
}

form.addEventListener('input', handlerInputData);
form.addEventListener('submit', handlerSubmitData);



function handlerInputData(event) {    
      formData[event.target.name] = event.target.value.trim();
        localStorage.setItem(formKey, JSON.stringify(formData));
  }
 

function loadData() {
  const savedData = localStorage.getItem(formKey);
  if (savedData) {
    const getData = JSON.parse(savedData);
    for (let key in getData) {
      form.elements[key].value = getData[key];
      formData[key] = getData[key];
    }
  }
}

document.addEventListener('DOMContentLoaded', loadData);

    function handlerSubmitData(event) {
     event.preventDefault();
      if (!formData.email || !formData.message) {
    return alert("Fill please all fields");
  } 

  console.log(formData);
  localStorage.removeItem(formKey);
      form.reset();
      formData.email = ""; 
      formData.message = "";
};

loadData();

