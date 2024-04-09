import { useEffect } from "react";
import { Link } from "react-router-dom";

const price = "89";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enrolled Now ";

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


const CourseSideDetail = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const options = {
      key: 'rzp_test_Uhe2TNvMVZCz1Y',
      amount: 30000,
      name: 'Connect ',
      description: 'Some Description',
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com'
      },
      notes: {
        address: 'Some Address'
      },
      theme: {
        color: '#F37254'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();

  };
  return (
    <div className="course-side-detail">
      <div className="csd-title">
        <div className="csdt-left">
          <h4 className="mb-0">
            <sup>₹</sup>
            {price}
          </h4>
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
            <img src="assets/images/pyment/01.jpg" alt="CodexCoder" />
          </div>
        </div>

        <div className="course-enroll">
          <div onClick={() => handlePayment()} className="lab-btn">
            <span >{btnText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSideDetail;
