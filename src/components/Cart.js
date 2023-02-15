import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Cart.module.css'

// Components
import CartItem from './CartItem';

const Cart = () => {

     const shorter = text => {
          const splitedText = test.split(' ')
          const result = `${splitedText[0]} ${splitedText[1]}`
     }

     return (
          <Container>
               <div className={style.mainContainer}>
                    <div className={style.dataContainer}>
                         <h5 className={style.text}>Total Price: $30</h5>
                         <h5 className={style.text}>Total Items: 10</h5>
                    </div>
                    <div className={style.buttonsContainer}>
                         <button className={style.buttonPay}>Pay</button>
                         <button className={style.buttonClear}>Clear</button>
                    </div>
               </div>

               <br /><br />

               <CartItem />
               <CartItem />
          </Container>
     );
};

export default Cart;