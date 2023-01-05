import React from "react";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import line from "../../assets/images/line.png";
const Testimonal = () => {
  return (
    <div className="page-container testimonal-section">
      <div className="testimonal-and-card">
        <div className="testimonal-text-block">
          <div className="line-head">
            <div className="line-first">
              <img src={line} alt="hwlll" className="" />
            </div>
            <div className="">
              <Paragraph
                text="Clients Testimonals"
                className={"testimonial-text"}
              />
            </div>
          </div>
          <Heading
            title={`What They’re Talking?`}
            className={"testimonial-heading"}
          />
        </div>
        <div className="testimonal-card">
          <div className="card-alesha">
            <div className="aleesha-pic">
              <Heading title={`ALEESHA SMITH`} className={"aleesha-head"} />

              <Paragraph
                text="SENIOR DESIGNER"
                className={"aleesha-text-head"}
              />
            </div>
            <div>
              <Paragraph
                text="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged."
                className={"testimonial-card-text"}
              />
            </div>
          </div>

          <div className="card-alesha">
            <div className="mike-pic">
              <Heading title={`MIKE HARDSON`} className={"aleesha-head"} />

              <Paragraph
                text="SENIOR DESIGNER"
                className={"aleesha-text-head"}
              />
            </div>
            <div>
              <Paragraph
                text="Lorem Ipsum has been the industry's standard 
                dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged."
                className={"testimonial-card-text"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
