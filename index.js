// const API_KEY = "2d52d9148a454e2caab522f1d4a791c7"
// const URL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2d52d9148a454e2caab522f1d4a791c7"

// Navigation menu toggle
const NavMenu = document.querySelector('.nav_menu');
const NavToggle = document.querySelector('.nav_toggle');
const NavClose = document.querySelector('.nav_close');

NavToggle.addEventListener('click', () => {
    NavMenu.classList.toggle('show-menu');
});

NavClose.addEventListener('click', () => {
    NavMenu.classList.remove('show-menu');
});

// Search bar toggle
const search = document.querySelector('.search');
const searchbtn = document.querySelector('.nav_search');
const searchclose = document.querySelector('.search_close');

searchbtn.addEventListener('click', () => {
    search.classList.toggle('show-search');
});

searchclose.addEventListener('click', () => {
    search.classList.remove('show-search');
});

// Login modal toggle
const login = document.getElementById('login');
const loginBtn = document.getElementById('login_btn');
const loginClose = document.getElementById('login_close');

loginBtn.addEventListener('click', () => {
    login.classList.add('show-login');
});

loginClose.addEventListener('click', () => {
    login.classList.remove('show-login');
});

// Contact Us feedback
document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.getElementById("send-button");
    const messageElement = document.getElementById("message");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault(); // prevent form submission
        messageElement.textContent = "Thank you for contacting us. We will respond to you as soon as possible.";
        messageElement.style.display = "block";
        setTimeout(function () {
            messageElement.style.display = "none";
        }, 2200);
    });
});

// Tennis website
let tennis = document.getElementById('tennis')
window.onscroll = function () {

    let value = scrollY;
    console.log(value)
    stars.style.left = value + 'px'
}

// Swimming website

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("white-theme");
    if (document.body.classList.contains("white-theme")) {
        icon.src = "/project images/moon.png";
    } else {
        icon.src = "/project images/sun.png";
    }
}