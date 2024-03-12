import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import s1 from '../Assets/s1.jpg'
import s2 from '../Assets/s2.jpg'
import s3 from '../Assets/s3.jpg'
import s4 from '../Assets/s4.jpg'
import s5 from '../Assets/s5.jpg'
import s6 from '../Assets/s6.jpg'

const Services = () => {
    const servicesData = [
        {
            title: 'Hair + Color',
            image: s1,
            description:
                "At our parlour, we specialize in creating stunning hairstyles and vibrant hair colors that turn heads. Our highly skilled hairstylists will work closely with you to understand your desires and provide expert advice. With a wide range of professional hair color options available, from natural highlights to bold fashion shades, we can customize your look to match your personality and style.",
        },
        {
            title: 'Blowout Bar',
            image: s2,
            description:
                "Experience the epitome of luxurious hair styling at our blowout bar. Treat yourself to a professional blowout that will leave your hair looking voluminous, sleek, and glamorous. Our talented stylists will expertly shampoo, condition, and style your locks, creating a stunning look that lasts for days. Sit back, relax, and let us transform your hair into a work of art.",
        },
        {
            title: 'Nails',
            image: s3,
            description:
                "Indulge in a pampering nail care experience at our parlour. Our skilled nail technicians will revitalize your hands and feet with meticulous care and attention to detail. Choose from a variety of nail services, including manicures, pedicures, gel polish, nail extensions, and nail art.",
        },
        {
            title: 'Wax',
            image: s4,
            description:
                "Unveil smooth, silky skin with our professional waxing services. Our experienced estheticians use high-quality products and precise techniques to ensure a comfortable and effective hair removal experience. From eyebrows to legs, our waxing services cover all areas of the body, leaving your skin feeling soft and hair-free. Say goodbye to daily shaving and hello to long-lasting smoothness.",
        },
        {
            title: 'Spa',
            image: s5,
            description:
                "Escape the stresses of everyday life and immerse yourself in pure bliss at our rejuvenating spa. Our comprehensive spa services are designed to promote relaxation, rejuvenation, and overall well-being. Indulge in a variety of treatments, including soothing massages, invigorating body scrubs, hydrating facials, and revitalizing body wraps.",
        },
        {
            title: 'Bride',
            image: s6,
            description:
                "Make your special day even more magical with our bridal services. Our dedicated team of professionals understands the importance of creating the perfect bridal look. From elegant updos to romantic hairstyles, flawless makeup to intricate henna designs, we will ensure that you look and feel like a true princess on your wedding day. Trust us to handle all your bridal beauty needs, so you can focus on creating unforgettable memories.",
        },
    ];

    return (
        <section id="services" className="">
            <Container>
                <Row>
                    <Col xs={12} className="section-intro">
                        <h2 className='fw-bold text-danger text-center pt-5' style={{ fontFamily: "Sedgwick Ave Display" }}>OUR SERVICES</h2>
                    </Col>
                </Row>
                <Row>
                    {servicesData.map((service, index) => (
                        <Col key={index} lg={4} sm={6} className="p-4">
                            <div
                                className="icon-box ms-5"
                                style={{ position: 'relative', height: '200px', width: '200px' }}
                                onMouseOver={(e) => (e.currentTarget.style = 'height: 250px; width: 250px;')}
                                onMouseOut={(e) => (e.currentTarget.style = 'height: 200px; width: 200px;')}
                            >
                                <Image src={service.image} className='img-thumbnail'/>
                            </div>
                            <h5 className="title-sm mt-4 text-center fw-bold" style={{ fontFamily: 'Sedgwick Ave Display' }}>
                                {service.title}
                            </h5>
                            <p style={{ textAlign: 'justify', fontSize:'14px' }}>{service.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;

