/*---------------------------------------------------для выпадающего списка-----------------------------------------------------------------*/
const params = {
    activeClassName: "is-active",
    disableClassName: "is-disabled",
    btnClassName: "order__form-select-button",
    iconClassName: "order__form-select-button-icon",
    dropClassName: "js-drop"
};
const paramsDropDown = document.querySelectorAll(".order__drop-href");
const input = document.querySelector(".order__form-select-button");
console.log(paramsDropDown);

function onDisable(e) {
    console.log(e)
    if (e.target.classList.contains(params.disableClassName)) {
        e.target.classList.remove(params.disableClassName, params.activeClassName);
        e.target.removeEventListener('animationend', onDisable);
    }
};
function setMenuListener() {
    document.body.addEventListener('click', (e) => {
        const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName},
      .${params.dropClassName}.${params.activeClassName}`);
        if (activeElements.length && !e.target.closest(`.${params.activeClassName}`)) {
            activeElements.forEach((current) => {
                if (current.classList.contains(params.btnClassName)) {
                    current.classList.remove(params.activeClassName);
                } else {
                    current.classList.add(params.disableClassName);
                }
            });
        }
        if (e.target.closest(`.${params.btnClassName}`)) {
            const btn = e.target.closest(`.${params.btnClassName}`);
            const path = btn.dataset.path;
            const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
            btn.classList.toggle(params.activeClassName);


            if (!drop.classList.contains(params.activeClassName)) {
                paramsDropDown.forEach((item) => {
                    item.addEventListener('click', () => {
                        input.value = item.innerHTML;
                        drop.classList.remove(params.activeClassName)
                    })
                });
                drop.classList.add(params.activeClassName);
                drop.addEventListener('animationend', onDisable);
            } else {

                drop.classList.add(params.disableClassName);
            }
        }
    });
};
setMenuListener();


/*---------------------------------------------------для progressbar ------------------------------------------------------------------------*/
const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.order__form-item-progress-percent');
const setProgress = (progress) => {
    const value = `${progress} %`;
    radialProgress.style.setProperty('--progress', value)
    radialProgress.innerHTML = value
    radialProgress.setAttribute('aria-valuenow', value)
}
setProgress(controller.value)
controller.oninput = () => {
    setProgress(controller.value)
}

/*---------------------------------------------------для ссылок в header ------------------------------------------------------------------------*/
const BURGER_LINKS = document.querySelectorAll('.item-href');
BURGER_LINKS.forEach(function (itemButton) {
    itemButton.addEventListener('click', function (event) {
        BURGER_LINKS.forEach((item) => {
            item.classList.remove('is-active');
        });
        event.target.classList.add('is-active');
    });
});