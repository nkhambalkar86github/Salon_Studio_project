import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import About1 from '../Assets/About1.jpeg'
import About2 from '../Assets/About2.jpeg'
const AboutUs = () => {
    return (
        <div>
            <div className="container px-5 masthead-img">
                <h2 className='fw-bold text-danger text-center pt-5' style={{ fontFamily: "Sedgwick Ave Display" }}>ABOUT US</h2>
            </div>
            <Container className="">
                <Row className=" align-items-center">
                    <Col lg={7} order={1}>
                        <div className="">
                            <Image fluid src={About1} alt="..." />
                        </div>
                    </Col>
                    <Col lg={5} order={2}>
                        <div className="">
                            <p className='text-center' style={{ fontSize: '30px', fontWeight: 'bold' ,fontFamily: "Sedgwick Ave Display" }}>Our <span>History</span></p>
                            <p style={{textAlign:'justify'}}>Founded in 2023 by the passionate visionary Founders, Salon Studio has become synonymous with innovation and style in the heart of Pune. From the outset, Salon Studio has embraced the unisex concept, fostering an inclusive environment that welcomes clients from all walks of life. Our journey has been marked by a commitment to staying ahead of beauty trends, with our skilled stylists consistently pushing the boundaries of creativity. The accolades we've received over the years stand as a testament to our dedication to excellence in the beauty industry.At Salon Studio, our client-centric approach goes beyond mere service—it's about understanding and celebrating the uniqueness of each individual. The salon is not just a place for transformations; it's a community where diversity is cherished, and every client is valued. As we reflect on our history, we extend our deepest gratitude to our loyal clients who have made Salon Studio their beauty destination.Looking forward, Salon Studio remains devoted to crafting personalized beauty experiences and defining style for each client. Here's to the dynamic history of Salon Studio and the exciting chapters yet to unfold, where beauty continues to be celebrated in all its forms.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="grey-bg pt-0 py-5">
                <Container className="px-5">
                    <Row className="gx-5 align-items-center">
                        <Col lg={5}>
                            <div className=" text-justify pt-5">
                                <p className='text-center' style={{ fontSize: '30px', fontWeight: 'bold', fontFamily: "Sedgwick Ave Display" }}>About <span>Salon</span> Studio</p>
                                <p className='text-justify' style={{textAlign:'justify'}}>
                                    Welcome to Salon Studio – Where Beauty and Style Unite!

                                    At Salon Studio, we redefine beauty with a touch of individuality. As the proud owner, I invite you to experience a world of chic elegance and personalized care.

                                    🌟 Unisex Excellence: Our doors are open to all, offering a unisex haven where everyone can indulge in the latest trends and timeless classics.

                                    💇‍♀️ Your Style, Your Way: Our talented team of stylists is dedicated to bringing your unique vision to life. Whether it's a bold transformation or a subtle enhancement, we've got you covered.

                                    ✨ Modern Ambiance: Step into our modern and vibrant space, where creativity flourishes, and style knows no bounds.                                   
                                </p>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="py-5">
                                <Image fluid src={About2} alt="..." />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutUs;
