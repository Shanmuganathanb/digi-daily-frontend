import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant} style={{ fontSize: '17px', fontWeight: 500 }} className='rounded'>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
