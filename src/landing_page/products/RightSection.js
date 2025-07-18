import React from 'react';
function RigthSection({imageURL,productName,productDescription,learnMore}) {
    return ( 
         <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 p-5 mt-5'>
                
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className=''>
                <a href={learnMore} style={{textDecorationLine:"none"}}>Learn more  →</a>
                </div>
            </div> 
            <div className='col-6'>
                <img src={imageURL}/>
            </div>

        </div>   
       </div>
     );
}

export default RigthSection;