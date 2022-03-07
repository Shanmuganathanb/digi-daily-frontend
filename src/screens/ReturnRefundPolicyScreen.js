import React, { useEffect } from 'react'

const ReturnRefundPolicyScreen = ({ history, match }) => {
    const pageNumber = match.params.id || 1;
    return (
        <div className="text-justify d-flex flex-column w-100 mt-4">
            <h3 className='text-center'>Refund and Returns Policy</h3>
            <ul style={{padding: '5px 20px', marginTop: '20px', fontSize: '18px',fontFamily: 'sans-serif'}}>
                <li style={{marginTop: '5px'}}> Our return and replacement policy lasts 3 days. Some products contains 1 year warranty. If there is any damage or defect in the product we do complete replavement provided with a proper unboxing video.</li>
                <li style={{marginTop: '15px'}}> To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging..</li>
                <li style={{ marginTop: '15px' }}> What is unboxing video ?</li>
                <ul>
                    <li> Parcel should be opened only after the start of the video.</li>
                    <li> If there is any damage in the product it should be mentioned in the video itself.</li>
                    <li> We have replacment policy if there is any damage or defects in the product with the unboxing video.</li>
                </ul>
            </ul>
            <h5>❌ Video with pause or cut will not be accepted</h5>
            <h5>❌ Two cut videos will not be accepted</h5>
            <h5>❌ Already opened parcel before the start of the video will not be accepted.</h5>
                
            <ul style={{ padding: '5px 20px', marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>
                We always trust our customers but we have a protocol, so we request you to do this 🙏🏻 ...
                Kindly co-operate ☺️ ...
            </ul>
        </div>
    )
}

export default ReturnRefundPolicyScreen
