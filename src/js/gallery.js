const backdrop = document.querySelector("main");
const dialog = document.querySelector("dialog");
const image = document.querySelector(".image");
const figcaption = document.querySelector("figcaption");

const showGallery = () => {
	dialog.addEventListener("click", closeGallery);
	backdrop.style.filter = "blur(1px) brightness(0.7)";
	dialog.showModal();
};

const closeGallery = () => {
	dialog.close();
	backdrop.style.filter = "none";
};

const keydown = (e) => {
	if (e.key === "Escape") closeGallery();
};

const addEvents = (img) => {
	img.addEventListener("click", (e) => {
		image.src = e.target.src;
		figcaption.textContent = e.target.alt;
		showGallery();
	});
};

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".gallery-item").forEach((img) => addEvents(img));
	document.addEventListener("keydown", keydown);
});
