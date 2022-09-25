import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/face.png';
import { init } from 'ityped'
import { TypeAnimation } from 'react-type-animation';
class AboutMe extends Component {
    
    componentDidMount(){
         const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['AI Engineer', 'Web Developer'] })
        
    }
        
    render() {
        
          return (
               <Fragment>
                  <Container className="text-center">
                      <h1 className="serviceMainTitle">ABOUT ME</h1>                     
                      <div className="bottom"></div>                      
                      <Row>

                          <Col lg={6} md={6} sm={12}>     
                              <div className="aboutMeImage">     
                                  <img className="aboutImg" src={face} />
                              </div>
                          </Col>

                          <Col lg={6} md={6} sm={12}>
                                <div className="aboutMeBody">
                                    <h2 className="aboutMeDetails">HI There, I'm</h2>
                                    <h2 className="aboutMeTitle">Pankaj Chandravanshi</h2>
                             <h3 className="aboutMeDetails"> <TypeAnimation sequence={['AI Software Engineer', 1000 ]}/></h3>
                              </div>
                              
                          </Col>
                      </Row>
                  </Container>
              </Fragment>
              
          )
     }
}

export default AboutMe