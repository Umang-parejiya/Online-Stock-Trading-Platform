import React from 'react';


function Team() {
    return ( 
        <div className='container'>
        <div className='row  mt-5 p-3 border-top'>
            <h1 className='text-center'>People</h1>
        
         <div className="row text-muted"
          style={{lineHeight:"1.5",fontSize:"1.2em"}}>
            <div className="col-6 p-3 text-center ">
               <img src='media/nithinKamath.jpg' style={{borderRadius:"100%" , width:"50%"}}></img>
               <h4 className='mt-4'>Nithin Kamath</h4>
               <h5>Founder, CEO</h5>
            </div>
            <div className="col-6 p-3 ">
               <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                </p> 
                <p>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                </p>
                <p>
                Playing basketball is his zen.
                </p>
                Connect on <a href='' style={{textDecoration:"none"}}>Homepage / TradingQnA / Twitter</a>
                </div>
            </div>
        </div>
        </div>
     );
}

export default Team;