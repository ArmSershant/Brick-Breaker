import { Game } from "./Game.js"
const mygame = new Game()
document.getElementById("playBtn").onclick = () => mygame.play()