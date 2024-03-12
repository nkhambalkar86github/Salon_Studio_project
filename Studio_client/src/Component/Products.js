import React, { useState } from 'react';
import { Container, Row, Col, Image, Pagination } from 'react-bootstrap';

function Products() {
    const imageArray = [
        {
            id: 1,
            src: 'https://shop.lakmesalon.in/cdn/shop/products/SchwarzkopfProfessionalRepairRescueMasque_Shampoo_Conditioner_300x.jpg?v=1676462151', // Replace with your actual URL
            alt: 'Image 1',
            prodName:'Moroccanoil Moisture Repair Conditioner 250ml',
            price:'₹ 2,160'
        },
        {
            id: 2,
            src: 'https://shop.lakmesalon.in/cdn/shop/files/DSC06023_300x.jpg?v=1684318398', // Replace with your actual URL
            alt: 'Image 2',
            prodName:'Naturica Soothing Relief Shampoo 250ml',
            price: '₹ 1,700'
        },
        {
            id: 3,
            src: 'https://shop.lakmesalon.in/cdn/shop/products/1000x1000_ListingImage-02_300x.jpg?v=1677763008', // Replace with your actual URL
            alt: 'Image 3',
            prodName:'Beauty Garage Shea Gift Set Shampoo & Conditioner 610ml',
            price: '₹ 3,000'           

        },
        {
            id: 4,
            src: 'https://shop.lakmesalon.in/cdn/shop/files/SIZE-W-1000-X-H-1000-PX-De-Fabulous-Ginger_d7de309e-8d7f-4a86-8a74-52cc278c40e6_300x.jpg?v=1695623033', // Replace with your actual URL
            alt: 'Image 4',
            prodName:'Schwarzkopf Professional Repair Rescue Conditioner 200ml',
            price: '₹ 1,100'                       
        },
        {
            id: 5,
            src: 'https://shop.lakmesalon.in/cdn/shop/products/1_68043ab8-77d1-4d5e-8ad5-ddf6b8b51cd8_300x.jpg?v=1623325691', // Replace with your actual URL
            alt: 'Image 5',
            prodName:'De Fabulous Reviver Hair Repair Shampoo 250ml',
            price: '₹ 1,350'  
        },
        {
            id: 6,
            src: 'https://shop.lakmesalon.in/cdn/shop/files/1_229e21bd-693e-4215-87a5-bc78cd2e903e_300x.jpg?v=1682579421', // Replace with your actual URL
            alt: 'Image 6',
            prodName:'Dermalogica Dynamic Skin Repair Conditioner 25',
            price: '₹ 1,350'  
        },
        {
            id: 7,
            src: 'https://shop.lakmesalon.in/cdn/shop/products/H-Dynamic-skin-recovery-spf50-50ml--5000X500-PX_300x.jpg?v=1623325012', // Replace with your actual URL
            alt: 'Image 7',
            prodName:'Moroccanoil Repair Kit',
            price: '₹ 4,320' 
        },
        {
            id: 8,
            src: 'https://shop.lakmesalon.in/cdn/shop/products/1_6f571f02-1f54-4725-9690-4972f15ddc43_300x.jpg?v=1623325701', // Replace with your actual URL
            alt: 'Image 8',
            prodName:'Moroccanoil Hydrating Shampoo 250ml',
            price: ' ₹ 2,340'
        },
    ];

    const imagesPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = imageArray.slice(startIndex, endIndex);
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <Container className="w-100">
            <h2 className='fw-bold text-danger text-center mb-3' style={{ fontFamily: "Sedgwick Ave Display" }}>Our Products</h2>
            <Row>
                {currentImages.map((image) => (
                    <Col key={image.id} md={3} className="text-center">
                        <Image
                            className="img-thumbnail mb-3"
                            src={image.src}
                            alt={image.alt}
                            style={{ maxHeight: '300px' }}
                            fluid
                        />
                        <div>
                            <p className="fw-bold">{image.prodName}</p>
                            <p>{image.price}</p>
                        </div>
                    </Col>
                ))}
            </Row>

            <div className="text-center mt-4 d-flex justify-content-center">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {Array.from({ length: Math.ceil(imageArray.length / imagesPerPage) }, (_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={currentPage === index + 1}
                            onClick={() => goToPage(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === Math.ceil(imageArray.length / imagesPerPage)}
                    />
                </Pagination>
            </div>
        </Container>
    );
}

export default Products;
