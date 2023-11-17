import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeaderTwo from "../../component/layout/pageheader-2";
import Author from "../../component/sidebar/author";
import Comment from "../../component/sidebar/comment";
import CourseSideCetagory from "../../component/sidebar/course-cetagory";
import CourseSideDetail from "../../component/sidebar/course-detail";
import Respond from "../../component/sidebar/respond";

const DashStudent = () => {
  return (
    <Fragment>
      <Header />
      {/* <div className="pageheader-section style-2">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
            <div className="col-lg-7 col-12">
              <div className="pageheader-thumb">
                <img src="" alt="rajibraj91" className="w-100" />
                <a href="" className="video-button popup" target="_blank">
                  <i className="icofont-ui-play"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="pageheader-content">
                <h2 className="phs-title">name</h2>
                <p className="phs-desc">desc</p>
                <div className="phs-thumb">
                  <img src="" alt="rajibraj91" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sidebar-part">
                <CourseSideDetail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default DashStudent;
