import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [valor, setValor] = useState(" ")
  const [agregar, setAgregar] = useState([])


    const handleTeclado = (event) =>{
      setValor(event.target.value)
    }
    const handleAgregar = () => {
      setAgregar([...agregar,valor])
      setValor("")
    }


  return (
    <>
      <div className="container">
        <div className='container-input'>
          <input type="text" placeholder='Agrega una lista' value={valor} onChange={handleTeclado}  />
          <button onClick={handleAgregar}>Agregar</button>
          
        </div>
        {
            <ul>
              {
                agregar.map((agrego, index) => (
                  <li key={index} >
                    {agrego}
                  </li>
                ))
              }
            </ul>
          }
      </div>
    </>
  )
}

export default App
