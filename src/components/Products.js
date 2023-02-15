import React, { useEffect, useState } from 'react';

// Bootstrap
import { Container, Row } from 'react-bootstrap';

// Components
import Product from './Product';

// Style
import style from './Products.module.css'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import fetchProducts from '../redux/products/productsAction';

const Products = () => {

     const dispath = useDispatch(dispath => dispath)
     const state = useSelector(state => state.productsState.products)

     useEffect(() => {
          dispath(fetchProducts())
     }, [])

     return (
          <Container className={style.container}>
               <Row>
                    {
                         state.length > 0 ?
                              state.map(item => <Product key={item.id} data={item} />)
                              :
                              <h1>Loading...</h1>
                    }
               </Row>
          </Container>
     );
};

export default Products;