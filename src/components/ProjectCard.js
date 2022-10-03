import { Col } from "react-bootstrap";
import "../App.css"

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style={{color:"#023047"}}>{title}</h4>
          <span style={{color:"#023047"}}>{description}</span><br></br>
          <button className="learnMore">Learn More</button>
        </div>
      </div>
    </Col>
  )
}