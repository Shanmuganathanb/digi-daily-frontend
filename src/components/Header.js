import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart;

  const logoutHandler = () => {
    dispatch(logout())
  }

  console.log("env =+=> ", process.env)

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container fluid className='container-width'>
          <LinkContainer to='/'>
            <Navbar.Brand>Digital Daily</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' style={{ fontSize:'13px'}}>
            <div style={{marginTop: '20px'}}></div>
            <Route render={({ history }) => <SearchBox history={history} />}/>
            <Nav className='ml-auto'>
              <LinkContainer to='/' style={{marginRight:'10px', textAlign:'center'}}>
                <Nav.Link>
                   Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart' style={{marginRight:'15px', textAlign:'center'}}>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                  <span className='bg-white text-info rounded ml-2 px-2 py-1'>{cartItems.length}</span>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username' style={{textAlign:'center'}}>
                  <LinkContainer to='/profile' style={{textAlign:'center'}}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} style={{textAlign:'center'}}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login' style={{textAlign:'center'}}>
                  <Nav.Link style={{textAlign:'center'}}>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
