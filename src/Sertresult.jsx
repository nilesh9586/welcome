import React from 'react';


const Sertresult = (props) =>{

    const img=`https://source.unsplash.com/600x300/?${props.name}`;

return (

<>

    <div className="searchimg">

        <img  src={img} alt="search"/>
        </div>



</>


);

}

export default Sertresult;


