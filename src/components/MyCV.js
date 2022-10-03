import 'animate.css'
import { Col, Row} from "react-bootstrap";
import cvDown from '../assets/img/resume.png';

export const MyCV = () => {
  
  return (
      <Col lg={12}>
        <div className="resume-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>For know about me more <br></br> Check out my resume</h3>
            </Col>
            <Col md={6} xl={7}>                
                  <button className='buttonCV view'> view</button>
                  <button className='buttonCV down'><img src={cvDown} alt="" style={{width:"30px",height:"30px"}}/></button>                             
            </Col>
          </Row>
        </div>
      </Col>
  )
}