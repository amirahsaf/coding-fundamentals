// select DOM Elements

const addBtn = document.querySelector(".add__button");

const notification = document.getElementById('notif');

const closeBtn = document.getElementsByClassName('card__cta')[0];



addBtn.addEventListener("click", notifPop);

function notifPop() {
    notification.classList.remove('hidden');
    notification.classList.add('show');
}

closeBtn.addEventListener("click", closeCard);

function closeCard() {
    notification.classList.remove('show');
    notification.classList.add('hidden');
}
