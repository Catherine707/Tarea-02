const canciones = [
    "Rock and roll - C.R.O  ",
    "Si me sobrara el tiempo - DUKI",
    "Aquella noche - Barderos",
    "Algo aparte - KHEA",
    "Alas - DUKI & C.R.O",
    "Hitboy - DUKI"
];

document.getElementById("btn").onclick = function() {
    let r = Math.floor(Math.random() * canciones.length);
    document.getElementById("frase").innerText = canciones[r];
};
