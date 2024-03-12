import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Shubham from '../Assets/Shubham.png';
import Mayur from '../Assets/Nileshk.jpg';
import Hemant from '../Assets/Hemant.jpg';

function Team() {
    const data = [
        {
            id: 1,
            imgUrl: Mayur,
            name: "Nilesh Khambalkar",
            designation: "Manager & Hair Stylish"
        },
        {
            id: 2,
            imgUrl: Shubham,
            name: "Shubham Tirthkar",
            designation: "Salon Head"
        },
        {
            id: 3,
            imgUrl: Hemant,
            name: "Hemant Patil",
            designation: "Beautician & Nail Technician"
        }
    ];

    return (
        <div className="py-5">
            <Container>
                <div className="text-center">
                    <h2 className='fw-bold text-danger' style={{ fontFamily: "Sedgwick Ave Display" }}>OUR TEAM</h2>
                    <p>Our <span>Professionals</span></p>
                </div>
                <Row className="gy-4">
                    {data.map((member) => (
                        <Col key={member.id} lg={4} md={6} className="d-flex align-items-stretch">
                            <Card style={{ width: '18rem' }} className="mx-auto">
                                <Card.Img variant="top" src={member.imgUrl} alt="" style={{ maxHeight: "300px", objectFit: 'cover' }} />
                                <Card.Body className="text-center">
                                    <Card.Title>{member.name}</Card.Title>
                                    <Card.Text className='fw-bold'>{member.designation}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Team;
