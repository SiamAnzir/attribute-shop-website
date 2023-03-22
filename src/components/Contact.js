import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const position = [23.720381, 90.405258];

  const markerIcon = new L.Icon({
    iconUrl: require("../assets/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Send Successfully");
  };
  return (
    <section id="contact" className="mt-5">
      <Container>
        <div className="d-flex justify-content-center">
          <p
            style={{
              borderBottom: "5px solid red",
              fontSize: "30px",
              padding: "5px 20px",
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faContactCard}
              style={{ paddingRight: ".5rem" }}
            />{" "}
            Contact Us
          </p>
        </div>
      </Container>
      <Container>
        <Row className="pt-2 mb-5">
          <Col lg={8} md={12}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={markerIcon}>
                <Popup>Ground Floor, 60 Kazi Alauddin Road, Dhaka-1000</Popup>
              </Marker>
            </MapContainer>
          </Col>
          <Col lg={4} md={12}>
            <h2>
              {" "}
              <FontAwesomeIcon icon={faEnvelopeOpen} /> Need Help ?{" "}
            </h2>
            <p className="leading-relaxed mb-5">
              If you have any query about us or need any help. Send Your
              valuable message.
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Type your Name"
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="01677409232" />
              </Form.Group>
              <Form.Group
                className="mb-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control required type="text" as="textarea" rows={3} />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button type="submit"> Submit </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
