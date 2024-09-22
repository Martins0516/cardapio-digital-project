const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e) {
    e.name = e.name === 'menu-outline' ? 'close' : 'menu-outline'
    navLinks.classList.toggle('top-[9%]')
}
// TÁ DANDO ERRO NA HORA DE CLICAR E APARECER O MENU - VERSÃO MOBILE
