import "../html/components/toolbar/toolbar.js";
import "../html/components/footer/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    if(customElements.get("my-toolbar") || customElements.get("my-footer")) {
        document.querySelector("main").style.display = "block";
    }
});