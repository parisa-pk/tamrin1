import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Button1(){
  return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Information table</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">List of information</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    
  );

}

export default Button1;