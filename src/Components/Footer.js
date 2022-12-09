import React, { useContext } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import NavIcon from './NavIcon';
import MainContext from '../Context/Main/MainContext.js';

const Footer = () => {
    const context = useContext(MainContext);
    const { isLogin } = context;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };

    return (
        <div className="footer-container">

            <div className='footer-signin-section'>
                <p>See personalized recommendations</p>
                
                {!isLogin ?
                    <Link to="/login">
                        <button className='footer-signin-btn'>Sign in</button>
                    </Link>
                    :    
                    <Link to="/user">
                        <button className='footer-signin-btn'>My Account</button>
                    </Link>
                }
                
                {!isLogin && 
                    <p>New customer? <span> <Link to='/signup'>Start here</Link> </span> </p>
                }
            </div>

            <div className='footer-backToTop-section'>
                <button onClick={scrollToTop}>Back to top</button>
            </div>            

            <div className="footer-info-section">
                <div className="footer-info-container">
                    <div>
                        <p>Get to Know Us</p>
                        <a target="_blank" href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About Us</a>
                        <a target="_blank" href="https://amazon.jobs/en/">Careers</a>
                        <a target="_blank" href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Press Releases</a>
                        <a target="_blank" href="https://www.amazon.science/">Amazon Science</a>
                    </div>
                    <div>
                        <p>Connect with Us</p>
                        <a target="_blank" href="https://www.facebook.com/AmazonIN">Facebook</a>
                        <a target="_blank" href="https://twitter.com/AmazonIN">Twitter</a>
                        <a target="_blank" href="https://www.instagram.com/amazondotin/">Instagram</a>
                    </div>
                    <div>
                        <p>Make Money with Us</p>
                        <a target="_blank" href="">Sell on Amazon</a>
                        <a target="_blank" href="">Sell under Amazon Accelerator</a>
                        <a target="_blank" href="">Amazon Global Selling</a>
                        <a target="_blank" href="">Become an Affiliate</a>
                        <a target="_blank" href="">Fulfilment by Amzon</a>
                    </div>
                    <div>
                        <p>Let Us Help You</p>
                        <a target="_blank" href="https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid">COVID-19 and Amazon</a>
                        <a target="_blank" href="">Your Account</a>
                        <a target="_blank" href="">Returns Center</a>
                        <a target="_blank" href="">100% purchase protection</a>
                    </div>
                </div>
            </div>

            <div className='footer-amazon-logo'>
                <NavIcon />
            </div>

            <div style={{backgroundColor: "var(--amazon-black)", color: "white", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100px"}}>
                <p>This website is developed and maintained by Harkirat Singh</p>
            </div>
        </div>
    );
}

export default Footer;