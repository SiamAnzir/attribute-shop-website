import React from "react";
import {Carousel, Container} from "react-bootstrap";
import attribute from "../assets/PNG.png";
import slideImage from "../assets/blackImage.png";

const Home = () => {
    return (
        <section className="mt-5">
            <br/>
            <Container>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mx-auto mt-5">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={slideImage}
                                alt="First slide"
                                height={350}
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={slideImage}
                                alt="Second slide"
                                height={350}
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slideImage}
                                alt="Third slide"
                                height={350}
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}

export default Home;