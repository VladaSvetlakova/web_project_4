const editButton = document.querySelector('.profile__button-edit'); //here we are finding  the button in the html
const popupCloseButton = document.querySelector('.popup__button-close');
const popup = document.querySelector('.popup');
const inputTitle = document.querySelector('.popup__input_title');
const inputSubtitle = document.querySelector('.popup__input_subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const saveButton = document.querySelector('popup__button-save');


function togglePopup() {
  popup.classList.toggle('popup_visible');
}



editButton.addEventListener('click', togglePopup);  //making the popup open when the edit button is clicked
popupCloseButton.addEventListener('click', togglePopup);



const form = document.querySelector('.popup__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputSubtitle.value;
  popup.classList.toggle('popup_visible');
  togglePopup ();  // these two are the same 

})



