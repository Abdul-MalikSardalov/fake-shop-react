import axios from 'axios';
import { useEffect, useState } from 'react';
import Laptop from './Laptop';

const Laptops = () => {
    const [laptopsData, setLaptopsData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(
                    'https://dummyjson.com/products/category/laptops'
                );
                if (res.status === 200) {
                    setLaptopsData(res.data.products);
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
            {laptopsData.map((laptop) => (
                <Laptop key={laptop.id} laptopData={laptop} />
            ))}
        </div>
    );
};

export default Laptops;
