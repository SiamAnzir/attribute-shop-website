import React from "react";
import {Container,Row,Col,Dropdown,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";
import {allProducts} from "../store/AllProducts";

const Products = () => {
    return(
        <section id="products" className="mt-5">
            <Container>
                <div className="d-flex justify-content-center">
                   <p style={{borderBottom:"5px solid red",fontSize:'30px',padding:'5px 20px'}}> <FontAwesomeIcon icon={faBagShopping} style={{paddingRight:'.5rem'}}/> Services/Products </p>
                </div>
            </Container>
            <Container>
                <div className="mt-5 mb-5">
                    <Row>
                        {allProducts.map((product) => (
                            <Col className="mt-3" key={product.id} xl={3} lg={4} md={6} sm={12}>
                                <div className="dropdown" style={{border:"2px solid red",borderRadius:'10px'}}>
                                    <div
                                        className="d-flex justify-content-center align-items-center dropdown"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img src={product.logo} alt="..." height={40} width={40} />
                                        <a className="nav-link active" style={{fontSize:'18px',paddingLeft:'4px'}}>{product.categoryName}</a>
                                    </div>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <span className="dropdown-item">Profile</span>
                                        </li>
                                        <li>
                                            <a className="dropdown-item">
                                                Log Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Products;

/**
 * <Dropdown style={{border:"2px solid black",borderRadius:'10px',display:'flex',justifyContent:'center'}}>
 *                                     <Button variant="white"  id="dropdown-basic">
 *                                         <img src={product.logo} alt="..." height={40} width={40}/> <span style={{fontSize:'18px'}}> {product.categoryName} </span>
 *                                     </Button>
 *                                     <Dropdown.Menu>
 *                                         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
 *                                         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
 *                                         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
 *                                     </Dropdown.Menu>
 *                                 </Dropdown>
 * **/