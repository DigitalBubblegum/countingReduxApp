import { useContext } from 'react'
import CounterContext from '../CounterContext'
const Button = ({ type,label }) => {
    const [counter, dispatch] = useContext(CounterContext)
    console.log(type)
    console.log(label)
    const thing = type
    return(
        <button onClick={() => dispatch({ type })}>{label}</button>
    )
}
export default Button

//dispatch({ type: {type} })