import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import { savePaymentMethod } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const [paymentMethod, setPaymentMethod] = useState('RazorPay')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    // history.push('/payment')
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 style={{ marginTop: '50px', marginLeft: '15px'}}>Shipping</h1>
      <Form onSubmit={submitHandler} style={{margin: '20px 0px'}}>
        <Form.Group controlId='address'>
        <i className='fas fa-address-card' style={{ margin: '0px 15px' }}></i>
          <Form.Label>Address</Form.Label>
          <Form.Control
            className='rounded'
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
        <i class="fas fa-city" style={{ margin: '0px 15px' }}></i>
          <Form.Label>City</Form.Label>
          <Form.Control
            className='rounded'
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
        <i class="fas fa-map-pin" style={{ margin: '0px 15px' }}></i>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            className='rounded'
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
        <i class="fas fa-flag" style={{ margin: '0px 15px' }}></i>
          <Form.Label>Country</Form.Label>
          <Form.Control
            className='rounded'
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='rounded' style={{margin: '20px 15px'}}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
