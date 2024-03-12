import React, { useState } from "react"; 
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveCostomer } from "../Sercices/CostomerService";

 
export function Registraion()
{
    const[formData,setFormData]=useState({name:"",age:"",gender:"",number:"",email:""});  //register hone ke bad sbhi fields ko empty kr denga
    const[isSubmited,setIsSubmited]=useState(false);
    const handleChange=(e)=>
    {
        setFormData({...formData,[e.target.name]:e.target.value});      //formdata contain all the data here
    }   
    const handleSubmit=async(e)=>
    {
     e.preventDefault();         //it will stop the page to reload.
      try
       {
        const response=await saveCostomer(formData); //formdata pure info ka obj hai, jo service ke method me jayega(As a arg) then wahase api ke through db me jayega
        setFormData({roll:"",name:"",marks:"",gender:""});
        setIsSubmited(true)     
        setTimeout(()=>
        {
          setIsSubmited(false)
        },1200)                   //settimeout is for alert box costomer register for 1 sec
        return response;
      } catch (error)
       {
            console.log(error);
      }
    }
    return (
      <>
        {/* <Navbarpage></Navbarpage> */}
        <Container id="con">
          <h2 className="fw-bold text-danger text-center p-3" style={{ fontFamily: 'Sedgwick Ave Display' }}>
            Register Callback Request
          </h2>
          <Container className="py-1 d-flex align-items-center justify-content-center">
            <Form className="border p-5 rounded" onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername" className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  onKeyUp={handleChange}
                  value={isSubmited ? formData.name : null}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter your age"
                  name="age"
                  onKeyUp={handleChange}
                  value={isSubmited ? formData.age : null}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword" className="mb-4">
                <Form.Check
                  type="radio"
                  placeholder="Enter your gender"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender === 'male'}
                  inline
                />
                <Form.Label className="me-3">Male</Form.Label>
                <Form.Check
                  type="radio"
                  placeholder="Enter your gender"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender === 'female'}
                  inline
                />
                <Form.Label>Female</Form.Label>
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control
                  type="text"
                  placeholder="Enter your phone"
                  name="number"
                  onChange={handleChange}
                  value={isSubmited ? formData.number : null}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-4">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                  value={isSubmited ? formData.email : null}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-lg btn-block w-100 btn-danger">
                Register
              </Button>
            </Form>
            <Row className={"mt-3"}>
              <Col lg={4}>
                {isSubmited ? <Alert variant="success">Customer Registered Successfully</Alert> : null}
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  };


























  // return (      
  //   <>
  //   {/* <Navbarpage></Navbarpage> */}
  //   <Container id="con"> 
  //   <h2 className="fw-bold text-danger text-center p-3" style={{ fontFamily: 'Sedgwick Ave Display' }}>
  //     Register Callback Request
  //   </h2>
  //     <Form onSubmit={handleSubmit} >
  //       <Form.Group controlId="formUsername">
  //         <Form.Label></Form.Label>
  //         <Form.Control
  //           type="text"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your name"
  //           name="name"
  //           onKeyUp={handleChange}
  //          // value={formData.username}
  //          // onChange={handleChange}
  //           required
  //         />
  //       </Form.Group>  
  //       <Form.Group controlId="formEmail">
  //         <Form.Label></Form.Label>
  //         <Form.Control
  //           type="text"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your age"
  //           name="age"
  //           onKeyUp={handleChange}
  //           //value={formData.email}
  //         //s  onChange={handleChange}
  //           required
  //         />
  //       </Form.Group>

  //       <Form.Group controlId="formPassword">
  //         <Form.Label>male</Form.Label>
  //         <Form.Check
  //           type="radio"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your gender"
  //           name="gender"
  //           value="male"
  //           onChange={handleChange}
  //          // value={formData.password}
  //           //onChange={handleChange}
  //           required
  //         />
  //         <Form.Label>female</Form.Label>
  //          <Form.Check
         
  //           type="radio"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your gender"
  //           name="gender"
  //           value="female"
  //           onChange={handleChange}
  //          // value={formData.password}
  //           //onChange={handleChange}
  //           required
  //         />
  //       </Form.Group>

  //       <Form.Group controlId="formEmail">
  //         <Form.Label></Form.Label>
  //         <Form.Control
  //           type="text"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your phone"
  //           name="number"
  //           onChange={handleChange}
  //           //value={formData.email}
  //         //s  onChange={handleChange}
  //           required
  //         />
  //       </Form.Group>
  //       <Form.Group controlId="formEmail">
  //         <Form.Label></Form.Label>
  //         <Form.Control
  //           type="email"
  //           value={isSubmited?formData.roll:null}
  //           placeholder="Enter your email"
  //           name="email"
  //           onChange={handleChange}
  //           //value={formData.email}
  //         //s  onChange={handleChange}
  //           required
  //         />
  //       </Form.Group>

  //       <Button variant="primary" type="submit">
  //         Register
  //       </Button>
  //     </Form>
  //     <Row className={"mt-3"}>
  //      <Col lg={4}>
  //       {isSubmited?<Alert variant="success">Costomer Registered Successfully</Alert>:null}

  //      </Col>
        
  //     </Row>
  //   </Container>
  //   </>
  // );
  