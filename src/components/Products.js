import axios from 'axios';
import React, { useEffect, useState } from 'react';

// Bootstrap
import { Container, Row } from 'react-bootstrap';

// Components
import Product from './Product';

// Style
import style from './Products.module.css'

const Products = () => {

     const [products, setProducts] = useState([])

     useEffect(() => {
          axios('https://fakestoreapi.com/products')
               .then(response => setProducts(response.data))
     }, [])

     return (
          <Container className={style.container}>
               <Row>
                    {
                         products.length > 0 ?
                              products.map(item => <Product key={item.id} data={item} />)
                              :
                              <h1>Loading...</h1>
                    }
               </Row>
          </Container>
     );
};

export default Products;