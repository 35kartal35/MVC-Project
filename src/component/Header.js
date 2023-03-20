import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({ addLink }) => {
    return (
        <div>
            <h1>FORUM</h1>
            <Link to={"/"}>Anasayfaya Dön</Link>
            <Link to={"/add-Post "}>Ekleme yap</Link>

        </div>
    )
}

export default Header
