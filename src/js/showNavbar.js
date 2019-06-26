const show = elem => {
    window.setTimeout(function () {
        elem.classList.remove('header__list');
        elem.classList.add('header__list--active');
    }, 250);
    elem.style.height = "auto";
};

const hide = elem => {
    window.setTimeout(function () {
        elem.classList.remove('header__list--active');
        elem.classList.add('header__list');
    }, 250);

};
export const showNav = elem => {
    if (elem.classList.contains('header__list--active')) {
        hide(elem);
        return;
    }
    show(elem);
};