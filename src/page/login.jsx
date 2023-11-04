import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Swal from "sweetalert2";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import StudentLogin from "./StudentLogin";
import TeacherLogin from "./TeacherLogin";

const title = "Login";
const btnText = "Submit Now";

const LoginPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Login Page"} curPage={"Login"} />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <Tabs
              defaultActiveKey="student"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="student" title="Student">
                <StudentLogin />
              </Tab>
              <Tab eventKey="teacher" title="Teacher">
                <TeacherLogin />
              </Tab>
            </Tabs>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don't Have any Account? <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default LoginPage;
