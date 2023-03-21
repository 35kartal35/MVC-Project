
import { Link } from 'react-router-dom'


const Header = ({ addLink }) => {
    return (
        <header>

            <h1>FORUM</h1>
            {addLink ? (
                <Link to={"/"}>Anasayfaya Dön</Link>
            ) : (
                <Link to={"/add-Post "}>Gönderi Oluştur</Link>

            )}
        </header>
    )
}

export default Header;
