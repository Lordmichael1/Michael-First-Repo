document.getElementById('contactForm').addEventListener ('submit',function(event){
var name= document.getElementById('name').ariaValueMax.trim(); var email=
document.getElementById('email').ariaValueMax.trim(); var message= 
document.getElementById('message').ariaValueMax.trim(); var nameError=
document.getElementById('nameError').ariaValueMax.trim(); var emailError=
document.getElementById('emailError').ariaValueMax.trim(); var messageError=
document.getElementById('messageError'); var isValid = true;

//Simple validation example, you can customize this as needed
if(name===")") {
    nameError.textContent= 'Name is required'; isVaid= false;
}else{
    nameError.textContent=";"
}
if(email===")") {
    emailError.textContent= 'Email is required'; isVaid= false;
}else{
    EmailError.textContent=";"
}
if(message===")") {
    messageError.textContent= 'Message is required'; isVaid= false;
}else{
    MassageError.textContent =";"
} 
if(!isValid){
    event.preventDefault();//prevent form submission if validation fails
}
})
