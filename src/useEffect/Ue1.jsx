import { useEffect, useState } from 'react'

function Ue1() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    useEffect(() => alert("Effect"),[count])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Button A {count}</button>
            <button onClick={() => setCount1(count1 + 1)}>Button B {count1}</button>
        </>
    )
}

export default Ue1
