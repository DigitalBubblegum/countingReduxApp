import { useCounterValue } from '../CounterContext'
const Display = () => {
    const counter = useCounterValue()
    console.log('test',counter)
    return(
        <div>{counter}</div>
    )
}
export default Display