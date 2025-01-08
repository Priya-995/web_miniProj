function scrollLeft() {
    const container = document.querySelector('.front');
    container.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll left by 200px smoothly
}

function scrollRight() {
    const container = document.querySelector('.front');
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll right by 200px smoothly
}
