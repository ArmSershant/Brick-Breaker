import { Game } from "./Game.js"
const mygame = new Game()
let s = document.getElementById("toturial")
document.getElementById("playBtn").onclick = function () {
   mygame.play()
   s.remove()
}
