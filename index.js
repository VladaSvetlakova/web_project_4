const imagePopup = document.querySelector('.popup__type_image')
const editButton = document.querySelector('.profile__button-edit');

const editProfilePopup = document.querySelector('.popup__type_edit-profile');

const addCardPopup = document.querySelector('.popup__type_add-card');

const editCloseButton = editProfilePopup.querySelector('.popup__button-close');

const addCloseButton = addCardPopup.querySelector('.popup__button-close');

const imageCloseButton = imagePopup.querySelector('.popup__button-close');

const inputTitle = document.querySelector('.popup__input-title');
const inputSubtitle = document.querySelector('.popup__input-subtitle');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle')

const form = document.querySelector('.popup__form');
const saveButton = document.querySelector('.popup__button-save');
const addButton = document.querySelector('.profile__button-add');




addButton.addEventListener('click', () => {
  togglePopup();
});


function togglePopup(modal) {
  modal.classList.toggle('popup_visible');
}

function onSubmit(submitEvent){
  submitEvent.preventDefault();
  profileTitle.textContent = inputTitle.value;
  profileSubtitle.textContent = inputSubtitle.value;
  togglePopup ();
}

form.addEventListener('submit', onSubmit);

editButton.addEventListener('click', () => {
  togglePopup(editProfilePopup);
});


editCloseButton.addEventListener('click', () => {
  togglePopup(editProfilePopup)
});

saveButton.addEventListener('click', () => {
  togglePopup(editProfilePopup)
});


addButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

addCloseButton.addEventListener('click', () => {
  togglePopup(addCardPopup);
});

/*function toggleLike() {
  likeButton.classList.toggle("elements__button_dark");
} */



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

const createCard = (data) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".elements__place");
  const cardImage = cardElement.querySelector(".elements__photo");
  const likeButton = cardElement.querySelector(".elements__button");
  const cardRemoveButton = cardElement.querySelector(".elements__remove-button");

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;

  cardRemoveButton.addEventListener('click', (e) => {
    e.target.closest('.elements__item').remove();
    e.stopPropagation();
  });

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('elements__button_dark');
  });

  cardImage.addEventListener('click', () => {
    togglePopup(imagePopup);
  });

  imageCloseButton.addEventListener('click', () => {
    togglePopup(imagePopup);
  });

  return cardElement;

}

const grid = document.querySelector(".elements__grid");

const renderCard = (data) => {
    grid.prepend(createCard(data)); // prepend adds CardElement to the beginning of the list of children
  //CardElement already has all the children inside already modified
};

initialCards.forEach((data) =>{
  renderCard(data);
});







