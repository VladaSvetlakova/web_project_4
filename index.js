const imagePopupParent = document.querySelector('.popup_type_image');
const imagePopup = imagePopupParent.querySelector('.popup__img');
const imgCaption = imagePopupParent.querySelector('.popup__caption');
const popupContainer = imagePopupParent.querySelector('.popup__container');
const imageCloseButton = imagePopupParent.querySelector('.popup__button-close');
const body = document.querySelector('.main');

const editButton = document.querySelector('.profile__button-edit');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editCloseButton = editProfilePopup.querySelector('.popup__button-close');

const inputTitle = document.querySelector('#title-input');
const inputSubtitle = document.querySelector('#url-input');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const form = document.querySelector('.popup__form');
const saveButton = document.querySelector('.popup__button-save');
const addButton = document.querySelector('.profile__button-add');

const addCardPopup = document.querySelector('.popup_type_add-card');
const addCloseButton = addCardPopup.querySelector('.popup__button-close');
const newCardTitle = addCardPopup.querySelector('.popup__input-title_card-name');
const newCardImage = addCardPopup.querySelector('.popup__input-subtitle_url');

function togglePopup(modal) {
  modal.classList.toggle('popup_visible');
};

function submitEditProfileForm(submitEvent){
  submitEvent.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputSubtitle.value;
  togglePopup (editProfilePopup);
};

form.addEventListener('submit', submitEditProfileForm);

editButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});


editCloseButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});

saveButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});


addButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

addCloseButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

imageCloseButton.addEventListener('click', (e) => {
  togglePopup(imagePopupParent);
  e.stopPropagation();
});

function showImage(data){
    imgCaption.textContent  = data.name;
    imagePopup.src = data.link;
};


const initialCards = [
  {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const cardTemplate = document.querySelector(".card-template").content.querySelector(".elements__item");

//creates a clone of the card template, returns the card , cardElement
const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".elements__place");
  const cardImage = cardElement.querySelector(".elements__photo");
  const likeButton = cardElement.querySelector(".elements__button");
  const cardRemoveButton = cardElement.querySelector(".elements__remove-button");

  //Title & image of card are taken from the title and url of the inputs of the data parameter
  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  cardImage.style.backgroundSize = "cover";

  cardRemoveButton.addEventListener('click', (e) => {
    e.target.closest('.elements__item').remove();
    e.stopPropagation();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__button_dark');
  });

  cardImage.addEventListener('click', () => {
    showImage(data);
    togglePopup(imagePopupParent);
  });

  return cardElement;

};

const grid = document.querySelector(".elements__grid");

// prepend adds CardElement to the beginning of the list
//CardElement already has all the children inside already modified
const renderCard = (data) => {
    grid.prepend(createCard(data));

};

//runs through initial array and 'renders' the card for each
initialCards.forEach((data) =>{
  renderCard(data);
});

//Add new card to beggining of grid
addCardPopup.querySelector('.popup__form').addEventListener('submit', (e) =>{
  e.preventDefault();
  const newCard = {
    name: newCardTitle.value,
    link: newCardImage.value
  };
  renderCard(newCard);
  togglePopup(addCardPopup);
});

imagePopup.addEventListener('click', (e) => {    //Click on actual img popup, we do not want the click to propogate
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
});

imagePopupParent.addEventListener('click', (e) => {
  togglePopup(imagePopupParent);
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    togglePopup(imagePopupParent);
  };
});




