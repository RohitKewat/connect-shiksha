import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import tt from "../assets/images/achive/image.jpg";
const subTitle = "About Connect Shiksha";
const title = "Connect Shiksha is one of the best online learning platforms.";
const desc =
  "We provide top quality courses for students and professionals. We have a wide range of courses from web development to programming. We have the best instructors in the world who are experts in their respective fields.";

const aboutList = [
  {
    imgUrl: "assets/images/about/icon/01.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Skillfully provide access to user friendly whereas communicate leveraged services",
  },
  {
    imgUrl: "assets/images/about/icon/02.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Get certificate after completing the course and share it with your friends and family",
  },
  {
    imgUrl: "assets/images/about/icon/03.jpg",
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Online classes are available for all the courses and you can learn from anywhere",
  },
];

const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"About Our Connect Shiksha"} curPage={"About"} />
      <div className="about-section style-3 padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center ">
            <div className="col">
              <div className="about-left">
                <div className="about-thumb pe-5">
                  <img src="assets/images/logo/01.png" alt="about" />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  <span className="subtitle">{subTitle}</span>
                  <h2 className="title">{title}</h2>
                  <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    {aboutList.map((val, i) => (
                      <li key={i}>
                        <div className="sr-left">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="sr-right">
                          <h5>{val.title}</h5>
                          <p>{val.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
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

export default AboutPage;
