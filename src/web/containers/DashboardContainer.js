import React from 'react';
import DashboardButton from "../components/buttons/DashboardButton";

import {Col, Container, Row} from 'reactstrap';
import {FaCubes, FaHamburger, FaHome} from 'react-icons/fa'

class DashboardContainer extends React.Component {
    render() {
        return (
            <div className="page-container">
                <div className="dashboard-overview-element" style={{height: '400px', border: 'solid 1px'}}>
                    Put content here.... weather, date, time...
                </div>
                <div className="dashboard-buttons-collection">
                    <Container>
                        <Row style={{padding: '5px 0px 5px 0px'}}>
                            <Col>
                                <DashboardButton text={"Home"} href={"/home"} icon={FaHome}/>
                            </Col>
                            <Col>
                                <DashboardButton text={"Food"} href={"/food"} icon={FaHamburger}/>
                            </Col>
                            <Col>
                                <DashboardButton text={"Stock"} href={"/stock"} icon={FaCubes}/>
                            </Col>
                            <Col>
                                <DashboardButton text={"Other"}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;


