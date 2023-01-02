import React from "react";
import Heading from "../../utils/Heading";
import PrimaryButton from "../../utils/primarybutton";
import learncircle from "../../assets/images/learncircle.png";
const Learnmore = () => {
  return (
    <div className="page-container learmore-sec">
      <div className="learn-section">
        <div className="learn-section-1">
          <img src={learncircle} alt="hwlll2" className="" />
        </div>

        <div className="learn-section-2">
          <div className="">
            <Heading
              title={`We’re Ready Develop Your Site!`}
              className="learn-heading"
            />
          </div>
          <div className="learn-list">
            <ul>
              <li>
                <b>Bringing new IT solutions to the market</b>
              </li>
              <li>
                <b>To be included the list of the best 100 IT companies</b>
              </li>
              <li>
                <b>Our company have 300 IT senior professionals.</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="learn-section-3">
          <PrimaryButton btnText="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Learnmore;
