import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import innovation from "../../assets/images/innovation.png";
import innotick from "../../assets/images/innotick.png";
import PrimaryButton from "../../utils/primarybutton";
import line from "../../assets/images/line.png";
import plus from "../../assets/images/plus.png";
const Innovation = () => {
  return (
    <div className="page-container innovation">
      <div className="innovation-cards">
        <div className="innovation-pic">
          <img src={innovation}></img>
        </div>
        <div className="innovation-details">
          <div className="line-head">
            <div className="line-first">
              <img src={line} alt="hwlll" className="" />
            </div>
            <div className="">
              <Paragraph text="About Your Company" className={"purple-head"} />
            </div>
          </div>

          <div className="innovation-details-head">
            <Heading
              title={`We're Partner of Your Innovations`}
              className={"black-head"}
            />
          </div>
          <div className="innovation-details-text">
            <Paragraph
              text="Infetech is a provider of IT consulting and software development services. We have 
helped organizations and companies improve business performance & enhance their 
competitiveness."
              className={"black-text"}
            />
          </div>
          <div className="innovation-list">
            <div className="innovation-list-col-1">
              <div className="tick-head">
                <div className="tick-first">
                  <img src={innotick} alt="hwlll" className="" />
                </div>
                <div className="">
                  <Paragraph
                    text="Best quality support"
                    className={"list-head-1"}
                  />
                </div>
              </div>

              <div className="tick-head">
                <div className="tick-first">
                  <img src={innotick} alt="hwlll" className="" />
                </div>
                <div className="">
                  <Paragraph
                    text="Money back guarantee"
                    className={"list-head-2"}
                  />
                </div>
              </div>
            </div>
            <div className="innovation-list-col-1">
              <div className="tick-head">
                <div className="tick-first">
                  <img src={innotick} alt="hwlll" className="" />
                </div>
                <div className="">
                  <Paragraph text="Serve the best" className={"list-head-1"} />
                </div>
              </div>

              <div className="tick-head">
                <div className="tick-first">
                  <img src={innotick} alt="hwlll" className="" />
                </div>
                <div className="">
                  <Paragraph
                    text="Trusted Professionals"
                    className={"list-head-2"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="innovation-button">
            <PrimaryButton btnText="Learn more" />
          </div>
        </div>
      </div>
      <div className="innovation-numbers">
        <div className="innovation-numbers-card">
          <div className="innovation-numbers-card-text">
            <div className="num-with-pus">
              <img src={plus} className="plus-num" />
              <Heading title={`330`} className={"num-head"} />
            </div>

            <Paragraph text="ACTIVE CLIENTS" className={"para-num"} />
          </div>
        </div>

        <div className="innovation-numbers-card">
          <div className="innovation-numbers-card-text">
            <div className="num-with-pus">
              <img src={plus} className="plus-num" />
              <Heading title={`980`} className={"num-head"} />
            </div>

            <Paragraph text="Project Compeleted" className={"para-num"} />
          </div>
        </div>

        <div className="innovation-numbers-card">
          <div className="innovation-numbers-card-text">
            <div className="num-with-pus">
              <img src={plus} className="plus-num" />
              <Heading title={`20`} className={"num-head"} />
            </div>

            <Paragraph text="Glourious Years" className={"para-num"} />
          </div>
        </div>

        <div className="innovation-numbers-card">
          <div className="innovation-numbers-card-text">
            <div className="num-with-pus">
              <img src={plus} className="plus-num" />
              <Heading title={`112`} className={"num-head"} />
            </div>

            <Paragraph text="Personal Team" className={"para-num"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
