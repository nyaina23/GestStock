import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container-nav mb-5'>
            <Link to="/" >
                <button className='btn btn-primary'>Inventaire</button>
            </Link>
            <Link to="/historique" >
                <button className='btn btn-primary'>Historique</button>
            </Link>
        </div>
    )
}

export default Navbar