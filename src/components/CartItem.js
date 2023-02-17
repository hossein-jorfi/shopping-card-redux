import React from 'react';

// Style
import style from './CartItem.module.css'

// Router
import { Link } from 'react-router-dom';

// Icons 
import plus from '../icons/plus.png'
import trash from '../icons/trash.png'
import minus from '../icons/minus.png'

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../redux/cart/cartAction'

const CartItem = props => {

     const { data } = props;

     const dispath = useDispatch()
     const cart = useSelector(state => state.cartState)
     const selectedItems = cart.selectedItems
     const productInCart = selectedItems.find(item => item.id === data.id)


     const shorter = text => {
          const splitedText = text.split(' ')
          const result = `${splitedText[0]} ${splitedText[1]}`
     }


     return (
          <div className={style.container}>
               <div className={style.imageContainer}>
                    <Link to={`/products/${data.id}`}>
                         <img src={data.image}
                              alt='product'
                              className={style.image}
                         />
                    </Link>
               </div>

               <div className={style.infoContainer}>
                    <h4>{shorter(data.title)}</h4>
                    <span>${data.price}</span>
               </div>

               <div className={style.buttonsContainer}>
                    {
                         productInCart.quantity === 1 ?
                              <img
                                   onClick={() => dispath(removeItem(data))}
                                   className={style.icon} src={trash} alt="icon" />
                              :
                              <img
                                   onClick={() => dispath(decrease(data))}
                                   className={style.icon} src={minus} alt="icon" />
                    }
                    <span>{productInCart.quantity}</span>
                    <img
                         onClick={() => dispath(increase(data))}
                         className={style.icon} src={plus} alt="icon" />
               </div>

          </div>
     );
};

export default CartItem;