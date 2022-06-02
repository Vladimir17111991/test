(() => {
    const BTN_BURGER_OPEN = document.querySelector('#burger-btn');
    const nav = document.querySelector('.header__nav');
    const BURGER_LINKS = document.querySelectorAll('.item-href');
    const bodyOverflow = document.querySelector('body');
    let widthWindow = document.body.clientWidth;

    BTN_BURGER_OPEN.addEventListener('click', () => {
        // добавляем остутствие скрола при отрытом бургере
        if (nav.classList.contains('is-active-burger') && BTN_BURGER_OPEN.classList.contains('is-active-burger-button')) {
            console.log(nav.classList)
            
            setTimeout(() => {
                nav.classList.add('hidden');
            }, 300);
            bodyOverflow.style.overflow = '';
        } else {

            setTimeout(() => {
                bodyOverflow.style.overflow = 'hidden';
                nav.classList.remove('hidden');
            }, 300);
        }

        nav.classList.toggle('is-active-burger');
        BTN_BURGER_OPEN.classList.toggle('is-active-burger-button');

        //если нажали на затемненную область закрываем плавно меню
        bodyOverflow.addEventListener('click', (e) => {

            // console.log(header.attributes)
            // console.log(e)
            if (e.target == nav || e.target == BURGER_LINKS) {
                BTN_BURGER_OPEN.classList.remove('is-active-burger-button');
                setTimeout(() => {
                    bodyOverflow.style.overflow = '';
                    nav.classList.add('hidden');
                }, 300);
                nav.classList.remove('is-active-burger');
            }
        });
    });
    
    //делаем сброс кнопки, навбара по изменению ширины экрана
    window.addEventListener("resize", () => {
        widthWindow = document.body.clientWidth;
        bodyOverflow.style.overflow = '';
        nav.classList.remove('is-active-burger');
        BTN_BURGER_OPEN.classList.remove('is-active-burger-button');
        // убираем высоту с задержкой
        if (widthWindow > 767) {
            setTimeout(function () {
                nav.classList.remove('hidden');
            }, 300);
        } else {
            setTimeout(function () {
                nav.classList.add('hidden');
            }, 200);
        }
    });

})();