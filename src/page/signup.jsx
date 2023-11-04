import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import "../assets/css/mycss.css";
import StudentRagistration from "./StudentRagistration";
import TeacherRagistration from "./TeacherRagistration";

const title = "Register Now";
const socialTitle = "Register With Social Media";

const SignupPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={title} curPage={"Sign Up"} />
      <div className="login-section padding-tb section-bg signup">
        <div className="container">
          <div className="account-wrapper">
            <Tabs
              defaultActiveKey="student"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="student" title="Student">
                <StudentRagistration />
              </Tab>
              <Tab eventKey="teacher" title="Teacher">
                <TeacherRagistration />
              </Tab>
            </Tabs>

            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
