const menu = document.getElementById("menu")

Array.from(document.getElementByClassName("menu-item")).forEach((item,index) => {
	item.onmouseover = () => {
		menu.dataset.activeIndex = index;
	}
});