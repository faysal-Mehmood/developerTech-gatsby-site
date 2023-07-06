import React from "react";
import "./style.scss";
import Heading from "../../utils/Heading";
import Paragraph from "../../utils/Paragraph";
import Ellipse from "../../assets/images/Group180.png";
import AboutLogo from "../../assets/images/Group181.svg";
import Hyphen from "../../assets/images/Hyphen.svg";
import RightArrow from "../../assets/images/Group376.svg";
import InfoTech from "../../assets/images/Group92.svg";
import Rectangle from "../../assets/images/Rectangle95.svg";
import Business from "../../assets/images/Group93.svg";
import Gaming from "../../assets/images/Group94.svg";
import MoreBusiness from "../../assets/images/Group184.svg";
import One from "../../assets/images/Group183.png";
import Two from "../../assets/images/Group182.png";
import Bank from "../../assets/images/Group186.svg";
const Services = () => {
    return (
        <>
        <div className="hero page-container">
        </div>
        <div className="serv-about page-container">
            <div className="abt-cmpani">
                <div className="abt-cmpni-main-img"><img src={Ellipse} alt="About us"/></div>
                <div className="abt-cmpni-dtail">
                    <img src={AboutLogo} alt="Here is the logo of about-sec"/>
                    <div className="contact-title">
                        <div className="contact-title-dtail">
                            <div className="contact-img">
                                <img src={Hyphen} alt="This the imege of Hyphen" />
                                <p className="contact-txt">About Your Company</p>
                            </div>
                            <Heading title={"Cloud Based Services for Mobile Apps"} className="cloud-heading"/>
                            <Paragraph text="Infetech is a provider of IT consulting and software development services. We have helped organizations." className="abt-text"/>
                        </div>
                    </div>
                    <div className="about-cmpany">
                        <div className="about-cmpany-dtail">
                            <img src={RightArrow} alt="This is the image of RightArrow"/>
                            <Paragraph text={"Bringing new IT solutions to the market"}/>
                        </div>
                        <div className="about-cmpany-dtail">
                            <img src={RightArrow} alt="This is the image of RightArrow"/>
                            <Paragraph text={"To be included the list of the best 100 IT companies"}/>
                        </div>
                        <div className="about-cmpany-dtail">
                            <img src={RightArrow} alt="This is the image of RightArrow"/>
                            <Paragraph text={"Our company have 300 IT senior professionals."}/>
                        </div>
                    </div>
                    <button><a href="#">Learn more</a></button>
                </div>
            </div>
        </div>
        <div className="abt-serv-cards page-container">
            <div className="abt-serv-cards-dtail">
                <img src={InfoTech} alt="Info Tech"/>
                <img src={Rectangle} alt="Rectangle-shadow" className="Rectangle"/>
                <div className="abt-serv-cards-dtail-txt">
                    <Heading title={"InformationTechnology"} className="abt-serv-cards-dtail-headng"/>
                    <Paragraph text={"We develop online games and entertainment programs based the newest advanced technologie"} className="abt-serv-para"/>
                </div>
            </div>
            <div className="abt-serv-cards-dtail">
                <img src={Business} alt="Info Tech"/>
                <img src={Rectangle} alt="Rectangle-shadow" className="Rectangle"/>
                <div className="abt-serv-cards-dtail-txt">
                    <Heading title={"InformationTechnology"} className="abt-serv-cards-dtail-headng"/>
                    <Paragraph text={"We develop online games and entertainment programs based the newest advanced technologie"} className="abt-serv-para"/>
                </div>
            </div>
            <div className="abt-serv-cards-dtail">
                <img src={Gaming} alt="Info Tech"/>
                <img src={Rectangle} alt="Rectangle-shadow" className="Rectangle"/>
                <div className="abt-serv-cards-dtail-txt">
                    <Heading title={"InformationTechnology"} className="abt-serv-cards-dtail-headng"/>
                    <Paragraph text={"We develop online games and entertainment programs based the newest advanced technologie"} className="abt-serv-para"/>
                </div>
            </div>
        </div>
        <div className="business-sec page-container">
            <div className="business-sec-dtail">
                <img src={MoreBusiness}/>
                <div className="more-business">
                    <div className="contact-title">
                        <div className="contact-title-dtail">
                            <div className="contact-img">
                                <img src={Hyphen} alt="This the imege of Hyphen" />
                                <p className="contact-txt">We Do More For Your Business</p>
                            </div>
                            <Heading title={"We Do More For Your Business"} className="cloud-heading"/>
                            <div className="text-editor">
                                <img src={One}/>
                                <Paragraph text={"Text editors allow developers to do their jobs fast and efficiently. Some popular text editors you should discover: Sublime Text, Notepad , Visual Code Studio."}/>
                            </div>
                            <div className="text-editor">
                                <img src={Two}/>
                                <Paragraph text={"Text editors allow developers to do their jobs fast and efficiently. Some popular text editors you should discover: Sublime Text, Notepad , Visual Code Studio."}/>
                            </div>
                            <button><a href="#">Learn more</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="trust page-container">
            <div className="trust-sub-sec">
                {/* sec1  */}
                <div className="contact-title">
                    <div className="contact-title-dtail">
                        <div className="contact-img">
                            <img src={Hyphen} alt="This the imege of Hyphen" />
                            <p className="contact-txt">We Do More For Your Business</p>
                        </div>
                        <Heading title={"Trusted IT Solution & Service Business Agency"} className="cloud-heading"/>
                    </div>
                    <div className="experience">
                        <img src={Bank} alt="Bank icon"/>
                        <h3>Experienced</h3>
                        <Paragraph text={"20 years of experience"}/>
                    </div>
                </div>
                <div className="experience-sec1 ">
                        <img src={Bank} alt="Bank icon"/>
                        <h3>Experienced</h3>
                        <Paragraph text={"20 years of experience"}/>
                </div>
                <div className="experience-sec2">
                        <img src={Bank} alt="Bank icon"/>
                        <h3>Experienced</h3>
                        <Paragraph text={"20 years of experience"}/>
                </div>
            </div>
        </div>
        </>
    );
};
export default Services;