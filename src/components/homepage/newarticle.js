import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import line from "../../assets/images/line.png";
import contactnew from "../../assets/images/contactnew.png";
import PrimaryButton from "../../utils/primarybutton";
const Newarticle = () => {
  return (
    <div className="newarticle-section page-container">
      <div className="article-text">
        <div className="line-head">
          <div className="line-first">
            <img src={line} alt="hwlll" className="" />
          </div>
          <div className="line-text">
            <Paragraph text="Whats Happening" color="#7100FF" size="18px" />
          </div>
        </div>

        <Heading
          title={`News & Articles`}
          className="services-heading5"
          color={"black"}
        />
      </div>
      <div className="article-cards">
        <div className="block-new-1">
          <div className="blocks-text-new">
            <div className="new-card-heading">
              <div className="new-card-heading-pic">
                <img
                  src={contactnew}
                  alt="hwlll"
                  className="new-card-heading-pic-image"
                />
              </div>
              <div className="new-card-heading-admin-text">
                <Paragraph text="Admin/" color="#7100FF" size="18px" />
              </div>
              <div>
                <Paragraph text="1 Comment" color="#7100FF" size="18px" />
              </div>
            </div>
            <div className="block-new-details">
              <Heading
                title={`The different types of
data backups`}
                size="24px"
                className={"block-new-head"}
              />
            </div>
            <div className="new-button">
              <PrimaryButton btnText="Read more" />
            </div>
          </div>
        </div>
        <div className="block-new-2">
          <div className="blocks-text-new">
            <div className="new-card-heading">
              <div className="new-card-heading-pic">
                <img
                  src={contactnew}
                  alt="hwlll"
                  className="new-card-heading-pic-image"
                />
              </div>
              <div className="new-card-heading-admin-text">
                <Paragraph text="Admin/" color="#7100FF" size="18px" />
              </div>
              <div>
                <Paragraph text="1 Comment" color="#7100FF" size="18px" />
              </div>
            </div>
            <div className="block-new-details">
              <Heading
                title={`A quick Solutions for 
problems`}
                size="24px"
                className={"block-new-head"}
              />
            </div>
            <div className="new-button">
              <PrimaryButton btnText="Read more" />
            </div>
          </div>
        </div>
        <div className="block-new-3">
          <div className="blocks-text-new">
            <div className="new-card-heading">
              <div className="new-card-heading-pic">
                <img
                  src={contactnew}
                  alt="hwlll"
                  className="new-card-heading-pic-image"
                />
              </div>
              <div className="new-card-heading-admin-text">
                <Paragraph text="Admin/" color="#7100FF" size="18px" />
              </div>
              <div>
                <Paragraph text="1 Comment" color="#7100FF" size="18px" />
              </div>
            </div>
            <div className="block-new-details">
              <Heading
                title={`What is staff
Augmentation`}
                size="24px"
                className={"block-new-head2"}
              />
            </div>
            <div className="new-button">
              <PrimaryButton btnText="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarticle;
