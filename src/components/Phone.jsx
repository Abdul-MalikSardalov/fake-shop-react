import PropTypes from 'prop-types';
import './Phone.css';

const Phone = ({ phoneData }) => {
    return (
        <div className="phone-container">
            <div className="image-container">
                <img src={phoneData.images[0]} alt={phoneData.brand} />
            </div>
            <h3>{phoneData.title}</h3>
            <p>Price: ${phoneData.price}</p>
        </div>
    );
};

Phone.propTypes = {};

export default Phone;
