import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { MUTATION_TEACHER_LOGIN } from "../graphql/Mutations";
import Swal from "sweetalert2";
const btnText = "Submit Now";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loginTeacher] = useMutation(MUTATION_TEACHER_LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      console.log("submit clicked");
      const loginData = {
        username: formData.username,
        password: formData.password,
      };

      try {
        const { data } = await loginTeacher({ variables: loginData });

        localStorage.setItem("userToken", data.teacherLogin.token);
        // Swal.fire({
        //   icon: "success",
        //   title: "Login successful!",
        //   text: "You have successfully logged in.",
        // });
        if(!data.teacherLogin.isFormFilled){
          navigate("/userlevelform");
        }else{
          navigate("/");
        }
      } catch (error) {
        console.error("Login error:", error);

        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "There was an error during login. Please try again.",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Fill All Fields",
        text: "There was an error during login. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="account-form" onSubmit={handleLogin}>
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="User Name *"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password *"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <div className="d-flex justify-content-between flex-wrap pt-sm-2">
          <div className="checkgroup">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <Link to="/forgetpass">Forget Password?</Link>
        </div>
      </div>
      <div className="form-group text-center">
        <button className="d-block lab-btn" type="submit">
          <span>{btnText}</span>
        </button>
      </div>
    </form>
  );
};

export default TeacherLogin;
