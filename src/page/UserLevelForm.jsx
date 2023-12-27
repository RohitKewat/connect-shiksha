import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";

const UserLevelForm = () => {
  const [formData, setFormData] = useState({
    course: null,
    language: null,
    level: null,
    location: null,
    type: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Header />
      <Container className="p-5  m-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="course">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              name="course"
              value={formData.course || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control
              type="text"
              name="language"
              value={formData.language || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="level">
            <Form.Label>Level</Form.Label>
            <Form.Control
              type="text"
              name="level"
              value={formData.level || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type || ""}
              onChange={handleChange}
            >
              <option value="">Select Type</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default UserLevelForm;
