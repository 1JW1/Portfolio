const themeStyles = {
	blue: 'src/styles/default.css',
	light: 'src/styles/light.css',
	green: 'src/styles/green.css',
	purple: 'src/styles/purple.css'
}

const currentTheme = localStorage.getItem('theme') || 'blue'
setTheme(currentTheme)

Array.from(document.getElementsByClassName('theme-dot')).forEach(dot => {
	dot.addEventListener('click', () => {
		const mode = dot.dataset.mode
		setTheme(mode)
	})
})

function setTheme(mode) {
	document.getElementById('theme-style').href = themeStyles[mode]
	localStorage.setItem('theme', mode)
}
