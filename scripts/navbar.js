function updateToggleIcon() {
    const toggleButton = document.getElementById('darkModeToggle');
    const isDark = document.documentElement.classList.contains('dark-mode');

    if (toggleButton) {
        toggleButton.textContent = isDark ? '🌝' : '🌚';
    }
}

function setupDarkModeToggle() {
    const toggleButton = document.getElementById('darkModeToggle');

    if (!toggleButton) {
        console.warn('Dark mode toggle button not found after navbar load');
        return;
    }

    toggleButton.addEventListener('click', () => {
        const html = document.documentElement;
        html.classList.toggle('dark-mode');
        const isDark = html.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark ? '1' : '0');
        updateToggleIcon();
    });

    updateToggleIcon(); // Icon reflects current state
}

function toggleNavbar() {
    const navbarItems = document.getElementById('navbarItems');
    const toggleIcon = document.getElementById('toggleIcon');

    navbarItems.classList.toggle('show');
    toggleIcon.innerHTML = navbarItems.classList.contains('show') ? '&#10005;' : '&#9776;';
}

function loadNavbar() {
    // Resolve site root (set by templates) or fallback to '/'
    const SITE_ROOT = window.SITE_ROOT || '/';

    // Use SITE_ROOT so navbar is loaded correctly from subpaths and from repo pages
    fetch(SITE_ROOT + 'navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarElement = document.getElementById('navbar');
            navbarElement.innerHTML = data;

            console.log('Navbar loaded');
            setupDarkModeToggle();
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

window.addEventListener('load', loadNavbar);
