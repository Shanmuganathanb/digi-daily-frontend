import React, { useEffect } from 'react'

const TermsConditionsScreen = ({ history, match }) => {
  const pageNumber = match.params.id || 1

    return (
        <div className="d-flex flex-column w-100 mt-4">
            
            <h3 className='text-center'>Terms and conditions</h3>
            <ul style={{ padding: '5px 20px', marginTop: '20px', fontSize: '18px', fontFamily: 'sans-serif', listStyle: 'none' }}>
                <li style={{ fontWeight: 500, marginTop: '5px'}} >
                    User Agreement
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> All Customers of Digital Daily are subject to the terms and conditions contained in the User Agreement. The User Agreement is a legal contract between Digital Daily and the User that contains the rights, duties and obligations of Digital Daily and the User.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Acceptable Use Policy
                    <ul style={{ padding: '5px 20px' }}>
                        <li style={{ marginTop: '5px', fontSize: '16px', fontWeight: 400 }}>
                        Digital Daily Usage Policy is designed to protect Digital Daily, its Users and others from illegal, malicious, damaging and inappropriate behavior by Users of Digital Daily services. All users of Digital Daily services are subject to the Usage Policy. The Usage Policy lists activities that are prohibited on Digital Daily services, such as hacking and spamming.
                        </li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Domain Registration Agreement
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> Customers of Digital Daily wishing to register, transfer or renew a domain name must agree to the Domain Registration Agreement.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Anti-Spam Policy
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> In our ongoing commitment to providing superior service for our customers, Digital Daily has introduced a new, more vigilant anti-spam policy. We have implemented the following policy as a part of our commitment to reducing spam related activity.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Privacy Notice
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> Digital Daily Privacy Notice covers treatment of information that Digital Daily may collect from users of its products and services and from visitors to the Digital Daily site.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Domain Name Dispute Policy
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> The Domain Name Dispute Policy covers Digital Daily involvement in disputes relating specifically to domain name registrations.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Data Request Policy
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> The Data Request Policy covers Digital Daily handling of formal legal requests for the release of account information.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                Copyright Infringement Policy
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> Digital Daily Copyright Infringement Policy provides information for parties wishing to notify us of claimed intellectual property infringements present on sites hosted on our servers.</li>
                    </ul>
                </li>
                <li style={{ fontWeight: 500, marginTop: '15px'}} >
                User Generated Content Terms
                    <ul style={{ padding: '5px 20px' }}>
                    <li style={{marginTop: '5px', fontSize:'16px', fontWeight: 400}}> Digital Daily User Generated Content Terms describes the terms and conditions under which Digital Daily may use content created and publicly posted by users to social media.</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default TermsConditionsScreen
