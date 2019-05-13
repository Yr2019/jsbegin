/*jshint -W030*/
/*jshint -W014*/
/*jshint -W079*/
/*jshint -W060*/
/*jshint expr:true*/

class Options  {
  constructor(height, width, bg, fontSize, textAlign){
    this.height = height;
    this.width = width;
    this.backgroundColor = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    let d = document.createElement('div');
        document.body.appendChild(d);
        d.textContent = prompt("Введите любой текст", "");
        d.style.cssText = `height: ${this.height}px; 
            width: ${this.width}px; 
            background-color: ${this.backgroundColor}; 
            font-size: ${this.fontSize}px; 
            text-align: ${this.textAlign}`;
  }
}

let styleDiv = new Options(200, 150, 'green', 28, 'center');
styleDiv.createDiv();


