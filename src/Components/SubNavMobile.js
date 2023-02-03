import React, { useEffect } from 'react'
import './SubNavMobile.css';

function SubNavMobile() {
    useEffect(() => {
        // let scroll1 = window.pageYOffset;
        // window.onscroll = () => {
        //     let scroll2 = window.pageYOffset;
        //     if (scroll1 > scroll2) {
        //         document.querySelector('.sub-nav-mobile').style.top = "60px";
        //     } else {
        //         document.querySelector('.sub-nav-mobile').style.top = "-100px";
        //     }
        //     scroll1 = scroll2;
        // }
        let scrollA = window.pageYOffset;
        window.onscroll = () => {
            let scrollB = window.pageYOffset;
            if (scrollA > scrollB) {
                document.querySelector('.sub-nav-mobile').style.top = "55px";
            } else {
                document.querySelector('.sub-nav-mobile').style.top = "-100px";
            }
            scrollA = scrollB;
        }
    }, []);

    return (
        <div className='sub-nav-mobile'>
            <div class="nav-search-container">
                <input type="text" className="navbar-search" placeholder='Search...'/>
                <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
            </div>
        </div>
    )
}

export default SubNavMobile;