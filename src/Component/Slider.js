import React from 'react';
import './Slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Slider() {
    return (
        <Carousel showThumbs={false} autoPlay={true} showIndicators={false} infiniteLoop={true} showArrows={false}>
            <div>
                <img src="https://m.media-amazon.com/images/I/81WWZ9i23wL._SX3000_.jpg" />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61ucnX0scJL._SX3000_.jpg" />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/71SsH83lJDL._SX3000_.jpg" />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/71CBrnDxDiL._SX3000_.jpg" />
            </div>
        </Carousel>
    )
}

export default Slider;
