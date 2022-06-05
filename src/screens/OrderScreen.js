import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Swal from 'sweetalert2'
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
  dispatchOrder,
} from '../actions/orderActions'
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
  ORDER_DISPATCH_RESET,
} from '../constants/orderConstants'
import { removeAllFromCart } from '../actions/cartActions'
import CommonUtils from '../utils/helper'

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const orderDispatch = useSelector((state) => state.orderDispatch)
  const { loading: loadingDispatch, success: successDispatch } = orderDispatch

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  console.log(userInfo);
  const [name, setName] = useState(userInfo.name || '')

	async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    const payload = { order }
		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
    // 'Content-Type': 'application/json',
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: payload,
    }

    const { data } = await axios.post(`${process.env.REACT_APP_NODE_ENV==='production' ? process.env.REACT_APP_BACKEND_HOST : 'http://localhost:5000'}/api/razorpay`, config);
		// const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
		// 	t.json()
		// )

		const options = {
			key: process.env.REACT_APP_NODE_ENV!='production' ? 'rzp_test_d2bbTNlWU3Y4GK' : process.env.REACT_APP_RAZORPAY_KEY_ID,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Digital Daily',
			description: 'Thanks for shopping with us',
			image: 'http://localhost:3000/images/Logo.png',
      handler: function (response) {
        Swal.fire({
          title: 'Payment ID & Order ID',
          text: `${response.razorpay_payment_id} &  ${response.razorpay_order_id}`,
          icon: 'success',
        })
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
        // alert(response.razorpay_signature)
        setTimeout(() => {
          dispatch(getOrderDetails(orderId))
          dispatch(removeAllFromCart())
        }, 3000)
			},
			prefill: {
				name: userInfo.name || '',
				email: userInfo.email || '',
				phone_number: userInfo.mobile || ''
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }

    if (!order || successPay || successDeliver || successDispatch) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch({ type: ORDER_DISPATCH_RESET })
      dispatch(getOrderDetails(orderId))
    } 
  }, [dispatch, orderId, successPay, successDeliver, successDispatch, order])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  const dispatchHandler = () => {
    dispatch(dispatchOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
        <>
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems: 'baseline', wordBreak: 'break-all'}}>
            <h1>Order id : </h1>
            <span style={{ textTransform: 'lowercase', fontSize: '20px', padding: '0.1rem 0', marginLeft: '5px', marginBottom: '0.4rem' }}> {order._id}</span>
            {/* <h5> {order._id}</h5> */}
          </div>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
                  <div style={{ marginTop: '20px' }}>
                <p>
                      <strong>Name: </strong>
                      <span className='text-dark font-bold' style={{ fontSize: '17px' }}>{order.user.name}</span>
                </p>
                <p>
                  <strong>Email: </strong>{' '}
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Address: </strong>
                  <span className='text-dark font-bold' style={{ fontSize: '17px' }}>
                    {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                    {order.shippingAddress.postalCode},{' '}
                    {order.shippingAddress.country}
                  </span>
                </p>
                {order.isDelivered ? (
                  <Message variant='success'>
                    Delivered on {CommonUtils.timeDisplay(order.deliveredAt)}
                  </Message>
                ) : (
                  order.isDispatched ?
                    <Message variant='info'>Dispatched. Soon it will be Delivered</Message> :
                    <Message variant='danger'>Not Dispatched Yet</Message>
                )}
                {/* {order.isDelivered ? (
                  <Message variant='success'>
                    Delivered on {CommonUtils.timeDisplay(order.deliveredAt)}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Delivered</Message>
                )} */}
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                    <strong>Method: </strong>
                    <span className='text-dark font-bold' style={{ fontSize: '17px' }}>
                      {order.paymentMethod}
                      </span>
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {CommonUtils.timeDisplay(order.paidAt)}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>₹{order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>₹{order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item style={{textAlign:'center', fontSize:'17px', cursor: 'pointer'}}>
                  <a
                    className="App-link bg-info p-2 rounded text-white"
                    onClick={displayRazorpay}
                    target="_blank"
                        rel="noopener noreferrer"
                        style={{textDecoration: 'none'}}
                  >
                    Complete Payment
                  </a>
                </ListGroup.Item>
              )}
                    
              {loadingDispatch && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDispatched && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={dispatchHandler}
                    >
                      Mark As Dispatched
                    </Button>
                  </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
