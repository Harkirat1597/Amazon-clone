import React, { useEffect } from 'react';

const NavbarHidden = () => {
    useEffect(() => {
        let scroll1 = window.pageYOffset;
        window.onscroll = () => {
            let scroll2 = window.pageYOffset;
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
                    <li className="nav-hidden-list-item to-hide">Amazon mini TV</li>
                    <li className="nav-hidden-list-item to-hide">Sell</li>
                    <li className="nav-hidden-list-item ">Best Sellers</li>
                    <li className="nav-hidden-list-item to-hide">Mobiles</li>
                    <li className="nav-hidden-list-item ">Today's Deals</li>
                </ul>
                <div className="nav-hidden-adv-cont to-hide">
                    <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/CricketNov2022/1ODILIVE/400x39-SWM_1ODI_NP._CB604840209_.jpg" alt="" />
                </div>
            </nav>

        </>
    );
}

export default NavbarHidden;
