import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1 style={{ marginTop: '50px', marginLeft: '15px'}}>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} style={{margin: '20px 0px'}}>
        <Form.Group controlId='email'>
          <i class="fas fa-envelope" style={{margin: '0px 15px'}}></i>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className='rounded'
            type='email'
            placeholder='elon@gmail.com'
            style={{fontSize: '18px'}}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password' style={{margin: '30px 0px'}}>
        <i className='fas fa-key' style={{margin: '0px 15px'}}></i>
          <Form.Label>Password</Form.Label>
          <Form.Control
            className='rounded'
            type='password'
            placeholder='******'
            style={{fontSize: '18px'}}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button style={{margin: '20px 15px'}} className='rounded' type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3' > 
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
