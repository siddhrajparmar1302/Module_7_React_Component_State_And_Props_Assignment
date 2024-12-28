import React, { useState } from 'react'

const Counter_Component = () => {

    const [count , setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <h1>Counter Component</h1>
            <h3>Count is -- {count}</h3>
            <button onClick={addCount}>Add Count</button>
        </div>
    )
}

export default Counter_Component
