import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/81dyhZBpZ5L._SX3000_.jpg" alt="homeimage" />
                <div className="home__row">
                    <Product
                        id='12347'
                        title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UP7500PTZ (Rocky Black) (2021 Model)"
                        price={37499}
                        rating={3}
                        imgsrc="https://m.media-amazon.com/images/I/81e0B7ek-8L._SL1500_.jpg"
                    />
                    <Product
                        id='12346'
                        title="SAMSUNG 23 L Baker Series Microwave Oven  (MG23T5012CK/TL, Black, With Crusty Plate)"
                        price={13489}
                        rating={4}
                        imgsrc="https://m.media-amazon.com/images/I/71F2j7RTQAL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='12345'
                        title="Apple iPhone 13 (128GB) - Midnight"
                        price={79900}
                        rating={4}
                        imgsrc="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
                    />
                    <Product
                        id='12348'
                        title="boAt Rockerz 255 in-Ear Earphones with 8 Hours Battery, IPX5, Bluetooth V5.0 and Voice Assistant(Active Black)"
                        price={1799}
                        rating={5}
                        imgsrc="https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL320_.jpg"
                    />
                    <Product
                        id='12349'
                        title="Genuine Decor 18 Inch Floating Shelves for Wall Set of 3, Rustic Wall Mounted Ledge Shelf for Bathroom, Bedroom, Living"
                        price={1449}
                        rating={4}
                        imgsrc="https://m.media-amazon.com/images/I/619Q+e226VL._SL1080_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id='12350'
                        title="Adorn India Arden 3 Seater Sofa Cum Bed Fabric (Dark Grey).Primary Material: Wood, secondary material :Foam Upholstery Material: Fabric : color : Dark Grey (Back loose cushion with zipper is washable)"
                        price={18999}
                        rating={3}
                        imgsrc="https://m.media-amazon.com/images/I/81vOOaOf+qL._SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
