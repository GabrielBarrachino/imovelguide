//Menu Mobile
const abrirMenu = document.getElementById('openMenu');
const fecharMenu = document.getElementById('overlay');


function openMenu(){
    document.documentElement.classList.add('menuOpened')
}

function closeMenu() {
    document.documentElement.classList.remove('menuOpened')
}

abrirMenu.addEventListener('click', openMenu);
fecharMenu.addEventListener('click', closeMenu);