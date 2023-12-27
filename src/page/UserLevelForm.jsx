import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import { MUTATION_USER_LEVEL_FORM } from "../graphql/Mutations";
import { useNavigate } from "react-router-dom";

const UserLevelForm = () => {
  const navigate = useNavigate();
  const [createUserLevelForm, { loading, error }] = useMutation(MUTATION_USER_LEVEL_FORM);
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

  const handleSubmit = async(e) => {
    console.log("usertoken",localStorage.getItem("userToken"));
    e.preventDefault();
    if (!formData.course || !formData.language || !formData.level || !formData.location || !formData.type) {
     console.log("form data test",formData);
      alert("Please fill all the fields");

      return;
    }
    const userToken = await localStorage.getItem("userToken");
    createUserLevelForm({
      variables: {
      "userLevelFormInput":{
        course: formData.course,
        language: formData.language,
        level: formData.level,
        location: formData.location,
        type: formData.type,
        access_token: userToken
      }
      }
    }).then((res) => {
      navigate("/");
    }).catch((err) => { console.log("error ",err) });
  };


  return (
    <>
      <Header />
      <Container className="p-5  m-5">
        <Form onSubmit={handleSubmit} className="p-5 m-5">
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
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
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
