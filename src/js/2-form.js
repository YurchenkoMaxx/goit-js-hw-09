const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || { email: "", message: "" };

form.elements.email.value = formData.email || "";
form.elements.message.value = formData.message || "";


form.addEventListener('input', (event) => {

    const target = event.target;


   
    if (target.name === 'email' || target.name === 'message') {
        formData[target.name] = target.value.trim();
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    }

});

    form.addEventListener('submit', (event) => {
    event.preventDefault(); 

 
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("Form DATA:", formData); 

    localStorage.removeItem("feedback-form-state");


    formData.email = "";
    formData.message = "";


    form.reset();
});





