import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My blog</h1>
            <div className="links">
                <Link to="/">Blog</Link>
                <Link to="/Buttons">Buttons</Link>
                <Link to="/creat">Creat</Link>
                <Link to="/List">List</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;