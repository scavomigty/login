const wrapper = document.querySelector(".wrapper");
const loginLink= document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnloginpopup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    // alert("idan");
    wrapper.classList.add('active');
   
});
loginLink.addEventListener('click',()=>{
    
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    // alert("idan");
    wrapper.classList.add('active-popup');});
    iconClose.addEventListener('click',()=>{
        wrapper.classList.remove('active-popup');
    })