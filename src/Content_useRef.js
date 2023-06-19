import { useRef, useState } from "react";

function Content () {
    const [count, setCount] = useState(60)

    let timerId = useRef()  // useRef tra ve object

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('stop -> ', timerId.current);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick = {handleStart}>Start</button>
            <button onClick = {handleStop}>Stop</button>
        </div>
    )
}

export default Content