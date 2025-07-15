import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' alt=''></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in india</h1>
                    <p className='mb-5'>2+ million Zerodha clint contribute to over 15% of all retail order volumes in india daily by trading and invensting in :</p>
                   <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Future and Option</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                                <li>Stokes & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds & Govt.Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='media\pressLogos.png' style={{width:"93%"}}></img>
                </div>       
            </div>
        </div>
     );
}

export default Awards;