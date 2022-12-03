import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import './App.css'

function Navi() {
  return (
    <Nav className='Nav' defaultActiveKey="/home" as="ul">
      <Nav.Item >
      <Button className='Link1' variant='success' href="#">Home</Button>
      </Nav.Item>
    </Nav>
  );
}

export default Navi;