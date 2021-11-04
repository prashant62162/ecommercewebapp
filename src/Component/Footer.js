import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__getToKnow">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Releases</li>
                        <li>Amazon Cares</li>
                        <li>Gift a Smile</li>
                    </ul>
                </div>
                <div className="footer__connect">
                    <h3>Connect with Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>
                <div className="footer__makeMoney">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li>Sell on Amazon</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Amazon Global Selling</li>
                        <li>Become an Affiliate</li>
                    </ul>
                </div>
                <div className="footer__help">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li>COVID-19 and Amazon</li>
                        <li>Your Account</li>
                        <li>Returns Centre</li>
                        <li>100% Purchase Protection</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__logo">
                    <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
                </div>
                <div className="footer__countries">
                    <ul className="country_list">
                        <li>Australia</li>
                        <li>Brazil</li>
                        <li>Canada</li>
                        <li>France</li>
                        <li>Germany</li>
                        <li>Italy</li>
                        <li>Japan</li>
                        <li>Maxico</li>
                        <li>Poland</li>
                        <li>Spain</li>
                        <li>United-States</li>
                    </ul>
                </div>
                <hr />
                <div className="footer__copyright">
                    © 2021, Designed and Developed By Prashant.
                </div>
            </div>
        </div>
    )
}

export default Footer;
