import React from "react";
import {Carousel, Container} from "react-bootstrap";
import attribute from "../assets/PNG.png";
import slideImage from "../assets/blackImage.png";
import cover from "../assets/cover.jpg";
import sliderOne from "../assets/Branding-01.jpg";
import sliderTwo from "../assets/Branding-02.jpg";
import sliderThree from "../assets/Branding-03.jpg";
import coverTwo from "../assets/coverTwo.jpg";

const Home = () => {
    return (
        <section className="mt-5">
            <br/>
            <Container>
                <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mx-auto mt-5">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={cover}
                                alt="First slide"
                                style={{maxHeight:'35vw'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={sliderOne}
                                alt="Second slide"
                                style={{maxHeight:'35vw'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={sliderTwo}
                                alt="Third slide"
                                style={{maxHeight:'35vw'}}
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={sliderThree}
                                alt="Third slide"
                                style={{maxHeight:'35vw'}}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}

export default Home;