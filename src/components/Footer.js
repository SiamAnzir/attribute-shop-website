import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
const Footer = () => {
  return (
    <footer className="footer_primary">
      <Container>
        <Row>
          <Col lg={4} className="individual_column_first">
            <p className="fs-5">Connect With Us</p>
            <div className="social_icon">
              <a href="https://www.facebook.com/attributeshop">
                <img className="img-fluid" src={facebook} alt="facebook" />
              </a>
              <a href="https://wa.me/message/J4Z25Z623FSKP1">
                <img className="img-fluid" src={whatsapp} alt="whatsapp" />
              </a>
              <a href="https://www.instagram.com/attributeshop">
                <img className="img-fluid" src={instagram} alt="instagram" />
              </a>
              <a href="mailto:attributebd@gmail.com">
                <img className="img-fluid" src={email} alt="email" />
              </a>
            </div>
          </Col>
          <Col lg={4} className="individual_column_first">
            <p className="fs-5">Address</p>
            <div>
              <p className="text-start">
                Shop-81 (Ground Floor), Gausul Azam Super Market, Nilkhet, New Market,  Dhaka-1205
              </p>
              <p className="text-start">
                Factory: Ground Floor, 60 Kazi Alauddin Road, Dhaka-1000
              </p>
            </div>
          </Col>
          <Col lg={4} className="ps-5 individual_column_first">
            <p className="fs-5">Call Us </p>
            <div>
              <p className="text-start">
                <img
                  className="contact-us-img"
                  src={phone}
                  alt="..."
                  style={{ marginLeft: "" }}
                />
                <a
                  href="tel:+8801677409232"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    marginLeft: "7px",
                  }}
                >
                  01677409232 {" ,"}
                </a>
                <a
                  href="tel:+8801639575993"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "16px",
                    marginLeft: "7px",
                  }}
                >
                  01639575993
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
/**
 * <div className="row">
 *                     <div className="col-md-4 individual_column_first">
 *                         <div className="">
 *                             <p className="fs-5">Connect With Us</p>
 *                             <div className="social_icon">
 *                                 <a href="https://www.facebook.com/attributeshop">
 *                                     <img className="img-fluid" src={facebook} />
 *                                 </a>
 *                                 <a href="https://wa.me/message/J4Z25Z623FSKP1">
 *                                     <img className="img-fluid" src={whatsapp} />
 *                                 </a>
 *                                 <a href="https://www.instagram.com/attributeshop">
 *                                     <img className="img-fluid" src={instagram} />
 *                                 </a>
 *                                 <a href="mailto:attributebd@gmail.com">
 *                                     <img className="img-fluid" src={email} />
 *                                 </a>
 *                             </div>
 *                         </div>
 *                     </div>
 *                     <div className="col-md-5 row individual_column_first">
 *                         <p className="fs-5">Address</p>
 *                         <div style={{ marginBottom: "90px" }}>
 *                             <p className="text-start">
 *                                 Ground Floor, 60 Kazi Alauddin Road, Dhaka-1000
 *                             </p>
 *                         </div>
 *                     </div>
 *                     <div className="col-md-3 row individual_column_last">
 *                         <p className="fs-5">Call Us 24/7 At</p>
 *                         <div style={{ marginBottom: "90px" }}>
 *                             <p className="text-start">
 *                                 <img
 *                                     className="contact-us-img"
 *                                     src={phone}
 *                                     alt="..."
 *                                     style={{ marginLeft: "-5px" }}
 *                                 />
 *                                 <a
 *                                     href="tel:+88001677409232"
 *                                     style={{
 *                                         textDecoration: "none",
 *                                         color: "white",
 *                                     }}
 *                                 >
 *                                      01677409232, 01639575993
 *                                 </a>
 *                             </p>
 *                         </div>
 *                     </div>
 *                 </div>
 *  **/
