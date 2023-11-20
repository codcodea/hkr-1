import getTemplate from "../index.js";
const url = import.meta.url;

class Footer extends HTMLElement {
	constructor() {
		super();
	}

	async connectedCallback() {
		const template = await getTemplate(url);
		this.appendChild(template.content.cloneNode(true));
	}
}

customElements.define("my-footer", Footer);