import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({category, image}) => {
    return (
        <div className="card ">
            <h2>{category}</h2>

            <img alt="" src={image} className='mc-2' />

            <Link to='/'>
                <p> Click here to explore </p>
            </Link>
        </div>
    );
}

export default Card;
