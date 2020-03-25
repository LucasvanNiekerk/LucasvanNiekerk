import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className='nav-item nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/About' className='nav-item nav-link'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Help' className='nav-item nav-link'>Help</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;