document.getElementById('menu-btn').addEventListener('click', () => {
    const asideMenu = document.getElementById('side-menu').style.display = "block"
})
document.getElementById('close-btn').addEventListener('click', () => {
    const asideMenu = document.getElementById('side-menu')
    asideMenu.style.display = "none"
})

