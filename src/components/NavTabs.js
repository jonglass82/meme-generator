import React from 'react'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import MemeGenerator from './MemeGenerator'
import Header from './Header'
import Gallery from './Gallery'



function NavTab() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Gallery</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Edit</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Header />
                        <MemeGenerator />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Gallery />
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
         </Tab.Container>
    )
}

export default NavTab