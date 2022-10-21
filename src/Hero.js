import { Tools } from "./Tools.js"
export class Hero {
  x = 280
  y = 620
  w = 150
  h = 15
  direction = null
  draw() {
    Tools.ctx.fillRect(this.x, this.y, this.w, this.h)
    Tools.ctx.fillStyle = "blue"
  }

  move() {
    if (this.direction == "left") {
      this.x -= 20
      this.direction = null
      if (this.x <= 0) {
        this.x = 0
      }
    } else if (this.direction == "right") {
      this.x += 20
      this.direction = null
      if (this.x >= 550) {
        this.x = 550
      }
    }
    this.draw()
  }
}

