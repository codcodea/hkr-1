
import getTemplate from "../index.js";       
const url = import.meta.url;

class Toolbar extends HTMLElement {
	constructor() {
		super();
	}

    static get observedAttributes() {
        return ['active'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
       this.active = newValue;
    }

	async connectedCallback() {
		const template = await getTemplate(url);
   	
		this.appendChild(template.content.cloneNode(true));
        this.addEvents();
        this.setActiveState();
	}

	addEvents() {
		const hamburger = this.querySelector(".hamburger");
		const menu = this.querySelector(".menu-wrapper");
		const menuItems = this.querySelectorAll(".menu");

		hamburger.addEventListener("click", () => menu.classList.toggle("hamburger-active"));
		menuItems.forEach((item) => item.addEventListener("click", () => menu.classList.remove("hamburger-active")));
	}

    setActiveState() {
        this.querySelectorAll("li").forEach((item) => {
            if(item.textContent.toLowerCase() === this.active) {
                item.classList.add("active");
            }
        });
    }
}

customElements.define("my-toolbar", Toolbar);
