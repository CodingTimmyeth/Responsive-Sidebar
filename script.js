const menu = document.getElementById('menu')
const close = document.getElementById('close')
const social = document.getElementById('social')

function toggleSocialMediaMenu() {
    social.classList.toggle('hide')
    menu.classList.toggle('hide')
    close.classList.toggle('hide')
}

menu.addEventListener('click', toggleSocialMediaMenu)
close.addEventListener('click', toggleSocialMediaMenu)