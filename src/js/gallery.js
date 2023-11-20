

const showGallery = () => {
    const dialog = document.querySelector('dialog')
    const main = document.querySelector('main')
    dialog.addEventListener('click', () => {
        dialog.close()
        main.style.filter = 'none'
    
    })
    main.style.filter = 'blur(1px) brightness(0.7)'
    dialog.showModal()
}

const addEvent = (img) => {
    img.addEventListener('click', (e) => {
        const popup = document.querySelector('.image')
        const figcaption = document.querySelector('figcaption')
        popup.src = e.target.src
        figcaption.textContent = e.target.alt
        showGallery()
    })
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item').forEach(img => addEvent(img)) 
})