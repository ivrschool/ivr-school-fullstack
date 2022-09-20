import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';



class Analysis extends Component {

     constructor(){
          super();
          this.state={
               data:[
                    {Techonology:'PHP',Projects:100},
                    {Techonology:'MySqli',Projects:90},
                    {Techonology:'Laravel',Projects:95},
                    {Techonology:'React',Projects:85},
                    {Techonology:'Opencart',Projects:80},
                    {Techonology:'Vue Js',Projects:70},
                    {Techonology:'Django',Projects:60},
                    {Techonology:'JavaScript',Projects:100}                   
               ]
          }
     }

    render() {
         var blue = "#051b35"
          return (
            <Fragment>
                  <Container className="text-center">
                      <h1 className="serviceMainTitle">Technology Used</h1>
                        <div className="bottom"></div>
                    <Row>  
                        {/* <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}> */}
                        <Col lg={6} md={12} sm={12}>  
                          <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>

                                <XAxis dataKey="Techonology" /> 
                                <Tooltip />
                                <Bar dataKey="Projects" fill={blue}>

                                </Bar>


                                </BarChart>
                            </ResponsiveContainer>

                        </Col>
 

                        <Col lg={6} md={12} sm={12}>
                            
                              <p className="text-justify serviceDescription">
                                  AI Software Engineer at Valuence Technologies.<br></br><br></br>
                                  Experienced Team Leader with a demonstrated history of working in management and analyst.
                                  AI tools and Trading are my zone. Bachelor of Technology from Indian Institute of Technology, Guwahati.
                                  Too much sleep and day dreaming are two of my finest qualities.
                              AI Software Engineer at Valuence Technologies.<br></br><br></br>
                                  Experienced Team Leader with a demonstrated history of working in management and analyst.
                                  AI tools and Trading are my zone. Bachelor of Technology from Indian Institute of Technology, Guwahati.
                                  Too much sleep and day dreaming are two of my finest qualities.
                              
                                  AI Software Engineer at Valuence Technologies.<br></br><br></br>
                                  Experienced Team Leader with a demonstrated history of working in management and analyst.
                                  AI tools and Trading are my zone. Bachelor of Technology from Indian Institute of Technology, Guwahati.
                                  Too much sleep and day dreaming are two of my finest qualities.
                              
                                  AI Software Engineer at Valuence Technologies.<br></br><br></br>
                                  Experienced Team Leader with a demonstrated history of working in management and analyst.
                                  AI tools and Trading are my zone. Bachelor of Technology from Indian Institute of Technology, Guwahati.
                                  Too much sleep and day dreaming are two of my finest qualities.
                              
                              </p>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
          )
     }
}

export default Analysis