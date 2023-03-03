import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have experience in various skills and have built and solved a lot real-life problems in the following field of tech:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <CircularProgress value={80} size="150px" color="#a03583">
                                  <CircularProgressLabel>80%</CircularProgressLabel>
                                </CircularProgress>
                                <h5>Frontend Development/Design</h5>
                            </div>
                            <div className="item">
                               <CircularProgress value={90} size="150px" color="#a03583">
                                  <CircularProgressLabel>90%</CircularProgressLabel>
                                </CircularProgress>
                                <h5>Backend Engineering/Programming</h5>
                            </div>
                            <div className="item">
                                <CircularProgress value={85} size="150px" color="#a03583">
                                  <CircularProgressLabel>85%</CircularProgressLabel>
                                </CircularProgress>
                                <h5>Mobile Development</h5>
                            </div>
                            {/* <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
