import React, { useContext, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Product from './Product.js';
import LoadingCard from './LoadingCard.js';

const Slider = ({ category }) => {
    const initialState = [];
    const [products, setProducts] = useState(initialState);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(category);        
    }, []);

    const getProducts = async (category) => {
        setLoading(true);

        const link = `https://fakestoreapi.com/products/category/${ category.toLowerCase() }`;

        await fetch(link)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .then(() => setLoading(false))
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Swiper
                style={{maxWidth: "1500px"}}
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={5}
                initialSlide={1}
                loop={true}
                loopFillGroupWithBlank={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {loading ? 
                    Array(10).fill().map((el) => {
                        return (
                            <SwiperSlide>
                                <LoadingCard />
                            </SwiperSlide>
                        )
                    })
                    : 
                    products.map((product, i) => {
                        return (
                            <SwiperSlide> 
                                <Product 
                                    product={product}  
                                /> 
                            </SwiperSlide>
                        );
                    })
                }
                
            </Swiper>
        </>
    );
}

export default Slider