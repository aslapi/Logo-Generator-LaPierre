class Shapes {
  constructor(shape, shapeColor, logoText, logoTextColor) {
    this.shape = shape;
    this.shapeColor = shapeColor;
    this.logoText = logoText;
    this.logoTextColor = logoTextColor;

    if (logoText.length > 3) {
      throw new Error('Logo text can only be three characters max.')
    }
  }
}

class Circle extends Shapes {
  constructor(shapeColor, logoText, logoTextColor) {
    super("circle", shapeColor, logoText, logoTextColor);
  }

  render() {
    let circleLogo = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
    </svg>
        `;
    return circleLogo;
  }
}

class Triangle extends Shapes {
  constructor(shapeColor, logoText, logoTextColor) {
    super("triangle", shapeColor, logoText, logoTextColor);
  }

  render() {
    let triangleLogo = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    
     <polygon points="100,20 180,180 20,180" fill="${this.shapeColor}" />
     <text x="100" y="140" font-size="30" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
     </svg>
        `;
    return triangleLogo;
  }
}

class Square extends Shapes {
  constructor(shapeColor, logoText, logoTextColor) {
    super("square", shapeColor, logoText, logoTextColor);
  }
  render() {
    let squareLogo = `
     <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
     <rect x="10" y="10" width="160" height="160" fill="${this.shapeColor}"/>
     <text x="90" y="100" font-size="40" text-anchor="middle" fill="${this.logoTextColor}">${this.logoText}</text>
     </svg>
        `;
    return squareLogo;
  }
}

module.exports = { Shapes, Circle, Triangle, Square };
