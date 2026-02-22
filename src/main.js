import './style.css'

const frases = [
  "Rock and roll - Cro",
  "Cuantas veces - Cro",
  "Si me sobrara el tiempo - Duki",
  "Aquella noche - Barderos",
  "Algo aparte - Khea",
  "Hitboy - Duki",
  "Alas - Duki y C.R.O"
]

const btn = document.getElementById("btn")
const frase = document.getElementById("frase")

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * frases.length)
  frase.textContent = frases[random]
})
