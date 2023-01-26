import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import playbutton from "../../assets/images/playbutton.png";

const Videosection = () => {
  return (
    <div className="video-section">
      <div className="page-container video-section-details">
        <div className="video-text">
          <img src={playbutton} alt="hwlll" className="" />
          <Paragraph text="Do You Need a Meeting?" color="white" size="14px" className={"para"} />
          <Heading
            title={`Save Time and Money
            with a Top IT Solution
            Agency`}
            className="services-heading4"
          />
        </div>
        <div className="video-buttons">
          <div className="rec1">
            <Heading title={`9820`} className="" color={"white"} />
            <Paragraph
              text="We have satisfied
            customers"
              color="white"
              size="16px"
              className={"cust"}
            />
          </div>
          <div className="rec2">
            <Heading title={`6420`} className="" color={"white"} />
            <Paragraph
              text="Project has been
              compeleted"
              color="white"
              size="16px"
              className={"cust"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videosection;
