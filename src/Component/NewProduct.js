import React from 'react';
import Product from './Product';
import Grid from '@mui/material/Grid';
function NewProduct(props) {
    // console.log(props.dummyProductsList)
    return (
        <Grid container spacing={{ md: 2, sm: 2, xs: 1 }} > {
            props.dummyProductsList?.map(item =>
                <Grid item md={4} sm={6} xs={12}>
                    <Product
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        imgsrc={item.image}
                        category={item.category}
                        description={item.description}
                    />
                </Grid>
            )
        } </Grid>
    )
}

export default NewProduct;
