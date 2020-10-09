$(document).ready(function () {
    const slide = document.getElementById('ani-conthome');

    slide.addEventListener('mousemove', function (e) {
        // Get dimensions of slide element
        const r = this.getBoundingClientRect()

        // Set x and y values prop values based on center of slide element
        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide.addEventListener('mouseleave', function () {
        // Reset x and y prop values when no longer hovering
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });


    // phil-one
    const slide1 = document.getElementById('ani-contphilone');

    slide1.addEventListener('mousemove', function (e) {
        // Get dimensions of slide element
        const r = this.getBoundingClientRect()

        // Set x and y values prop values based on center of slide element
        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide1.addEventListener('mouseleave', function () {
        // Reset x and y prop values when no longer hovering
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });


    // phil-one
    const slide2 = document.getElementById('ani-contphiltwo');
    slide2.addEventListener('mousemove', function (e) {

        const r = this.getBoundingClientRect()

        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide2.addEventListener('mouseleave', function () {
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });

    const slide3 = document.getElementById('ani-contphiltthr');
    slide3.addEventListener('mousemove', function (e) {

        const r = this.getBoundingClientRect()

        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide3.addEventListener('mouseleave', function () {
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });

    const slide4 = document.getElementById('ani-contphilfour');
    slide4.addEventListener('mousemove', function (e) {

        const r = this.getBoundingClientRect()

        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide4.addEventListener('mouseleave', function () {
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });

    const slide5 = document.getElementById('ani-contphilfive');
    slide5.addEventListener('mousemove', function (e) {

        const r = this.getBoundingClientRect()

        this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
        this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
    });

    slide5.addEventListener('mouseleave', function () {
        this.style.setProperty('--x', 0)
        this.style.setProperty('--y', 0)
    });

});

