import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="bottom">
                <div >
                    {/* <div className="footer-social-icon pt-5">
                        <a href="linkedIn.com"><i className="fab fa-linkedin"></i></a>
                        <a href="twitter.com"><i className="fab fa-twitter-square"></i></a>
                        <a href="instagram.com"><i className="fab fa-instagram-square"></i></a>
                        <a href="facebook.com"><i className="fab fa-facebook"></i></a>
                    </div> */}
                    <div className="footer-menu">
                        <a href="contact">Contact Us</a>
                        <a href="Terms">Terms of Devices</a>
                        <a href="Privacy">Privacy Policy</a>
                        <a href="Sittings">Privacy Settings</a>
                    </div>
                </div>
                <div >
                    <p className='myself'>
                        @Ujjwal Tarafder, All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;