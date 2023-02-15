import React from 'react';

// Style
import style from './TopBanner.module.css'

// Image
import image from '../images/Discount-pana.svg'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const TopBanner = () => {
     return (
          <>
               <Container>
                    <Row className={style.container}>
                         <Col xs={12} md={6} className={style.textContainer}>
                              <h3 className={style.header}>Dont Worry, Best Price!</h3>
                              <p className={style.pragraph}>
                                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam inventore enim numquam sint sapiente quidem provident incidunt quod dolorum nemo dolorem libero quasi est, iusto animi minima cupiditate cum officia?
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore amet molestias eligendi accusamus magnam id, laboriosam similique, expedita culpa aliquam, ut voluptatum dolorum
                              </p>
                         </Col>

                         <Col xs={12} md={6} className={style.imageConatiner}>
                              <img src={image} alt="" />
                         </Col>

                    </Row>
               </Container>

               <div className={style.secendContainer}>
                    <h3 className={style.secendHeader}>You Can Buy Easy And Fast, Lets Go!</h3>
               </div>
          </>
     );
};

export default TopBanner;