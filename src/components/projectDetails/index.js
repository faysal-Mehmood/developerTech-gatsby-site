import React from "react";
import ProjectCard from "../../utils/ProjectCard";
import LaptopImage from "../../assets/images/Laptop.png";
import Twitter from "../../assets/icons/Twitter.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import Heading from "../../utils/Heading.js";
import Paragraph from "../../utils/Paragraph.js";
import Tick from "../../assets/images/Tick.svg";
import Privious from "../../assets/images/privious.svg";
import Next from "../../assets/images/next.svg";
import Hyphen from "../../assets/images/Hyphen.svg";
import BoyImage from "../../assets/images/boyImage.svg";
import WristImage from "../../assets/images/wristWatch.svg";
import LaptopCard from "../../assets/images/laptopCard.svg";
import "./style.scss";
const Index = () => {
    return (
        <>
        <div className="webDevelopment page-container">
            <h1>WEB DEVELOPMENT</h1>
        </div>
       
        <div className="prjc-Detail-Sec">
            <div className="lptp-Img-Sect">
                <div className="lptp-Img">
                <img src={LaptopImage} alt="This is the image of Laptop"/>
                </div>
                <div className="client-Dtail-sect">
                    <div className="clients">
                        <h3>Clients</h3>
                        <p>Mike Hardson</p>
                    </div>
                    <div className="clients">
                        <h3>Category</h3>
                        <p>IT,Technology</p>
                    </div>
                    <div className="clients">
                        <h3>Date</h3>
                        <p>03/16/2022</p>
                    </div>
                    <div className="value">
                        <h3>Value</h3>
                        <p>6900 USD</p>
                    </div>
                    <div className="icons">
                        <a href="http://Twitter.com" target="_blank"><img src={Twitter} alt="This the twitter Icon"/></a>
                        <a href="http://Facebook.com" target="_blank"><img src={Facebook} alt="This the facebook Icon"/></a>
                        <a href="http://Instagram.com" target="_blank"><img src={Instagram} alt="This the instagram Icon"/></a>
                    </div>
                </div> 
            </div>
            <div className="prjc-Detail-text-Sec">
                <Heading title={"App for Web Development"} className="App-Heading"/>
                <Paragraph text={"Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} className="App-para"/>
                <Heading title={"The Challenge of Project"} className="App-chlng"/>
                <Paragraph text={"Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."} className="App-para"/> 
                <div className="about-cmpany">
                    <div className="about-cmpany-dtail">
                        <img src={Tick} alt="This is the image of Tick"/>
                        <Paragraph text={"Bringing new IT solutions to the market"}/>
                    </div>
                    <div className="about-cmpany-dtail">
                        <img src={Tick} alt="This is the image of Tick"/>
                        <Paragraph text={"To be included the list of the best 100 IT companies"}/>
                    </div>
                    <div className="about-cmpany-dtail">
                        <img src={Tick} alt="This is the image of Tick"/>
                        <Paragraph text={"Our company have 300 IT senior professionals."}/>
                    </div>
                    
                </div>
            </div>
            <div className="previous-next-sect">
                <a href="">
                    <img src={Privious} alt="This the previous arrow"/>
                    <Paragraph text={"PRIVIOUS"} className="link-text"/>
                </a>
                <a href="">
                    <img src={Next} alt="This the next arrow"/>
                    <Paragraph text={"NEXT"} className="link-text"/>
                </a>
            </div>
            <div className="similar-proj-sec">
                <div className="similar-proj-dtail">
                <div className="cmplte-proj">
                    <img src={Hyphen} alt="This the imege of Hyphen"/>
                    <p className="cmplte-proj-txt">Our Complete Projects</p>
                </div>
                <Heading title={"Checkout Our Similar Projects"}/>
                </div>
            </div>
            <div className="projectCards">
                <ProjectCard projectCardImage={BoyImage} projectCardTitle="Platform Intigration" projectCardText={"Design/Ideas"} projectCardBorder={true} />
                <ProjectCard projectCardImage={WristImage} projectCardTitle="Tech Solutions" projectCardText={"Design/Ideas"} projectCardBorder={true} />
                <ProjectCard projectCardImage={LaptopCard} projectCardTitle="Smart Vision" projectCardText={"Design/Ideas"} projectCardBorder={true} />
            </div>
        </div>
        </>
    )
}
export default Index;