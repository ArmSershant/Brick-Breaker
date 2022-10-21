import { Tools } from "./Tools.js"
export class Grid {
  lines = []
  constructor() {
    for (let i = 0; i < 14; i++) {
      let isLive = true
      let x = i % 2 == 0 ? 101 + 51 * (i - 2) : 50 + 51 * (i - 2)
      let y = i % 2 == 0 ? 0 : 300 - 270
      this.lines.push({
        h: 20,
        w: 90,
        x,
        y,
        isLive,
      })
    }

    for (let j = 0; j < 14; j++) {
      let isLive = true
      let x = j % 2 == 0 ? 101 + 51 * (j - 2) : 50 + 51 * (j - 2)
      let y = j % 2 == 0 ? 300 - 240 : 300 - 210
      this.lines.push({
        h: 20,
        w: 90,
        x,
        y,
        isLive,
      })
    }

    for (let k = 0; k < 14; k++) {
      let isLive = true
      let x = k % 2 == 0 ? 101 + 51 * (k - 2) : 50 + 51 * (k - 2)
      let y = k % 2 == 0 ? 300 - 180 : 300 - 150
      this.lines.push({
        h: 20,
        w: 90,
        x,
        y,
        isLive,
      })
    }
  }

  draw() {
    this.lines.forEach((elm) => {
      if (elm.isLive) {
        Tools.ctx.fillStyle = "hotpink"
        Tools.ctx.fillRect(elm.x, elm.y, elm.w, elm.h)
      }
    })
  }
}

