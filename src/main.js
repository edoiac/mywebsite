const toggleMenu = () => {
    let menu = document.getElementById('menu-wrapper');
        menu.classList.toggle('is-visible');
    let burgerLines= document.getElementsByClassName('line') 
        for (let line of burgerLines) {
            line.classList.toggle('open');
        }

}

const activePage = (id) => {

    setTimeout(function() { toggleMenu(); }, 500);

    let menuLinks = document.getElementsByClassName('menu-link');
    for (let link of menuLinks) {
        link.classList.remove('active');
    }

    let activeLink = document.getElementById(id);
    activeLink.classList.add('active');
}

const setCurrentPage = (id) => {
    let currentPage = document.getElementById('current');
    currentPage.innerHTML = id;
}


document.addEventListener('scroll', function() { 
    let sections = document.getElementsByTagName('section');
    let scrollMiddleScreen = window.scrollY + screen.height/2;
    let scrolledSections = Array.from(sections).filter(section => scrollMiddleScreen > section.offsetTop)
    setCurrentPage('0' + scrolledSections.length);
}, true);

