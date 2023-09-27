import PropTypes from 'prop-types';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/">
                        <span className="Home-text">Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/laptops">Laptops</NavLink>
                </li>
                <li>
                    <NavLink to="/smartphones">Smartphones</NavLink>
                </li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
