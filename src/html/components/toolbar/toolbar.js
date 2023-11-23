import getTemplate from "../index.js";       
const url = import.meta.url;

class Toolbar extends HTMLElement {
	constructor() {
		super();
	}

	async connectedCallback() {
		const template = await getTemplate(url);
   	
        this.active = window.location.pathname.split("/").pop().split(".")[0];  /* domain.com/src/html/home.html#anchor => home */
		this.appendChild(template.content.cloneNode(true));
        this.addEvents();
        this.setActiveState();
	}

	addEvents() {
		const hamburger = this.querySelector(".hamburger");
		const menu = this.querySelector(".menu-items");
		const menuItems = this.querySelectorAll(".menu");

		hamburger.addEventListener("click", () => menu.classList.toggle("hamburger-active"));
		menuItems.forEach((item) => item.addEventListener("click", () => menu.classList.remove("hamburger-active")));
	}

    // set red background on active menu item
    setActiveState() {
        this.querySelectorAll("li").forEach((item) => {
            if(item.textContent.toLowerCase() === this.active) {
                item.classList.add("active");
            }
        });
    }
}

customElements.define("my-toolbar", Toolbar);
