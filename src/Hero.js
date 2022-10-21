import { Tools } from "./Tools.js"
export class Hero {
  x = 280
  y = 620
  w = 150
  h = 15
  direction = null

  draw() {
    Tools.ctx.fillStyle = "blue"
    Tools.ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  move() {
    if (this.direction == "left") {
      this.x -= 8
      if (this.x <= 0) {
        this.direction = null
      }
    } else if (this.direction == "right") {
      this.x += 8
      if (this.x >= 550) {
        this.direction = null
      }
    }
    this.draw()
  }
}

