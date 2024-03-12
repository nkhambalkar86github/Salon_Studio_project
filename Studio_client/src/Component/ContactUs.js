import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {   

    return (
        <Container className="p-5">
            <h2 className="fw-bold text-danger text-center pb-5" style={{ fontFamily: 'Sedgwick Ave Display' }}>
                CONTACT US
            </h2>
            <Row className="gy-4">
                <Col md={6} className="text-center">
                    <Card className="bg-light">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon flex-shrink-0 text-danger pb-1" size='2x' />
                            <div>
                                <h3>Our Address</h3>
                                <p>Tilak Road, Near SP College Pune, 411041</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon icon={faEnvelope} className="icon flex-shrink-0 text-danger pb-1" size='2x' />
                            <div className='text-center'>
                                <h3>Email Us</h3>
                                <p>enquiry@salonstudio.com</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                            <FontAwesomeIcon size='2x' icon={faPhone} className="icon flex-shrink-0 text-danger pb-1" />
                            <div>
                                <h3>Call Us</h3>
                                <p>+91 97303 53639</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-light text-center">
                        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                        <FontAwesomeIcon size='2x' icon={faClock} className="icon flex-shrink-0 text-danger pb-1" />
                            <div>
                                <h3>Opening Hours</h3>
                                <p><strong>Mon-Sat:</strong> 11AM - 9PM</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>               
            </Row>
        </Container>
    );
};

export default ContactUs;
