const bodyElement = document.body;
const formElement = bodyElement.querySelector('.loginUp');
const openForm = bodyElement.querySelector('.openForm');
const sentReg = bodyElement.querySelector('.sentReg');

openForm.addEventListener("click",function(e){
    console.log('1');
    formElement.classList.toggle('active');
});

var passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", function () {
    var maskedPassword = "*".repeat(passwordInput.value.length);
    passwordInput.value = maskedPassword;
});

mail.onblur = function() { 
  if (!mail.value.includes('@')) {
    mail.classList.add('invalid');
    error.innerHTML = 'Пожалуйста, введите правильный email.'
  }
};
  
mail.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    error.innerHTML = "";
  }
};

var sentCheckBox = document.getElementById("sentCheckBox");
var sentButton = document.querySelector(".sentReg");
var emailInput = document.getElementById("mail");
var passwordInput = document.getElementById("password");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phoneNumber");

sentButton.addEventListener("click", function () {
    if (sentCheckBox.checked) {
        var email = emailInput.value;
        var password = passwordInput.value;
        var name = nameInput.value;
        var PhoneNumber = phoneInput.value;

        alert("Email: " + email + "\nName: " + name + "\nPhoneNumber: " + PhoneNumber + "\nПароль: " + "*".repeat(password.length));
    }
    else {
        alert("Вы должны согласиться с условиями перед отправкой.");
        return false;
    }
    });

    
    
    nameInput.onblur = function() { 
      if (nameInput.value.length < 3) {
        nameInput.classList.add('invalid');
        nameError.innerHTML = 'Пожалуйста, введите имя длиной не менее 3 символов.'
      }
    };
      
    nameInput.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        nameError.innerHTML = "";
      }
    };
    
    phoneInput.onblur = function() { 
      if (!phoneInput.value.match(/^\d{13}$/)) {
        phoneInput.classList.add('invalid');
        phoneError.innerHTML = 'Пожалуйста, введите 13 цифр.'
      }
    };
      
    phoneInput.onfocus = function() {
      if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
        phoneError.innerHTML = "";
      }
    };
    
   
    
   