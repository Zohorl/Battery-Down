import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    const [count, setCount] = useState(100)
    const decrease = () => setCount(count > 0 ? count - 10 : 0);
    return (
        <div>
            <h2>Battery : {count}</h2>
            <button className='button' onClick={decrease}>battery down</button>
        </div>
    );
};

export default Mobile;