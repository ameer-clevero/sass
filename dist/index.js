window.addEventListener('scroll', function() {
    if (screen.width > 800) {
        if (this.window.scrollY > 5) {
            this.document.getElementById('scrollElem').classList.remove('scollClass');
            this.document.getElementById('scrollElem').classList.add('afterScroll');
            this.document.getElementById('name-banner').style.visibility = "visible";
            this.document.getElementById('price-banner').style.visibility = "visible";
        } else {
            this.document.getElementById('scrollElem').classList.add('scollClass');
            this.document.getElementById('scrollElem').classList.remove('afterScroll');
            this.document.getElementById('name-banner').style.visibility = "hidden";
            this.document.getElementById('price-banner').style.visibility = "hidden";
        }
    }
});