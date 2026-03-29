import React from 'react'
import '../App.css'
import '../css/Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>PC Builds</h1></li>
            </ul>

            <ul>
                {/* <li><Link to='/builds'>Customize</Link></li> */}
                <li><Link to='/builds'>View Builds</Link></li>
            </ul>
            
        </nav>
    )
}

export default Navigation