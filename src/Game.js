import { Tools } from "./Tools.js"
import { Hero } from "./Hero.js"
import { Grid } from "./Grid.js"
import { Ball } from "./Ball.js"

export class Game {
  line = new Hero()
  grid = new Grid()
  ball = new Ball()
  score = 0
  interval = null
  constructor() {
    this.ball.x = this.line.x + 50
    this.ball.y = this.line.y - 20
    let started = false
    document.body.onkeydown = (e) => {
      switch (e.code) {
        case "ArrowLeft":
          this.line.direction = "left"
          if (!started) {
            e.preventDefault()
            this.ball.border = "upLeft"
            started = true
          }
          break
        case "ArrowRight":
          this.line.direction = "right"
          if (!started) {
            e.preventDefault()
            this.ball.border = "upRight"
            started = true
          }
          break
      }
    }
  }

  play() {
    this.interval = setInterval(() => {
      Tools.ctx.clearRect(0, 0, 700, 650)
      this.grid.draw()
      this.line.draw()
      this.line.move()
      this.ball.move()
      this.drawScore()
      this.isTouched()
      this.ballCatcher()
      this.over()
      this.scoring()
      this.win()
    }, 20)
  }

  scoring() {
    let x1 = this.ball.x
    let y1 = this.ball.y
    this.grid.lines.forEach((elm) => {
      let x2 = elm.x
      let y2 = elm.y
      if (x1 > x2 && x1 < x2 + elm.w) {
        if (y1 > y2 && y1 < y2 + elm.h) {
          elm.isLive = false
          this.score++
          if (this.score == 10) {
            this.ball.dx = 6
            this.ball.dy = 6
          }
          if (this.score == 20) {
            this.ball.dx = 7
            this.ball.dy = 7
          }
          if (this.score == 30) {
            this.ball.dx = 8
            this.ball.dy = 8
          }
        }
      }
    })
  }

  isTouched() {
    let x1 = this.ball.x
    let y1 = this.ball.y
    this.grid.lines.forEach((elm) => {
      let x2 = elm.x
      let y2 = elm.y
      if (x1 > x2 && x1 < x2 + elm.w) {
        if (y1 > y2 && y1 < y2 + elm.h) {
          switch (this.ball.border) {
            case "upRight":
              this.ball.border = "downRight"
              if (!elm.isLive) {
                this.ball.border = "upRight"
                this.score--
              }
              break
            case "upLeft":
              this.ball.border = "downLeft"
              if (!elm.isLive) {
                this.ball.border = "upLeft"
                this.score--
              }
              break
            case "downRight":
              this.ball.border = "upRight"
              if (!elm.isLive) {
                this.ball.border = "downRight"
                this.score--
              }
              break
            case "downLeft":
              this.ball.border = "upLeft"
              if (!elm.isLive) {
                this.ball.border = "downLeft"
                this.score--
              }
              break
          }
        }
      }
    })
  }

  ballCatcher() {
    let x1 = this.ball.x
    let y1 = this.ball.y
    let x2 = this.line.x
    let y2 = this.line.y
    if (x1 >= x2 && x1 <= x2 + this.line.w) {
      if (y1 >= y2 && y1 <= y2 + this.line.h) {
        switch (this.line.direction) {
          case "right":
            this.ball.border = "upRight"
            break
          case "left":
            this.ball.border = "upLeft"
            break
          case null:
            if (this.ball.border == "downLeft") {
              this.ball.border = "upLeft"
            } else if (this.ball.border == "downRight") {
              this.ball.border = "upRight"
            }
            break
        }
      }
    }
  }

  drawScore() {
    Tools.ctx.font = "16px Roboto"
    Tools.ctx.fillStyle = "yellow"
    Tools.ctx.fillText(`Score: ${this.score}`, 600, 600)
  }

  win() {
    if (this.grid.lines.every((line) => !line.isLive)) {
      clearInterval(this.interval)
      Tools.ctx.clearRect(0, 0, 700, 650)
      Tools.ctx.globalCompositeOperation = "xor"
      Tools.ctx.font = "75px Roboto"
      Tools.ctx.fillStyle = "green"
      Tools.ctx.fillText("You Win!", 190, 325)
      Tools.ctx.fillText(`Your Score:${this.score}`, 130, 400)
    }
  }

  over() {
    if (this.ball.y > this.line.y + 5) {
      clearInterval(this.interval)
      Tools.ctx.clearRect(0, 0, 700, 650)
      Tools.ctx.globalCompositeOperation = "xor"
      Tools.ctx.font = "75px Roboto"
      Tools.ctx.fillStyle = "red"
      Tools.ctx.fillText("GAME OVER", 150, 325)
      Tools.ctx.fillText(`Your Score:${this.score}`, 130, 400)
    }
  }
}

