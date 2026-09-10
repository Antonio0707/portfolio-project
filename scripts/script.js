const themeButton = document.getElementById('botao-tema');
const body = document.body;

// Theme persistence
const savedTheme = localStorage.getItem('theme');
setDarkMode(savedTheme === 'dark');

// Switch between light and dark modes
function setDarkMode(isDarkMode) {
  if (isDarkMode) {
    body.classList.add('dark-mode');
    themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('dark-mode');
    themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

themeButton.addEventListener('click', (event) => {
  event.preventDefault();

  const isDarkMode = body.classList.toggle('dark-mode');

  setDarkMode(isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});