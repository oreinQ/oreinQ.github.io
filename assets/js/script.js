const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close-btn');
const accountBtn = document.getElementById('account-btn');
const accountList = document.getElementById('account-list');
const navList = document.getElementById('nav-list');

function menuHandler() {
    navList.classList.toggle('d-none');
    navBtn.classList.toggle('d-none');
}
function accountHandler() {
    accountList.classList.toggle('d-none');
}

navBtn.addEventListener('click', menuHandler);
closeBtn.addEventListener('click', menuHandler);
accountBtn.addEventListener('click', accountHandler);