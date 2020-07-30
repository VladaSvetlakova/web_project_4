function showErrorMessage(input, form, {errorClass,inputErrorClass}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  error.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, {errorClass,inputErrorClass}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = '';
  error.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, rest) {
  if ((!input.validity.valid) || (input.value.length == 0)) {
    showErrorMessage(input, form, {errorClass,inputErrorClass} = rest)
  } else {
    hideErrorMessage(input, form, {errorClass,inputErrorClass} = rest)
  }
}

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}) {
  const isValid = inputs.every((input) => input.validity.valid)

  if(isValid) {
    button.classList.remove(inactiveButtonClass);
    button.disabled = false;
  } else {
    button.classList.add(inactiveButtonClass);
    button.disabled = true;
  }
}

function enableValidation ({formSelector, inputSelector, submitButtonSelector,...rest}) {
  const forms = [...document.querySelectorAll(formSelector)];   //array of form
    // just like const formList = Array.from(document.querySelectorAll(".popup__form"));

  forms.forEach((form) => {
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    form.addEventListener('submit', ((e) => {
      e.preventDefault();
    }))

    const buttonDiv = form.querySelector('.button-div');
    buttonDiv.addEventListener('click', ()  => {
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
    })

    inputs.forEach((input) => {
      input.addEventListener('input', () =>{
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
      })
    })
    toggleButtonState(inputs, button, rest);
  })
};

enableValidation({    // this funciton takes this object as an argument
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
});





