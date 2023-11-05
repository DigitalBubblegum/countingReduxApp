import { useContext } from 'react'
import CounterContext from '../CounterContext'
const Display = () => {
    const [counter, dispatch] = useContext(CounterContext)
    console.log('test',counter)
    return(
        <div>{counter}</div>
    )
}
export default Display