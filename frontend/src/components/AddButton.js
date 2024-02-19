import React from 'react'
import { Link } from 'react-router-dom'


const AddButton = () => {
    return (
        <Link to="/task/new" className="floating-button">
            <button>Add</button>
        </Link>
    )
}

export default AddButton