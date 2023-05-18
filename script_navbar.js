// Interactive navigation bar
function toggleNavbar() {
    const navbarItems = document.getElementById('navbarItems');
    navbarItems.classList.toggle('show');
}


// Load navbar
// Fetch the navigation bar content and insert it into the navbar element
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarElement = document.getElementById('navbar');
            navbarElement.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Toggle the navigation items visibility
function toggleNavbar() {
    const navbarItems = document.getElementById('navbarItems');
    navbarItems.classList.toggle('show');
}

// Load the navbar when the page is fully loaded
window.addEventListener('load', loadNavbar);
