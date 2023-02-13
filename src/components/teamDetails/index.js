import React from "react";
import "./style.scss";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import { Formik } from "formik";
import Christine from "../../assets/images/eve.png";
import Twitter from "../../assets/icons/Twitter1.svg";
import Facebook from "../../assets/icons/Facebook1.svg";
import Instagram from "../../assets/icons/Instagram1.svg";
import Hyphen from "../../assets/images/Hyphen.svg";
const Index = () => {
  return (
    <>
      <div className="hero page-container">
        <h1>TEAM DTAILS</h1>
      </div>
      <div className="christine-eve-info page-container">
        <div className="christine-eve-sec">
          <div className="christine-img">
            <img src={Christine} alt="This is Christine Image" />
          </div>
          <div className="christine-dtails">
            <Heading title={"Christine Eve"} />
            <Paragraph text={"Developer"} className="christ-dvlpr" />
            <div className="icons">
              <a href="http://Twitter.com" target="_blank">
                <img src={Twitter} alt="This the twitter Icon" />
              </a>
              <a href="http://Facebook.com" target="_blank">
                <img src={Facebook} alt="This the facebook Icon" />
              </a>
              <a href="http://Instagram.com" target="_blank">
                <img src={Instagram} alt="This the instagram Icon" />
              </a>
            </div>
            <h1 className="christ-goal">
              I help my clients stand out and they help me grow.
            </h1>
            <Paragraph
              text="Christine Eve has worked as a PHP developer, web development consultant, and web solution architect since 2015."
              className="christ-about"
            />
            <Paragraph
              text="In 2018, Christine Eve started as the Head of Web Development. Under her leadership, web development team members always adopt the newest tech as learning machine and blockchain. She often participates in tech conferences."
              className="christ-about"
            />
          </div>
        </div>
      </div>
      <div className="forms page-container"></div>
      <div className="contact page-container">
        <div className="contact-title">
          <div className="contact-title-dtail">
            <div className="contact-img">
              <img src={Hyphen} alt="This the imege of Hyphen" />
              <p className="contact-txt">CONTACT WITH US</p>
            </div>
            <Heading title={"Feel Free to Contact with Our IT Experts"} />
          </div>
        </div>
        <Formik
          initialValues={{
            userName: "",
            email: "",
            phoneNumber: "",
            subjact: "",
            write: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.userName) {
              errors.userName = "Required";
            }

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            return errors;
          }}
             onSubmit={(values, { setSubmitting }) => {
              console.log(values)
               setTimeout(() => {
                 alert(JSON.stringify(values, null, 2));
                 setSubmitting(false);
               }, 400);
             }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="info">
                <input
                  className="info"
                  type="text"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                  value={values.userName}
                />
                {errors.userName && touched.userName && errors.userName}

                <input
                  className="info"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email Address"
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}

                <input
                  className="info"
                  type="text"
                  name="text"
                  placeholder="Phone Number"
                  value={values.text}
                />

                <input
                  className="info"
                  type="text"
                  name="text"
                  placeholder="Subjact"
                  value={values.text}
                />
              </div>

              <input
                className="write"
                type="text"
                name="text"
                placeholder="Write a message"
                value={values.text}
              />
              <br />

              <input
                className="send"
                type="submit"
                name="submit"
                value="Send a message"
              />
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Index;
