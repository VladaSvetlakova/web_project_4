const editButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const inputTitle = document.querySelector('.popup__input-title');
const inputSubtitle = document.querySelector('.popup__input-subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const saveButton = document.querySelector('.popup__button-save');


function togglePopup() {
  popup.classList.toggle('popup_visible');
}

function onSubmit(submitEvent){
  submitEvent.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputSubtitle.value;
  togglePopup ();
}

editButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
form.addEventListener('submit', onSubmit);







