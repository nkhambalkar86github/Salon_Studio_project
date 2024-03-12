import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { login } from '../Sercices/AdminService';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [logerr, setLogerr] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      //localStorage.setItem("token",result.token);
      localStorage.setItem("token", result.token);
      //console.log(result);
      if (result.msg === "Ok") {
        navigate('/clist');
      }
      else {
        setLogerr(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id='logindiv'>
      <h2 className="fw-bold text-danger text-center p-3" style={{ fontFamily: 'Sedgwick Ave Display' }}>
        LOGIN
      </h2>
      <Container className="py-1 d-flex align-items-center justify-content-center">
        <Form className="border p-5 rounded" onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your username"
              name="name"
              onChange={handleChange}
              // value={formData.username}
              // onChange={handleChange}
              required
              autoComplete='off'
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              //value={formData.email}
              //s  onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="d-flex justify-content-around align-items-center mb-4">
            <Form.Check type="checkbox" id="formRememberMe" className="me-3">
              <Form.Check.Input />
              <Form.Check.Label>Remember me</Form.Check.Label>
            </Form.Check>
          </div>
          <Button variant="primary" type="submit" className="btn-lg btn-block w-100 btn-danger">
            Login
          </Button>
        </Form>
        {logerr ? <Alert variant="danger" className="mt-4">Invalid Username and password</Alert> : null}
      </Container>
    </div>
  );
};

export default Login;


