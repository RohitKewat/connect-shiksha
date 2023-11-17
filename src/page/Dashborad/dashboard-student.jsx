import { Component, Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import { Link } from "react-router-dom";

const DashStudent = () => {
  const price = "89";
  const excenge = "Limited time offer";
  const paymentTitle = "Secure Payment:";
  const shareTitle = "Share This Course:";
  const btnText = "Enrolled Now";

  const csdcList = [
    {
      iconName: "icofont-ui-alarm",
      leftText: "Course level",
      rightText: "Beginner",
    },
    {
      iconName: "icofont-book-alt",
      leftText: "Course Duration",
      rightText: "10 week",
    },
    {
      iconName: "icofont-signal",
      leftText: "Online Class",
      rightText: "08",
    },
    {
      iconName: "icofont-video-alt",
      leftText: "Lessions",
      rightText: "18x",
    },
    {
      iconName: "icofont-abacus-alt",
      leftText: "Quizzes",
      rightText: "0",
    },
    {
      iconName: "icofont-hour-glass",
      leftText: "Pass parcentages",
      rightText: "80",
    },
    {
      iconName: "icofont-certificate",
      leftText: "Certificate",
      rightText: "Yes",
    },
    {
      iconName: "icofont-globe",
      leftText: "Language",
      rightText: "English",
    },
  ];

  const socialList = [
    {
      siteLink: "#",
      iconName: "icofont-twitter",
      className: "twitter",
    },
    {
      siteLink: "#",
      iconName: "icofont-vimeo",
      className: "vimeo",
    },
    {
      siteLink: "#",
      iconName: "icofont-rss",
      className: "rss",
    },
  ];

  return (
    <Fragment>
      <Header />
      <div className="pageheader-section style-2">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
            <div className="col-lg-3 col-12">
              <div className="pageheader-thumb">
                <img
                  src="assets/images/pageheader/03.jpg"
                  alt="rajibraj91"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-9 col-12">
              <div className="pageheader-content">
                <h2 className="phs-title">name</h2>
                <p className="phs-desc">desc</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="sidebar-part">
                <div className="course-side-detail">
                  <div className="csd-title">
                    <div className="csdt-left">
                      <h4 className="mb-0">Student Details</h4>
                    </div>
                    <div className="csdt-right">
                      <p className="mb-0">
                        <i className="icofont-clock-time"></i>
                        {excenge}
                      </p>
                    </div>
                  </div>
                  <div className="csd-content">
                    <div className="csdc-lists">
                      <ul className="lab-ul">
                        {csdcList.map((val, i) => (
                          <li key={i}>
                            <div className="csdc-left">
                              <i className={val.iconName}></i>
                              {val.leftText}
                            </div>
                            <div className="csdc-right">{val.rightText}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sidebar-payment">
                      <div className="sp-title">
                        <h6>{paymentTitle}</h6>
                      </div>
                      <div className="sp-thumb">
                        <img
                          src="assets/images/pyment/01.jpg"
                          alt="CodexCoder"
                        />
                      </div>
                    </div>

                    <div className="course-enroll">
                      <Link to="/signup" className="lab-btn">
                        <span>{btnText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
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
