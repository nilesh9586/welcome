import React from 'react';
import web from '../src/images/d1.webp'
import Common from './Common';
const Home= () =>{

    return (

        <>
         <Common 
            name="Grow your business with " 
            imgsrc={web}
             vist="/service"
            btnname="Get started"/>
      
        </>
    );
}

export default Home;