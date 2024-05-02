let list = document.querySelectorAll('nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active')
}
list.forEach((i) =>
i.addEventListener('click',active));



// about

let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// JavaScript for handling the mobile navigation menu
document.querySelector('.fas.fa-bars').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

document.querySelector('.fas.fa-times').addEventListener('click', function () {
    document.querySelector('nav ul').classList.remove('show');
});

