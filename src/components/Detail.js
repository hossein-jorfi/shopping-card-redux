import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Detail.module.css'

// Router
import { useParams, useNavigate } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../redux/cart/cartAction'

// Icons
import star from '../icons/star.png'
import plus from '../icons/plus.png'
import trash from '../icons/trash.png'
import minus from '../icons/minus.png'

const Detail = () => {

     const navigate = useNavigate()

     const id = useParams().id

     const products = useSelector(state => state.productsState.products)
     const cart = useSelector(state => state.cartState)
     const dispath = useDispatch()

     const product = products.find(item => item.id === +id)

     const { image, title, description, rating, category, price } = product

     const isInCart = cart.selectedItems.find(item => item.id === +id) ? true : false;

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

                              {
                                   !isInCart ?
                                        <p onClick={() => { dispath(addItem(product)) }} className={style.button} href="#s">Add To Cart</p>
                                        :
                                        <div className={style.buttonsContainer2}>
                                             {
                                                  cart.selectedItems.find(item => item.id === +id).quantity === 1 &&
                                                  <img
                                                       onClick={() => dispath(removeItem(product))}
                                                       className={style.icon} src={trash} alt="trash" />
                                             }
                                             {
                                                  cart.selectedItems.find(item => item.id === +id).quantity !== 1 &&
                                                  <img
                                                       onClick={() => dispath(decrease(product))}
                                                       className={style.icon} src={minus} alt="minus" />
                                             }
                                             <span className={style.quantity}>
                                                  {cart.selectedItems.find(item => item.id === +id).quantity}
                                             </span>
                                             <img onClick={() => {
                                                  dispath(increase(product))
                                                  console.log(cart.selectedItems.find(item => item.id === +id).quantity)
                                             }} className={style.icon} src={plus} alt="plus" />
                                        </div>
                              }
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default Detail;

/*
{
                                                  cart.selectedItems.find(item => item.id === id).quantity === 1 &&
                                                  <img
                                                       onClick={() => dispath(removeItem(product))}
                                                       className={style.icon} src={trash} alt="trash" />
                                             }
                                             {
                                                  cart.selectedItems.find(item => item.id === id).quantity !== 1 &&
                                                  <img
                                                       onClick={() => dispath(decrease(product))}
                                                       className={style.icon} src={minus} alt="minus" />
                                             }
                                             <span className={style.quantity}>
                                                  {cart.selectedItems.find(item => item.id === id).quantity}
                                             </span>
                                             <img onClick={() => {
                                                  dispath(increase(product))
                                                  console.log(cart.selectedItems.find(item => item.id === id).quantity)
                                             }} className={style.icon} src={plus} alt="plus" />
*/
