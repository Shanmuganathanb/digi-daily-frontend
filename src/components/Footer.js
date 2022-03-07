import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  return (
    <footer style={{width:'100%', paddingTop: '10px'}}>
      <Container style={{maxWidth: '1200px'}}>
        <Row className='py-3' style={{width: '100%', alignItems:'start'}}>
          <Col className='col-12 col-sm-5'>
          <div className='text-left h4 text-white py-3 px-2' style={{color: '#d5d3d3',fontStyle:'bold', textTransform:'uppercase'}}>Quick Links</div>
          <Nav className='mx-auto d-flex flex-column justify-content-center' style={{color: '#d5d3d3'}}>
            <LinkContainer to='/' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cart' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/profile' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                My Account
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Col>
          <Col className='col-12 col-sm-4'>
          <div className='text-left h4 text-white py-3 px-2' style={{fontStyle:'bold', textTransform:'uppercase'}}>Legal Links</div>
          <Nav className='mx-auto d-flex flex-column justify-content-center'>
            <LinkContainer to='/shipping-policy' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Shipping Policy
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/return-refund-policy' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Return and Refund Policy
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/cancellation-policy' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Cancellation Policy
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/terms-and-conditions' className='h5' style={{color:'#d5d3d3'}}>
              <Nav.Link>
                Terms and Conditions
              </Nav.Link>
            </LinkContainer>
            </Nav>
          </Col>
          <Col className='col-12 col-sm-3 pt-2'>
            <div className='text-left text-sm-center h4 text-white py-2 px-2' style={{fontStyle:'bold', textTransform:'uppercase'}}>Follow Us On</div>
            <Nav className='mx-auto d-flex flex-column flex-sm-row justify-content-center'>
            <Nav.Link style={{ color: 'white' }} href='http://www.instagram.com/digital_daily_india/'>
                <img src="/images/ig-instagram.png" style={{width: '40px', marginRight: '10px'}}/>
               digital_daily_india
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href='https://m.facebook.com/108324958415011/'>
              <img src="/images/facebook-app.png" style={{width: '40px', marginRight: '10px'}}/>
                Digital Daily
              </Nav.Link>
              <Nav.Link style={{ color: 'white' }} href='https://youtube.com/channel/UCXFXGBXk2yiqbGSIkp20UXw'>
                <img src="/images/youtube-app.png" style={{width: '40px', marginRight: '10px'}}/>
               Digital Daily
            </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row style={{borderTop: '1px solid #555555'}}>
          <Col className='text-center py-3 text-info h5'>Copyright &copy; Digital Daily 2022</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
