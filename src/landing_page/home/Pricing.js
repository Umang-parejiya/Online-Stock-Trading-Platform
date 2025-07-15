import React from 'react';


function Pricing() {
    return ( 
       <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'> 
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p  className='mb-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className=''style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <img src='media\Pricing.png'></img>
                </div>
            </div>
       </div>
     );
}

export default Pricing;