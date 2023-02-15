import React from 'react';

// Bootstarp
import { Container } from 'react-bootstrap';

// Style
import style from './NavBar.module.css'

const NavBar = () => {
     return (
          <div>
               <Container className={style.container}>
                    <a className={style.Link} href="#s">
                         <h4 className={style.header}>Products</h4>
                    </a>

                    <a href="#s">
                         <div className={style.iconContainer}>
                              <img src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png'
                                   className={style.image}
                                   alt="cart icon" />
                              <span className={style.number}>10</span>
                         </div>
                    </a>
               </Container>
          </div>
     );
};

export default NavBar;