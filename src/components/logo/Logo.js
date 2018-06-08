import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './logo.png';

const Logo = () => {
    return (
        <div className='ma4'>
            <Tilt className="Tilt br2 shadow-2"
                options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img className='im' src={brain} alt='logo' />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;