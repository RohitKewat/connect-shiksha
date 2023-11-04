import Swal from "sweetalert2";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { MUTATION_STUDENT_RAGISTRATION } from "../graphql/Mutations";
import { useNavigate } from "react-router-dom";
const btnText = "Get Started Now";
const StudentRagistration = () => {
  const [createStudent] = useMutation(MUTATION_STUDENT_RAGISTRATION);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    role: "student",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createStudent({
        variables: {
          studentInput: formData,
        },
      });

      Swal.fire({
        icon: "success",
        title: "Registration successful!",
        text: "You have successfully registered as a student.",
      });
      navigate("/login");
    } catch (error) {
      console.error("Student registration error:", error);

      Swal.fire({
        icon: "error",
        title: "Registration failed",
        text: "There was an error during registration. Please try again.",
      });
    }
  };

  return (
    <form className="account-form" onSubmit={handleRegistration}>
      <div className="form-group">
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="User Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="lab-btn" type="submit">
          <span>{btnText}</span>
        </button>
      </div>
    </form>
  );
};

export default StudentRagistration;
