window.addEventListener('load', () => {

    const buttons = document.querySelectorAll('button');

    buttons.forEach(buttonEl => {

        buttonEl.addEventListener('click', function () {

            /* Check if clicked element is closed */
            const isCurrentClosed = !this.classList.contains('opened');

            /* Close all accordions */
            buttons.forEach(el => el.classList.remove('opened'));

            /* If the current clicked element is closed, then open if adding 'opened class' */
            if (isCurrentClosed) {
                this.classList.add('opened');
            }
        })

    })

})