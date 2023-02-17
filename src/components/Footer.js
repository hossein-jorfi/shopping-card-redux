import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Footer.module.css'

const Footer = () => {
     return (
          <div className={style.container}>
               <Container>
                    <p className={style.pra}>
                         <a
                              className={style.name}
                              href="https://github.com/hossein-jorfi/">Hossein Jorfi</a>
                    </p>
               </Container>
          </div>
     );
};

export default Footer;