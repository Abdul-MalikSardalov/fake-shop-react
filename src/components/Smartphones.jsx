import axios from 'axios';
import { useEffect, useState } from 'react';
import Phone from './Phone';
import './Smartphones.css';

const Smartphones = () => {
    const [itemsData, setItemsData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/smartphones'
                );
                if (res.status === 200) {
                    setItemsData(res.data.products);
                } else {
                    throw new Error(
                        `Failed fetch data with status ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            }
        };
        getData();
    }, []);

    return (
        <div className="container">
            {itemsData.map((phone) => (
                <Phone key={phone.id} phoneData={phone} />
            ))}
        </div>
    );
};
export default Smartphones;
