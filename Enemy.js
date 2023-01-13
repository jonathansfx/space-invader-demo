export default class Enemy {
  constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;

    this.imageNumber = new Image();
    this.imageNumber.src = "img/enemy${imageNumber}.png";
  }
}
