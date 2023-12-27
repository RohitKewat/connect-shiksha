const subTitle = "Connect Shiksha";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Learn The</span> Skills You Need{" "}
    <span className="d-lg-block">To Succeed</span>
  </h2>
);
const desc =
  "Online personalized learning remediation/tutoring tool. Search for best teacher for specific topics";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc">{desc}</p>
                <button className="lab-btn mb-lg-5">
                  <span>Get Started</span>
                </button>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img
                  src="assets/images/logo/01.png"
                  alt="img"
                  style={{ width: "300px", marginLeft: "100px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
    </section>
  );
};

export default Banner;
