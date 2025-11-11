interface Props{
    label: string,
    PruebaFunction: () => void
}

const Button = ({label, PruebaFunction}:Props) => {

  return (
    <button onClick={PruebaFunction}> {label} </button>
  )
}

export default Button