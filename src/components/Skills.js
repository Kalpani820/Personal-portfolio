import skill1 from "../assets/img/skills1.png";
import skill2 from "../assets/img/skills2.png";
import skill3 from "../assets/img/skills3.png";
import skill4 from "../assets/img/skills4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

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
                        <h2>Experience</h2>
                        <p>I’ve spent the past 3+ years working across different areas of software engineering; front-end development, fullstack development, to my current role developing products for mobile platforms.<br></br> Currently I am working as an Associate technical Lead at a company</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h3>Fast</h3>
                                <p className="par">Fast load times and lag free interaction, my highest priority.</p>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h3>Responsive</h3>
                                <p className="par">My layouts will work on any device, big or small.</p>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h3>Intuitive</h3>
                                <p className="par">Strong preference for easy to use, intuitive UX/UI.</p>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h3>Dynamic</h3>
                                <p className="par">Websites don't have to be static, I love making pages come to life.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}