const formContactUs = document.querySelectorAll('.form-contact-us')
const submitButton = document.querySelectorAll('.form-contact-us__submit-button');
const formContactUsCustomerInformation = document.querySelectorAll('.form-contact-us__customer-information');

function formContactUsSubmitHandler(evt){
    evt.preventDefault();
    if (evt.target.querySelector('.form-contact-us__customer-information').value === ''){
        console.log('Форма не прошла валидацию! Необходимо заполнить соответствующее поле!');
        return
    }
    if (evt.submitter.textContent === 'Круто, спасибо за доверие!'){
        console.log('Мы уже работаем над вашей заявкой!');
        return
    }
    submitButton.forEach(function (currentValue){
        currentValue.textContent = "Круто, спасибо за доверие!";
    });
    formContactUsCustomerInformation.forEach(function (currentValue){
        currentValue.value= evt.target.querySelector('.form-contact-us__customer-information').value;
    });
}

formContactUs.forEach(function (currentValue,index, currentArray){
    this.addEventListener('submit',formContactUsSubmitHandler);
})