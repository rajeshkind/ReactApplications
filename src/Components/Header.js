import React  from 'react';
import '../Styles/App.css';
import {SocialIcon} from 'react-social-icons';
import {Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
          <div className="header">
          <Row>
          <Col md={4} sm={6} xs={12}>
          <span>Sample Weather Application</span>
          </Col>
          <Col md={8} sm={6} xs={12}>
              <SocialIcon data-toggle="tooltip" data-placement="top" title="Pinterest"  network="pinterest" url="http://www.google.com" className="social-link" />
              <SocialIcon data-toggle="tooltip" data-placement="top" title="LinkedIn"  network="linkedin" url="http://www.google.com" className="social-link" />
              <SocialIcon data-toggle="tooltip" data-placement="top" title="Facebook"   network="facebook" url="http://www.google.com" className="social-link" />
              <SocialIcon data-toggle="tooltip" data-placement="top" title="Twitter"   network="twitter" url="http://www.google.com" className="social-link" />
              {/* <span url="http://www.google.com" style={{paddingRight:10, float:"right"}}>Login/Register</span> */}
          </Col>
          </Row>
          </div>
          )
}

export default Header;