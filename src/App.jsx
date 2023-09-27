import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Laptops from './components/Laptops';
import Smartphones from './components/Smartphones';

const App = () => {
    return (
        <>
            <div className="top-page">
                <Header />
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="laptops" element={<Laptops />} />
                <Route path="smartphones" element={<Smartphones />} />
            </Routes>
        </>
    );
};

export default App;
