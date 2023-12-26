import Teacher from "../../assets/images/achive/teacher.jpg";
import Student from "../../assets/images/achive/student.jpg";
const subTitle = "START TO SUCCESS";
const title = "Achieve Your Goals With Connect Shiksha";

const achieveList = [
  {
    imgUrl: Teacher,
    imgAlt: "achive thumb rajibraj91 rajibraj",
    title: "Start Teaching Today",
    desc: "Start teaching today and get your course online with minimal hassle and share your knowledge with the world.",
    btnText: "Become A Instructor",
    siteLink: "/login",
  },
  {
    imgUrl: Student,
    imgAlt: "achive thumb rajibraj91 rajibraj",
    title: "If You Join Our Course",
    desc: "Register for free and get access to all the courses and start learning from the best instructors in the world.",
    btnText: "Register For Free",
    siteLink: "/login",
  },
];

const Achievement = () => {
  return (
    <div className="achievement-section padding-tb bg-light">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="achieve-part">
            <div className="row g-4 row-cols-1 row-cols-lg-2">
              {achieveList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="achieve-thumb pt-5">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="achieve-content">
                        <h4>{val.title}</h4>
                        <p>{val.desc}</p>
                        <a href={val.siteLink} className="lab-btn">
                          <span>{val.btnText}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
