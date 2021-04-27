const body = document.querySelector('body');
const toggle = document.querySelector('.theme-toggle');
const toggleIndicator = document.querySelector('.theme-toggle-indicator');
const darkModeText = document.querySelector('.theme-switch h5');

toggle.addEventListener('click', changeTheme);
toggle.addEventListener('mouseover', hover);
toggle.addEventListener('mouseout', unHover);

function changeTheme() {
	body.classList.toggle('dark');
	toggleIndicator.classList.toggle('active');
}

function hover() {
	darkModeText.classList.add('hover');
}

function unHover() {
	darkModeText.classList.remove('hover');
}
