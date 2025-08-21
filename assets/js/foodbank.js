
const navMenu = document.querySelector('.navbar-nav');
const toggleBtn = document.querySelector('.menu-toggle-btn');


// nav toggle function
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  toggleBtn.classList.toggle('active'); // animate button
});







