import { Tools } from "./Tools.js"
import {Hero} from "./Hero.js"
export class Ball {
  x = Hero.x;
  y = Hero.y;
  dx = 5
  dy = 5
  w = 20
  h = 20
  border = null
  draw() {
    let img = new Image()
    img.src = "img/ball.png"
    img.onload = () => Tools.ctx.drawImage(img, this.x, this.y, this.w, this.h)
  }

  move() {
    switch (this.border) {
      case "upRight":
        this.x += this.dx
        this.y -= this.dy
        if (this.x > 670) {
          this.border = "upLeft"
        }
        if (this.y < 0) {
          this.border = "downRight"
        }
        break
      case "upLeft":
        this.x -= this.dx
        this.y -= this.dy
        if (this.x < 0) {
          this.border = "upRight"
        }
        if (this.y < 0) {
          this.border = "downLeft"
        }
        break
      case "downLeft":
        this.x -= this.dx
        this.y += this.dy
        if (this.x < 0) {
          this.border = "downRight"
        }
        break
      case "downRight":
        this.x += this.dx
        this.y += this.dy
        if (this.x > 670) {
          this.border = "downLeft"
        }
        break
    }
    this.draw()
  }
}
