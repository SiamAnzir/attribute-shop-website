import React from "react";
import {useParams} from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import {Container} from "react-bootstrap";

const EachProduct = () => {
    const param = useParams();
    console.log(param);
    return(
        <section>
            <NavBar></NavBar>
            <div className="mt-5 mb-5">
                <Container className="pt-5">
                    <h2>{param.name}</h2>
                </Container>
            </div>
            <Footer></Footer>
        </section>
    )
}

export default EachProduct;