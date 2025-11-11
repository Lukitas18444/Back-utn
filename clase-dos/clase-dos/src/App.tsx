import Button from './Button.tsx'

function App() {


  const handlePrueba = () => {
    console.log('Prueba')
  }

  return (
    <>
      <Button label='Hola' PruebaFunction={handlePrueba} />
    </>
  )
}

export default App
