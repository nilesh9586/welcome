import React, { useState } from  'react';
import Sertresult from './Sertresult'


const  Search= () =>{

    const [img , Setimg]= useState("");

    const InputEvent =(event)=>{

        const data = event.target.value;
        console.log(data);
        Setimg(data);

    };
    

return(

            <>
                    <div className="searchbar" >

                    <input type="text" 
                    
                    value={img}
                    onChange={InputEvent}
                    
                    placeholder="search Anything "/>


                    </div>
              {img===""? null:   <Sertresult   name={img}/>
}    
            </>

);

}
export default Search;