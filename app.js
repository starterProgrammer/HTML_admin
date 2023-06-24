document.getElementById('menu-btn').addEventListener('click', () => {
    const asideMenu = document.getElementById('side-menu').style.display = "block"
})
document.getElementById('close-btn').addEventListener('click', () => {
    const asideMenu = document.getElementById('side-menu')
    asideMenu.style.display = "none"
})
const toggler = document.querySelector('.theme-toggler')

toggler.addEventListener('click', () => {

    toggler.children[0].classList.toggle('active')
    document.querySelector('span:nth-child(2)').classList.toggle('active')

    document.body.classList.toggle('dark-theme-varriables')

})