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