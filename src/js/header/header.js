export default new class Header {
    constructor() {
        this.header = 'header';
        this.burger = 'header__burger';
        this.menu = 'header__menu';
        this.menuOpen = 'header__menu-open';
        this.handler();
    }

    handler() {
        const header = document.querySelector(`.${this.header}`)
        if(!header) return;

        const burger = header.querySelector(`.${this.burger}`)
        
        burger.addEventListener('click', () => {
            header.classList.toggle(this.menuOpen)
            document.body.classList.toggle('overflow-hidden')
        })
    }
}

