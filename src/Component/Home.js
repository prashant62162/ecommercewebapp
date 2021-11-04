import React from 'react';
import './Home.css';
import Product from './Product';
import Grid from '@mui/material/Grid';
import Slider from './Slider';


function Home() {
    return (
        <div className="home">
            <div className="slider__contaner">
                <Grid container  >
                    <Grid className="slider__grid" item xs={12} >
                        <Slider />
                    </Grid>
                </Grid>
            </div>
            <div className="home__container">
                <Grid container spacing={{ md: 2, sm: 2, xs: 1 }} >
                    {/* <Grid item xs={12} style={{ marginBottom: '-16%', zIndex: '-1' }}>
                        <Slider />
                    </Grid> */}
                    <Grid item md={6} sm={6} xs={12}>
                        <Product
                            id='12347'
                            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UP7500PTZ (Rocky Black) (2021 Model)"
                            price={37499}
                            rating={3}
                            imgsrc="https://m.media-amazon.com/images/I/81e0B7ek-8L._SL1500_.jpg"
                        />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <Product
                            id='12346'
                            title="SAMSUNG 23 L Baker Series Microwave Oven  (MG23T5012CK/TL, Black, With Crusty Plate)"
                            price={13489}
                            rating={4}
                            imgsrc="https://m.media-amazon.com/images/I/71F2j7RTQAL._SL1500_.jpg"
                        />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Product
                            id='12345'
                            title="Apple iPhone 13 (128GB) - Midnight"
                            price={79900}
                            rating={4}
                            imgsrc="https://m.media-amazon.com/images/I/61VuVU94RnL._SL1500_.jpg"
                        />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Product
                            id='12348'
                            title="boAt Rockerz 255 in-Ear Earphones with 8 Hours Battery, IPX5, Bluetooth V5.0 and Voice Assistant(Active Black)"
                            price={1799}
                            rating={4.60}
                            imgsrc="https://m.media-amazon.com/images/I/51R4FJdgbMS._AC_UL320_.jpg"
                        />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Product
                            id='12349'
                            title="Genuine Decor 18 Inch Floating Shelves for Wall Set of 3, Rustic Wall Mounted Ledge Shelf for Bathroom, Bedroom, Living"
                            price={1449}
                            rating={4}
                            imgsrc="https://m.media-amazon.com/images/I/619Q+e226VL._SL1080_.jpg"
                        />
                    </Grid>
                    <Grid item md={12} sm={6} xs={12}>
                        <Product
                            id='12350'
                            title="Adorn India Arden 3 Seater Sofa Cum Bed Fabric (Dark Grey)."
                            price={18999}
                            rating={3.4}
                            imgsrc="https://m.media-amazon.com/images/I/81vOOaOf+qL._SL1500_.jpg"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Product
                            id='12351'
                            title="The Power of Your Subconscious Mind Paperback – 1"
                            price={99}
                            rating={4.8}
                            imgsrc="https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX258_BO1,204,203,200_.jpg"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Product
                            id='12351'
                            title="The Great Train Journey- By Ruskin Bond"
                            price={121}
                            rating={4.4}
                            imgsrc="https://m.media-amazon.com/images/I/516+yG-w9VL.jpg"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Product
                            id='12351'
                            title="Attitude Is Everything: Change Your Attitude ... Change Your Life! "
                            price={121}
                            rating={4.2}
                            imgsrc="https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg"
                        />
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                        <Product
                            id='12351'
                            title="Ikigai: The Japanese secret to a long and happy life"
                            price={305}
                            rating={4.4}
                            imgsrc="https://images-eu.ssl-images-amazon.com/images/I/51T8OXMiB5L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        />
                    </Grid>

                </Grid>

            </div>
        </div >
    )
}

export default Home;
