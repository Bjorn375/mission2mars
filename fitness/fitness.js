function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function navigateTo(url) {
    window.location.href = url;
}