import './NavBar.scss'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function NavBar() {
    // const [ menuOpen, setMenuOpen ] = useState(false);

    // const handleMenuToggle = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <div className='header-container'>
            <nav>
                <a className="nav-link" href="/posts">Posts</a>
                <a className="nav-link" href="/users">Users</a>
                <a className="nav-link" href="/posts/create">New Post</a>
            </nav>
        </div>
        // <nav className="header-container">
        //     <input type="checkbox" checked={menuOpen} onChange={handleMenuToggle} id="menu-toggle" />
        //     <label htmlFor="menu-toggle" className="hamburger-lines">
        //         <span className="line line1"></span>
        //         <span className="line line2"></span>
        //         <span className="line line3"></span>
        //     </label>
        //     <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        //         <a className="nav-link" href="/posts">Posts</a>
        //         <a className="nav-link" href="/users">Users</a>
        //         <a className="nav-link" href="/posts/create">New Post</a>
        //     </div>
        // </nav>
    )
}
