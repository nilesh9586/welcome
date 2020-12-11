import React from 'react';
import web from '../src/images/home.jpeg'
import Common from './Common';

const About= () =>{

    return (

        <>
            
            <Common 
            name="Welcome to About page" 
            imgsrc={web} 
            vist="/con"
            btnname="Contact now"/>
      
        </>
    );
}

export default About;