import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_REQUEST } from '../constants/productConstants'
import axios from 'axios'
import Swal from 'sweetalert2'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  if (localStorage.getItem('welcome_popup') != 'true') {
    Swal.fire({
      title: 'Welcome to Digital Daily',
      text: `We are bringing up different CATEGORIES for you. Thanks for your belief in us. We are growing with YOU.`,
      icon: 'success',
      footer: "<strong>For any queries, Mail to - <a href='mailto:digitaldailyindia@gmail.com'>digitaldailyindia@gmail.com</a> !!!</strong>",
      width: 600,
      padding: '1em',
      color: '#FFFFFF',
      background: 'rgb(15 119 201) url(/images/trees.png)',
      backdrop: `
        rgba(0,0,0,0.4)\
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
    localStorage.setItem('welcome_popup', 'true')
  }

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  dispatch({ type: PRODUCT_CREATE_REVIEW_REQUEST })

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  let [categories, setCategories] = useState([]);
  const [radioValue, setRadioValue] = useState('All');

  useEffect(() => {
    let radValue = '';
    if (radioValue !== 'All') {
      radValue = radioValue;
    } 
    dispatch(listProducts(keyword, pageNumber, radValue)) 
  }, [dispatch, keyword, pageNumber, radioValue])

  useEffect(() => {
    (async () => {
      const categoryResponse = await axios.get('http://localhost:5000/api/products/category-list');
      setCategories(['All', ...categoryResponse.data]);
    })();
  }, []);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light my-2 text-info rounded'>
          ← Go Back
        </Link>
      )}
      <h1 style={{ marginTop: '15px', textAlign: 'center'}}>Categories</h1>
      <Form className='d-flex my-3 align-items-center justify-content-center' style={{ fontSize: '20px' }}>
        <ToggleButtonGroup className='flex-wrap' type="radio" name="radio" defaultValue={'All'}>
          {categories.map((radio, idx) => (
              <ToggleButton
                key={idx}
              id={`radio-${idx}`}
              className='rounded font-weight-bold'
                variant={idx % 2 ? 'outline-success' : 'outline-info'}
                value={radio}
                checked={radioValue === radio}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio}
              </ToggleButton>
            )
          )}
        </ToggleButtonGroup>
      </Form>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} xs={12} sm={6} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
