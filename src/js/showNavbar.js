const show = elem => {
    window.setTimeout(function () {
        elem.classList.remove('header__list');
        elem.classList.add('header__list--active');
    }, 250);
    elem.style.height = "auto";
};

const hide = elem => {
    elem.style.height = elem.scrollHeight + 'px';
    window.setTimeout(function () {
        elem.style.height = '0';
    }, 1);

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