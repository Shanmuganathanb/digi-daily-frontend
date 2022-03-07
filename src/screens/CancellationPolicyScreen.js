import React, { useEffect } from 'react'

const CancellationPolicyScreen = ({ history, match }) => {
  const pageNumber = match.params.id || 1

    return (
        <div className="d-flex flex-column w-100 mt-4">
            <h3 className="text-center">Cancellation Policy </h3>
            {/* <ul style={{ padding: '5px 20px', marginTop: '20px', fontSize: '18px', fontFamily: 'sans-serif', listStyle: 'none' }}>
                <li style={{ fontWeight: 500, marginTop: '5px'}} >
                    User Agreement
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> All Customers of Digital Daily are subject to the terms and conditions contained in the User Agreement. The User Agreement is a legal contract between Digital Daily and the User that contains the rights, duties and obligations of Digital Daily and the User.</li>
                    </ul>
                </li> */}
            <ul style={{ padding: '5px 20px', marginTop: '10px', fontSize: '18px', fontFamily: 'sans-serif', listStyle: 'none' }}>
                <li style={{ fontWeight: 500, marginTop: '5px' }} >
                    Orders Cancellation:
                    <ul style={{ padding: '5px 20px' }}>
                        <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> Orders once placed cannot be cancelled.</li>
                    </ul>
                 </li>
            </ul>
            <ul style={{ padding: '5px 20px', marginTop: '10px', fontSize: '18px', fontFamily: 'sans-serif', listStyle: 'none' }}>
                <li style={{ fontWeight: 500, marginTop: '5px' }} >
                Damages:
                    <ul style={{ padding: '5px 20px', fontSize: '16px', fontWeight: 400 }}>
                    <li style={{ marginTop: '5px' }}>Under very rare circumstances, the bottles may broken during transit.</li>
                    <li style={{ marginTop: '10px' }}> We’ll provide reshipping of damaged products only if you have submitted the unboxing video.</li>
                    <li style={{ marginTop: '10px' }}> Kindly make sure you are aware of the product details before you place an order. Once the product is received by you in good condition, return or exchange because of your personal liking towards the product or non-suitability of the product on yourself will not be entertained.</li>     
                    </ul>
                 </li>
            </ul>
            <div style={{ padding: '5px 20px', marginTop: '15px', fontSize: '19px' }}>If you have any further queries, please do not hesitate to contact us through emails.</div>
        </div>
    )
}

export default CancellationPolicyScreen
