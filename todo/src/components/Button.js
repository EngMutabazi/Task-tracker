import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {button} from 'react-bootstrap'


function Button({onAdd}) {
    
    return (
        <button onClick={onAdd}  className='btn'>AddTask</button>
    )
}

export default Button
