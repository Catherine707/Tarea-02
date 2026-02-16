const frases = [
  "Modo diablo activado",
  "La noche es nuestra",
  "Luces neon y cero drama",
  "Trap y pensamientos profundos",
  "Solo vibra y deja el miedo"
];

const btn = document.getElementById("btn");
const frase = document.getElementById("frase");

btn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * frases.length);
  frase.textContent = frases[random];
});
