import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  // const productTopRated = useSelector((state) => state.productTopRated)
  // const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  // return loading ? (
  //   <Loader />
  // ) : error ? (
  return (
    <Carousel pause='hover' className='bg-dark carousel rounded'>
      <Carousel.Item>
        <Image className='d-none d-sm-block' style={{ width: "100%", maxHeight: '300px' }} src={`/images/01.jpg`} alt={'Slider Images'} fluid />
        <Image className='d-block d-sm-none' style={{ width: "100%", maxHeight:'300px' }} src={`/images/011.jpg`} alt={'Slider Images'} fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-none d-sm-block' style={{ width: "100%", maxHeight: '300px' }} src={`/images/02.jpg`} alt={'Slider Images'} fluid />
        <Image className='d-block d-sm-none' style={{ width: "100%", maxHeight:'300px' }} src={`/images/022.jpg`} alt={'Slider Images'} fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='d-none d-sm-block' style={{ width: "100%", maxHeight: '300px' }} src={`/images/03.jpg`} alt={'Slider Images'} fluid />
        <Image className='d-block d-sm-none' style={{ width: "100%", maxHeight:'300px' }} src={`/images/033.jpg`} alt={'Slider Images'} fluid/>
      </Carousel.Item>
          {/* {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Image style={{ width: "100%", maxHeight:'300px' }} src={product.image} alt={product.name} fluid/> */}
              {/* <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid/> */}
                {/* <Carousel.Caption className='carousel-caption'>
                  <h2>
                    {product.name} (₹{product.price})
                  </h2>
                </Carousel.Caption> */}
              {/* </Link> */}
            {/* </Carousel.Item>
          ))} */}
        </Carousel>
  )
}

export default ProductCarousel
