import PropTypes from 'prop-types';
import './Laptop.css';
const Laptop = ({ laptopData }) => {
    console.log(laptopData);
    return (
        <div className="laptop-container">
            <img src={laptopData.images[0]} alt={laptopData.brand} />
            <h3>{laptopData.title}</h3>
            <p>Price: ${laptopData.price}</p>
        </div>
    );
};

Laptop.propTypes = {};

export default Laptop;
