import React from 'react';

// Bootstarp
import { Container } from 'react-bootstrap';

// Style
import style from './NavBar.module.css'

// Router
import { Link } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const NavBar = () => {

     const cart = useSelector(state => state.cartState)

     return (
          <div>
               <Container className={style.container}>
                    <Link to='/products' className={style.Link}>
                         <h4 className={style.header}>Products</h4>
                    </Link>

                    <Link to='/cart'>
                         <div className={style.iconContainer}>
                              <img src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png'
                                   className={style.image}
                                   alt="cart icon" />
                              <span className={style.number}>{cart.itemsCounter}</span>
                         </div>
                    </Link>
               </Container>
          </div>
     );
};

export default NavBar;