function scrollLeft() {
    const container = document.querySelector('.front');
    container.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll left by 200px smoothly
}

function scrollRight() {
    const container = document.querySelector('.front');
    container.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll right by 200px smoothly
}

const seac = (event) => {
   
    const btn = document.querySelector(".btn-primary"); 
    // Add an event listener for the click event
    btn.addEventListener('click', () => {
        // Navigate to the 'store.html' page when the button is clicked
        window.location.href = 'store.html';
    });
}
// Function to handle search logic
const subm = (event) => {
    // Prevent form submission (reload)
    event.preventDefault();

    const btn_sub = document.getElementById('searchInput');
    let search = btn_sub.value.trim().toLowerCase(); // Get the value of the input

    // Check the search term and navigate accordingly
    if (search === 'store') {
        window.location.href = 'store.html';
    } else if (search === 'accessories') {
        window.location.href = 'accesories.html';
    }
    else if (search === 'mobile') {
        window.location.href = 'mobile.html';
    } 
    else if (search === 'login') {
        window.location.href = 'signin.html';
    }
    else if (search === 'tv') {
        window.location.href = 'tv-entertainment.html';
    }
    else if (search === 'support') {
        window.location.href = 'support.html';
    }
    else if (search === 'tablet') {
        window.location.href = 'tablets.html';
    }
    else if (search === 'add to cart') {
        window.location.href = 'cart.html';
    }
    else if (search === 'glowyfy') {
        window.location.href = 'main.html';
    }
    else if (search === 'entertainment') {
        window.location.href = 'tv-entertainment.html';
    }
    else if (search === 'register') {
        window.location.href = 'register.html';
    }
    else if (search === 'laptop') {
        window.location.href = 'laptop.html';
    }
    else if (search === 'appliances') {
        window.location.href = 'appl.html';
    }
    else {
        window.location.href = 'main.html';
    }

    // Return false to prevent default form submission behavior
    return false;
};
