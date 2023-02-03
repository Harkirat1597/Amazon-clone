import React, {useEffect} from 'react';
import './Home.css';
import Carousel from './Carousel.js';
import Catagories from '../Data/ProductCatagories.json';
import Card from './Card.js';
import Slider from './Slider.js';

const Home = () => {

    useEffect(() => {
        scrollToTop();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0
        });
    };
    
    return (
        <div className="home-container main-container">

            <Carousel />

            <div className='home-product-container'>
                {Catagories.map((el) => {
                    return <Card category={el.category} image={el.image} />
                })}
            </div>


            {
                Catagories.map((category) => {
                    return (
                        <div className='home-product-container' style={{ display: "flex", flexDirection: "column" }}>
                            <h2 className="mr-2" style={{fontWeight: "lighter"}}>{category.category}</h2>
                            <Slider category={category.category} />
                        </div> 
                    );
                })
            }

        </div>
    );
}

export default Home;