import React from 'react';

function Hero() {
    return ( 
        <div className='container-fluid' id='supportHero'>
           
            <div className=' p-3' id="supportwapper">
               <h3 className='mt-4' style={{marginLeft:"16px"}}>Support Portal</h3>
               <a href='' style={{color:"white", marginTop:"30px"}}>Track tickets </a>
            </div>
            <div className='row p-3 ' id="supportwapper">
                <div className='col-6 p-3'>
               <h4 className='fs-4'>Search for an answer or browse help topics to create a ticket</h4>
               <input className='mt-4 mb-4' type='text-area' placeholder='Eg: how do i activate F&O,why is my order gatting rejected ?' style={{width:"450px",height:"70px", borderRadius:"15px",fontSize:'15px',border:"none"}}></input> 
               <br></br>
               <a href=''>Track account opening </a>
               <a href='' style={{marginLeft:"15px"}}> Track segment activation </a>
               <a href=''style={{marginLeft:"15px"}}>Intraday margins</a><br></br>
               <a href=''>Kite user manual</a>
               </div>
               <div className='col-6 p-3 mt-5'>
               <h3 className='mb-4'>Featured</h3>
               <ol>
                <li><a href=''>Surveillance measure on scrips - June 2025</a></li><br></br>
                <li><a href=''>Rights Entitlements listing in June 2025</a></li>

               </ol>
                

               </div>
            </div>
        </div>
     );
}

export default Hero;