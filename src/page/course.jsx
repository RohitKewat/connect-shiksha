import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";

const courseList = [
  {
    imgUrl: "assets/images/course/01.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "₹300",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Fundamentals of Adobe XD Theory Learn New",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
  },
  {
    imgUrl: "assets/images/course/02.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "₹300",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Certified Graphic Design with Free Project Course",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/02.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "Lora Smith",
    btnText: "Read More",
  },
];

const CoursePage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"All Courses"} curPage={"Course Page"} />

      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {courseList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="course-item">
                    <div className="course-inner">
                      <div className="course-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="course-content">
                        <div className="course-price">{val.price}</div>
                        <div className="course-category">
                          <div className="course-cate">
                            <a href="#">{val.cate}</a>
                          </div>
                          <div className="course-reiew">
                            <Rating />
                            <span className="ratting-count">
                              {" "}
                              {val.reviewCount}
                            </span>
                          </div>
                        </div>
                        <Link to="/course-single">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="course-details">
                          <div className="couse-count">
                            <i className="icofont-video-alt"></i>{" "}
                            {val.totalLeson}
                          </div>
                          <div className="couse-topic">
                            <i className="icofont-signal"></i> {val.schdule}
                          </div>
                        </div>
                        <div className="course-footer">
                          <div className="course-author">
                            <img
                              src={`${val.authorImgUrl}`}
                              alt={`${val.authorImgAlt}`}
                            />
                            <Link to="/team-single" className="ca-name">
                              {val.authorName}
                            </Link>
                          </div>
                          <div className="course-btn">
                            <Link to="/course-single" className="lab-btn-text">
                              {val.btnText}{" "}
                              <i className="icofont-external-link"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
