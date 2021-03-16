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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS13cmFwcGVyJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xuICAgIGxldCBidXJnZXJMaW5lcz0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGluZScpIFxuICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGJ1cmdlckxpbmVzKSB7XG4gICAgICAgICAgICBsaW5lLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgfVxuXG59XG5cbmNvbnN0IGFjdGl2ZVBhZ2UgPSAoaWQpID0+IHtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvZ2dsZU1lbnUoKTsgfSwgNTAwKTtcblxuICAgIGxldCBtZW51TGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LWxpbmsnKTtcbiAgICBmb3IgKGxldCBsaW5rIG9mIG1lbnVMaW5rcykge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGFjdGl2ZUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmNvbnN0IHNldEN1cnJlbnRQYWdlID0gKGlkKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQnKTtcbiAgICBjdXJyZW50UGFnZS5pbm5lckhUTUwgPSBpZDtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgXG4gICAgbGV0IHNlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlY3Rpb24nKTtcbiAgICBsZXQgc2Nyb2xsTWlkZGxlU2NyZWVuID0gd2luZG93LnNjcm9sbFkgKyBzY3JlZW4uaGVpZ2h0LzI7XG4gICAgbGV0IHNjcm9sbGVkU2VjdGlvbnMgPSBBcnJheS5mcm9tKHNlY3Rpb25zKS5maWx0ZXIoc2VjdGlvbiA9PiBzY3JvbGxNaWRkbGVTY3JlZW4gPiBzZWN0aW9uLm9mZnNldFRvcClcbiAgICBzZXRDdXJyZW50UGFnZSgnMCcgKyBzY3JvbGxlZFNlY3Rpb25zLmxlbmd0aCk7XG59LCB0cnVlKTtcblxuIl0sImZpbGUiOiJtYWluLmpzIn0=
