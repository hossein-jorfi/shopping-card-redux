import React from 'react';

// Style
import style from './Product.module.css'

// Icons
import star from '../icons/star.png'
import share from '../icons/share.svg'
import heart from '../icons/heart.svg'
import plus from '../icons/plus.png'
import trash from '../icons/trash.png'
import minus from '../icons/minus.png'

// Bootstrap
import { Col } from 'react-bootstrap';

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../redux/cart/cartAction'

const Product = props => {

     const cart = useSelector(state => state.cartState)
     const dispath = useDispatch()


     const product = props.data
     const { title, price, image, rating, id } = product

     const shorter = text => {
          const splitedText = text.split(' ')
          const result = `${splitedText[0]} ${splitedText[1]}`
          return result
     }

     return (
          <Col sm={12} md={6} lg={4} xl={3} className={style.container}>
               <div className={style.mainContainer}>
                    <div className={style.topContainer}>
                         <div className={style.rateContainer}>
                              <img className={style.star} src={star} alt="" />
                              <span className={style.rate} >{rating.rate}</span>
                         </div>

                         <div>
                              <img src={heart} alt="" />
                              <img src={share} alt="" />
                         </div>
                    </div>
                    <div className={style.imageContainer}>
                         <Link to={`/products/${id}`}>
                              <img
                                   className={style.image}
                                   src={image}
                                   alt="" />
                         </Link>
                    </div>
                    <Link to={`/products/${id}`} style={{ 'textDecoration': 'none' }}>
                         <h5 className={style.title}>{shorter(title)}</h5>
                    </Link>
                    <p className={style.price}>${price}</p>
                    <div className={style.mainButtonsContainer}>
                         {
                              !cart.selectedItems.find(item => item.id === id) ?
                                   <p onClick={() => { dispath(addItem(product)) }} className={style.button} href="#s">Add To Cart</p>
                                   :
                                   <div className={style.buttonsContainer}>
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
                                   </div>
                         }
                    </div>
               </div>
          </Col>
     );
};

export default Product;

/*
<p onClick={() => { dispath(addItem()) }} className={style.button} href="#s">Add To Cart</p>

<div className={style.buttonsContainer}>
     <img className={style.icon} src={trash} alt="" />
     <span className={style.quantity}>0</span>
     <img className={style.icon} src={plus} alt="" />
</div>
*/