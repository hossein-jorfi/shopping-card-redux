import React from 'react';

// Style
import style from './CartItem.module.css'

// Router
import { Link } from 'react-router-dom';

// Icons 
import plus from '../icons/minus.png'
import trash from '../icons/trash.png'

const CartItem = () => {
     return (
          <div className={style.container}>
               <div className={style.imageContainer}>
                    <Link>
                         <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                              alt='product'
                              className={style.image}
                         />
                    </Link>
               </div>

               <div className={style.infoContainer}>
                    <h4>Title title</h4>
                    <span>$100</span>
               </div>

               <div className={style.buttonsContainer}>
                    <img className={style.icon} src={trash} alt="icon" />
                    <span>5</span>
                    <img className={style.icon} src={plus} alt="icon" />
               </div>

          </div>
     );
};

export default CartItem;