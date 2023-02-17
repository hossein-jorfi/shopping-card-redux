import React from 'react';

// Bootstrap
import { Container, Alert } from 'react-bootstrap';

// Style
import style from './Cart.module.css'

// Components
import CartItem from './CartItem';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { checkOut, clear } from '../redux/cart/cartAction';

// Router
import { Link } from 'react-router-dom';

const Cart = () => {

     const dispath = useDispatch()

     const cart = useSelector(state => state.cartState)

     return (
          <Container>
               {
                    cart.selectedItems.length === 0 ?
                         cart.checkOut ?
                              <Alert variant='success'>
                                   <h4>Check outed successfully <Link to='/'>Back to shop</Link></h4>
                              </Alert>
                              :
                              <Alert>
                                   <h4>Nothing Here <Link to='/'>Whant to shop ?</Link></h4>
                              </Alert>
                         :
                         <div className={style.mainContainer}>
                              <div className={style.dataContainer}>
                                   <h5 className={style.text}>Total Price: $30</h5>
                                   <h5 className={style.text}>Total Items: 10</h5>
                              </div>
                              <div className={style.buttonsContainer}>
                                   <button
                                        onClick={() => dispath(checkOut())}
                                        className={style.buttonPay}>Pay</button>
                                   <button
                                        onClick={() => dispath(clear())}
                                        className={style.buttonClear}>Clear</button>
                              </div>
                         </div>
               }


               <br />
               {
                    cart.selectedItems.map(item => <CartItem key={item.id} data={item} />)
               }

          </Container>
     );
};

export default Cart;