import React, { useEffect } from 'react'

const ShippingPolicyScreen = ({ history, match }) => {

    return (
        <div className="text-justify d-flex flex-column align-items-center w-100 mt-4">
            <h3>Shipping Policy</h3>
            <ul style={{padding: '5px 20px', marginTop: '20px', fontSize: '18px',fontFamily: 'sans-serif'}}>
                <li style={{marginTop: '5px'}}> All our orders would be dispatched within 2-3 working days of placement. We also provide one day delivery if you want on urgent basis.</li>
                <li style={{marginTop: '15px'}}> As soon as the shipment is dispatched, you would receive a mail with the tracking number and other details for you to track your order.Kindly track your order with the number and delivery partner name provided in the mail if you wish to. Tracking details would be updated roughly within 24 hours from dispatch.</li>
                <li style={{marginTop: '15px'}}> We are not liable for any delays in delivery by the courier company but will definitely help you track down your package through our partnering courier company.</li>
                <li style={{marginTop: '15px'}}> For International shipping we deliver the products in 15-20 working days.</li>
            </ul>
        </div>
    )
}

export default ShippingPolicyScreen
