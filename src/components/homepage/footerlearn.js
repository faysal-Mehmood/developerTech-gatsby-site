import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import PrimaryButton from "../../utils/primarybutton";
const Footerlearn = () => {
  return (
    <div className="footer-learn">
      <div className="footer-learn-1">
        <Paragraph
          text="We’re here to help to grow your business."
          color="white"
          size="18px"
        />

        <Heading
          title={`Looking for the Best IT Business Solutions?`}
          size="28px"
          color={"white"}
          className={"footer-learn-head"}
        />
      </div>

      <div className="footer-learn-2">
        <PrimaryButton btnText="Read more" />
      </div>
    </div>
  );
};

export default Footerlearn;
