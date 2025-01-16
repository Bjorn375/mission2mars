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

function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}