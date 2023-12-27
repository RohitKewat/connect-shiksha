import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";

import Kuldeep from "../../assets/images/instructor/kuldeep.jpg";
import Rohit from "../../assets/images/instructor/rohit.jpg";
const instructorList = [
  {
    imgUrl: Kuldeep,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Kuldeep Kaware",
    degi: "Master of Computer Applications",
    courseCount: "00 courses",
    studentAnroll: "00 students",
  },
  {
    imgUrl: Rohit,
    imgAlt: "instructor rajibraj91 rajibraj",
    name: "Rohit Kewat",
    degi: "Master of Computer Applications",
    courseCount: "00 courses",
    studentAnroll: "00 students",
  },
];
const subTitle = "World-class Instructors";
const title = "Classes Taught By Real Creators";

const Instructor = () => {
  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {instructorList.map((val, i) => (
              <div className="col" key={i}>
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="instructor-content">
                      <Link to="/team-single">
                        <h4>{val.name}</h4>
                      </Link>
                      <p>{val.degi}</p>
                      <Rating />
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> {val.courseCount}
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i>{" "}
                        {val.studentAnroll}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
