import React from 'react';
import { NavLink } from 'react-router-dom';

const Card= (props) =>{

    return (

        <>
            
                

           
            

                

                    <div className="col-md-6 col-10 mx-auto">
                    
                
                   
                <div classname="card" >
            <img src={props.imgsrc} classname="card-img-top" alt="_img"/>
            <div classname="card-body">
             <h5 classname="card-title">{props.title}</h5>
                <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <NavLink to="" classname="btn btn-primary">Go somewhere</NavLink>
            </div>
            </div>

                  

                        
                    </div>
                 
                   

                

                       

                            

                        
        
      
        </>
    );
}

export default Card;