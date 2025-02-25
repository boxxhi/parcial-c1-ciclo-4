class ImageHover extends HTMLImageElement {
    connectedCallback() {
        this.addEventListener('mouseover', function() {
            this.style = `
                transform: scale(1.05);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            `
        })
        
        this.addEventListener('mouseout', function() {
            this.style = `
                transform: 0;
                box-shadow: 0;
            `
        })
    }
}



customElements.define('img-h', ImageHover, {
    extends: 'img'
})