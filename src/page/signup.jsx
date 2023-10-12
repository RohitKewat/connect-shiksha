import Swal from "sweetalert2";
import { useMutation, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { MUTATION_STUDENT_RAGISTRATION } from "../graphql/Mutations";

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

let socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
  {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
  },
  {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
  },
];

const SignupPage = () => {
  const [createStudent] = useMutation(MUTATION_STUDENT_RAGISTRATION);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async () => {
    try {
      const { data } = await createStudent({
        variables: {
          studentInput: formData,
        },
      });

      console.log("Student registration response:", data);

      Swal.fire({
        icon: "success",
        title: "Registration successful!",
        text: "You have successfully registered as a student.",
      });
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
    <Fragment>
      <Header />
      <PageHeader title={title} curPage={"Sign Up"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form">
              <div className="form-group d-flex justify-content-center">
                <div>Choose Your Role</div>
                <div>
                  <input type="radio" name="role" value="teacher" /> Teacher
                  <input type="radio" name="role" value="student" /> Student
                </div>
              </div>
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
                <button className="lab-btn" onClick={handleRegistration}>
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a href={val.link} className={val.className}>
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
