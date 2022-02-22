import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else if (password.length < 8) { 
      setMessage('Passwords should be greater than 8 characters')
    }else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <div className='regModal'>
      <FormContainer>
      <h1 style={{ marginTop: '50px', marginLeft: '15px'}}>Sign Up</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} style={{margin: '20px 0px'}}>
          <Form.Group controlId='name'>
          <i className='fas fa-user' style={{ margin: '0px 15px' }}></i>
          <Form.Label>Name</Form.Label>
            <Form.Control
              className='rounded'
              type='name'
              placeholder='Elon'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
        </Form.Group>

          <Form.Group controlId='email'>
          <i class="fas fa-envelope" style={{margin: '0px 15px'}}></i>
          <Form.Label>Email Address</Form.Label>
            <Form.Control
              className='rounded'
              type='email'
              placeholder='elon@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
        </Form.Group>

          <Form.Group controlId='password'>
          <i className='fas fa-key' style={{margin: '0px 15px'}}></i>
          <Form.Label>Password Address</Form.Label>
            <Form.Control
              className='rounded'
              type='password'
              placeholder='******'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

          <Form.Group controlId='confirmPassword'>
          <i className='fas fa-key' style={{margin: '0px 15px'}}></i>
          <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              className='rounded'
              type='password'
              placeholder='******'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='rounded' style={{margin: '20px 15px'}}>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default RegisterScreen
