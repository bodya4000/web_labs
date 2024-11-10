let menuOpended = false;
let authOpended = false;

const onMenuClick = () => {
	let menu = document.getElementsByClassName('menu').item(0);
	let burger = document.getElementsByClassName('burger').item(0);
	let cross = document.getElementsByClassName('cross').item(0);

	if (menuOpended) {
		burger.style.display = 'none';
		cross.style.display = 'block';
		menu.style.right = '0';
	} else {
		burger.style.display = 'block';
		cross.style.display = 'none';
		menu.style.right = '-100%';
	}
	menuOpended = !menuOpended;
};

const showAuthButtons = () => {
	let auth = document.getElementsByClassName('header__auth').item(0);

	if (authOpended) {
		auth.style.display = 'block';
		auth.style.opacity = '1';
	} else {
		auth.style.display = 'none';
		auth.style.opacity = '0';
	}
	authOpended = !authOpended;
};
