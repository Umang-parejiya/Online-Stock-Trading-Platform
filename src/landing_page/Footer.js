import React from 'react';


function Footer() {
    return ( 
        <footer className='border-top'style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container  mt-5' >
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/logo.svg" style={{width:"50%"}} alt="logo"></img>
                    <p> &copy; 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                <div className='col'>
                    <h5>Account</h5>
                    <p>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Open demat account</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Minor demat account</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>NRI demat account</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Commodity</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Dematerialisation</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Fund transfer</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>MTF</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Referral program</a><br></br>
                    </p>
                </div>
                <div className='col'>
                     <h5>Support</h5>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Contact us</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Support portal</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>How to file a complaint?</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Status of your complaints</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Bulletin</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Circular</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Z-Connect blog</a><br></br>
                            <a href=''style={{textDecoration:"none",color:"black"}}>Downloads</a><br></br>
                </div>
                <div className='col'>
                     <h5>Company</h5>
                        <a href=''style={{textDecoration:"none",color:"black"}}>About</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Philosophy</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Press & media</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Careers</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Zerodha Cares (CSR)</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Zerodha.tech</a><br></br>
                        <a href=''style={{textDecoration:"none",color:"black"}}>Open source</a><br></br>
                </div>
                  <div className='col'>
                     <h5>Quick links</h5>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Upcoming IPOs</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Brokerage charges</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Market holidays</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Economic calendar</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Calculators</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Markets</a><br></br>
                    <a href=''style={{textDecoration:"none",color:"black"}}>Sectors</a><br></br>
                </div>  
            </div>
        <div className='mt-5  text-muted'style={{fontSize:"14px"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <a href='' style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1. Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2. Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3. Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href='' style={{textDecoration:"none"}}>create a ticket here.</a></p>
        </div>
        </div>
        </footer>
     );
}

export default Footer;