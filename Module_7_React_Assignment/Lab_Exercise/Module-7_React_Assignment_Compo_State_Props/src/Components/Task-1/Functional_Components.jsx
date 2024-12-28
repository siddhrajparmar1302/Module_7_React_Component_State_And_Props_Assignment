import React from 'react'

const Functional_Components = ( props ) => {

    const Greeting = (props) => {
        return <h1>Hello, {props.name}!</h1>
    }

    return (
        <div>
            <h1>Hello, {props.name}</h1>
        </div>
    )
}

export default Functional_Components
