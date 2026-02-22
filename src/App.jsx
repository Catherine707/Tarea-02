import { useState } from "react"
import "./App.css"

const frases = [
  "Rock and roll - Cro",
  "Cuantas veces - Cro",
  "Si me sobrara el tiempo - Duki",
  "Aquella noche - Barderos",
  "Algo aparte - Khea",
  "Hitboy - Duki",
  "Alas - Duki & C.R.O"
]

function App() {
  const [frase, setFrase] = useState("Presiona el botón")

  const cambiarFrase = () => {
    const random = Math.floor(Math.random() * frases.length)
    setFrase(frases[random])
  }

  return (
    <div className="container">
      <h1 className="titulo">MODO DIABLO</h1>

      <p className="frase">{frase}</p>

      <button className="boton" onClick={cambiarFrase}>
        CAMBIAR FRASE
      </button>
    </div>
  )
}

export default App
