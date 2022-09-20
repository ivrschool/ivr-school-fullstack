import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopBanner extends Component {
    render() {
        return(
        <div>
            <Fragment>
                    <Container fluid={true} className="topFixedBanner p-0">

                        <div className="topBannerOverlay">
                            <Container className="topContent">
                                <Row>
                                    <Col className="text-center">
                                        <h1 className="topTitle">ivr school </h1>
                                        <h4 className="topSubTitle">learn Profesionally</h4>
                                        <Button variant="primary">Learn more.</Button>

                                    </Col>
                                </Row> 
                            </Container>

                        </div>
                </Container>
            </Fragment>
            </div>
        )
    }
}

export default TopBanner