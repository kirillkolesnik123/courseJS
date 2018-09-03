class options {
    constructor(height, width, bg, fontSize, textAlign){
        this.height= height;
        this.width = width;
        this.bg= bg;
        this.fontSize=fontSize;
        this.textAlign=textAlign;
    }
    getDiv(text){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = text;
        div.style.cssText = `height:${this.height}px; \
                            width: ${this.width}px; \
                            background-color: ${this.bg}; \
                            font-size: ${this.fontSize}px; \
                            text-align: ${this.textAlign};`;
    }
}
const div1= new options(100, 150, 'red', 20, 'center');
console.log(div1.getDiv());
