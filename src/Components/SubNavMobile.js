import React, { useEffect } from 'react'

function SubNavMobile() {
    useEffect(() => {
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