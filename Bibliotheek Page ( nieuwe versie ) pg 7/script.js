document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.navbar__toggle');
    const dropdownToggle = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    menuToggle.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    dropdownToggle.addEventListener('click', function() {
        dropdownContent.classList.toggle('active');
        dropdownToggle.classList.toggle('open');
    });
});

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function navigateTo(url) {
    window.location.href = url;
}