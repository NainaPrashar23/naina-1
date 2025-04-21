import React from 'react'

const User = (props) => {
    console.log(props)
    return (
        <>
           <h1>User Component</h1>
           <p>{props.name}</p>
           <p>{props.age}</p>
        </>
    )
}

export default User