import React, { useEffect } from 'react';
import './NavbarHidden.css';

const NavbarHidden = () => {

    useEffect(() => {
        var scroll1 = window.pageYOffset;
        window.onscroll = () => {
            var scroll2 = window.pageYOffset;
            if (scroll1 > scroll2) {
                document.querySelector('.nav-hidden').style.top = "60px";
            } else {
                document.querySelector('.nav-hidden').style.top = "-100px";
            }
            scroll1 = scroll2;
        }
    }, []);

    return (
        <>
            <nav className="nav-hidden" >
                <ul>
                    <li className="nav-hidden-list-item" style={{padding: "5px"}}>
                        <i 
                            className="fa-solid fa-bars mr-2"
                            style={{color: "white", fontSize: "17px"}}    
                        ></i> 
                        <span> All </span>
                    </li>
                    <li className="nav-hidden-list-item">Amazon mini TV</li>
                    <li className="nav-hidden-list-item">Sell</li>
                    <li className="nav-hidden-list-item">Best Sellers</li>
                    <li className="nav-hidden-list-item">Mobiles</li>
                    <li className="nav-hidden-list-item">Today's Deals</li>
                </ul>
                <div className="nav-hidden-adv-cont">
                    <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CricketNov2022/1ODILIVE/400x39-SWM_1ODI_NP._CB604840209_.jpg" alt="" />
                </div>
            </nav>

        </>
    );
}

export default NavbarHidden;