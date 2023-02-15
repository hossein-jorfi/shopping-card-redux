import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Detail.module.css'

// Router
import { useParams, Link, useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

// Icons
import star from '../icons/star.png'

const Detail = () => {

     const navigate = useNavigate()

     const id = useParams().id

     const products = useSelector(state => state.productsState.products)

     const product = products.find(item => item.id === +id)

     const { image, title, description, rating, category, price } = product

     return (
          <Container className={style.mainContainer}>
               <div className={style.container}>
                    <div className={style.imageContainer}>
                         <img src={image} width='300' alt="product" />
                    </div>

                    <div className={style.itemsContainer}>
                         <h4 className={style.title}>{title}</h4>
                         <p className={style.pra}>{description}</p>
                         <p className={style.category}>{category}</p>
                         <div className={style.priceContainer}>
                              <span className={style.price}>${price}</span>
                              <div className={style.rateContainer}>
                                   <img className={style.star} src={star} alt="star" />
                                   <span className={style.rate}>{rating.rate}</span>
                              </div>
                         </div>
                         <div className={style.buttonsContainer}>
                              <button className={style.back} onClick={() => { navigate(-1) }}>Back</button>
                              <button className={style.button}>Add To Cart</button>
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default Detail;