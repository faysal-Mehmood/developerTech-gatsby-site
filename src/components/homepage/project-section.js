import React from "react";
import Slider from "react-slick";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import line from "../../assets/images/line.png";
import PrimaryButton from "../../utils/primarybutton";

const Projectsection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <div className=" page-container project-section">
        <div className="text-services project-section2">
          <div className="text-services-1">
            <div className="line-head">
              <div className="line-first">
                <img src={line} alt="hwlll" className="" />
              </div>
              <div className="line-text">
                <Paragraph text="Our Compelete projects" color="#7100FF" size="18px" />
              </div>
            </div>

            <Heading
              title={`Improve & Enhance Our 
            Tech Projects`}
              className="services-heading"
              color={"black"}
            />
          </div>
          <div className="text-services-2">
            <Paragraph
              text="There are various successful projects from IT strategy consulting to the end-to-end 
            development of scalable solutions made by our creative and experienced IT 
            professionals."
              color="black"
              size="16px"
            />
          </div>
        </div>
      </div>
      <div className="project-list-items">
        <Slider {...settings}>
          <div>
            <div className="card-1">
              <Heading title={`Virtual Reality`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-2">
              <Heading title={`Smart Marketing`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-3">
              <Heading
                title={`Platform Intigration`}
                size="24px"
                color={"white"}
                fontweight={700}
              />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-4">
              <Heading title={`Tech Solutions`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-1">
              <Heading title={`Virtual Reality`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-2">
              <Heading title={`Smart Marketing`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-3">
              <Heading
                title={`Platform Intigration`}
                size="24px"
                color={"white"}
                fontweight={700}
              />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
          <div>
            <div className="card-4">
              <Heading title={`Tech Solutions`} size="24px" color={"white"} fontweight={700} />
              <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
            </div>
          </div>
        </Slider>
      </div>
      {/* <div className="project-cards">
        <div className="card-1">
          <Heading title={`Virtual Reality`} size="24px" color={"white"} fontweight={700} />
          <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
        </div>
        <div className="card-2">
          <Heading title={`Smart Marketing`} size="24px" color={"white"} fontweight={700} />
          <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
        </div>
        <div className="card-3">
          <Heading title={`Platform Intigration`} size="24px" color={"white"} fontweight={700} />
          <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
        </div>
        <div className="card-4">
          <Heading title={`Tech Solutions`} size="24px" color={"white"} fontweight={700} />
          <Paragraph text="Design/Ideas" color="#7100FF" size="18px" fontweight={700} />
        </div>
      </div> */}
      <div className="project-button">
        <PrimaryButton btnText="Learn more" />
      </div>
    </>
  );
};

export default Projectsection;
