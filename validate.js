const formElement = document.querySelector(".popup__form");
const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
const buttonElement = formElement.querySelector(".popup__button-save");

const showInputError = (inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");

};

const hideInputError = (inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.textContent = "";
  errorElement.classList.remove("popup__error_visible");
};

const isValid = (inputElement) => { // (formElement, inputElement)
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage); // (formElement, inputElement)
  } else {
    hideInputError(inputElement); //(formElement, inputElement)
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
};

// The function takes an array of input fields
// and the button element, whose state you need to change

const toggleButtonState = (inputList, buttonElement) => {
  // If there is at least one invalid input
  if (hasInvalidInput(inputList)) {
    // make the button inactive
    buttonElement.classList.add("popup__button-save_inactive");
  } else {
        // otherwise, make it active
    buttonElement.classList.remove("popup__button-save_inactive");
  }
};

const setEventListeners = (formElement) => {
  toggleButtonState(inputList, buttonElement);
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  //const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  // Iterate over the resulting array
  inputList.forEach((inputElement) => {
    // add the input event handler to each field
    inputElement.addEventListener("input", () => {
      // Call the isValid() function inside the callback,
      // and pass the form and the element to be checked to it
      isValid(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  // Iterate over the resulting array
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancel default behavior for each form
      evt.preventDefault();
    });

    // Call the setEventListeners() function for each form,
    // taking a form element as an argument
    setEventListeners(formElement);
  });
};

enableValidation({    // this funciton takes this object as an argument
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: ".popup__button-save_inactive",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible"
});

/*

**********************************************************



function showErrorMessage(input, form, {errorClass,inputErrorClass,...rest}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  error.classList.add('popup__error_visible'); //errorClass
  input.classList.add('popup__input_type_error');  //inputErrorClass
}

function hideErrorMessage(input, form, {errorClass,inputErrorClass,...rest}) {
  const error = document.querySelector(`#${input.id}-error`);
  error.textContent = '';
  error.classList.remove('popup__error_visible'); //errorClass
  input.classList.remove('popup__input_type_error');  //inputErrorClass
}

function checkInputValidity(input, form, rest) {
  if (input.validity.valid) {
    hideErrorMessage(input, form, {errorClass,inputErrorClass,...rest})
  } else {
    showErrorMessage(input, form, {errorClass,inputErrorClass,...rest})
  }
}

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}) {
  const isValid = inputs.every((input) => input.valdity.valid)

  if(isValid) {
    button.classList.remove(inactiveButtonClass);
  } else {
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation ({formSelector, inputSelector, submitButtonSelector,...rest}) {
  const forms = [...document.querySelectorAll(formsSelector)];   //array of form
    // just like const formList = Array.from(document.querySelectorAll(".popup__form"));

  forms.forEach((form) => {
    form.addEventListener('submit', ((e) => {
      e.preventDefault;
    }))

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach((input) => {
      input.addEventListener('input', () =>{
        checkInputValidity(input, form, rest);
        toggleButtonState(inputs, button, rest);
      })
    })
  })
};


enableValidation({    // this funciton takes this object as an argument
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: ".popup__button-save_inactive",
  inputErrorClass: ".popup__input_type_error",
  errorClass: ".popup__error_visible"
});

*/



