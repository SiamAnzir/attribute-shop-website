import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Container, Card } from "react-bootstrap";
import { allProducts } from "../store/AllProducts";

const EachProduct = () => {
  const param = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const res = allProducts.filter(
    (product) => product.categoryName === param.name
  );
  console.log(res);
  console.log(param);
  return (
    <section>
      <NavBar></NavBar>
      <div className="relative mt-5 mb-5" style={{ minHeight: "70vh" }}>
        <Container className="pt-5">
          <h2>{param.name}</h2>
          <Card>
            {res[0].image !== null ? (
              <Card.Img variant="top" src={res[0].image} />
            ) : (
              <h4 className="mt-4 text-center">
                Product Details Not Ready Yet!!
              </h4>
            )}
            <Card.Body className="mt-4">
              <hr />
              <Card.Text style={{ fontWeight: "600", fontSize: "24px" }}>
                {res[0].description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default EachProduct;
