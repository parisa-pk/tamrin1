const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');


form.addEventListener('submit' , function (evn) {
    evn.preventDefault();
   if (  nameInput.value === '' || age.value === '' || email.value === '' ) {
alert('لطفا گزینه های خالی را پر کنید')
   }
   else{alert(
   'نام شما :'+ nameInput.value+  ' و  '  +'سن شما :'+ age.value+'  و  ' +'ایمیل شما :'+email.value+'   و  '+'تلفن شما :'+phone.value)}
     })