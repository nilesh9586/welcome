import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListDoTo =(props)=>{

   
   
        
           return (
               <>

                <div className="todo_style">

                <DeleteIcon className="fa-times"  aria-hidden='true'

                    onClick={()=>{
                        props.onSelect(props.id);
                    }}
                />
           <li>{ props.text }</li>

           </div>
           </>
            
           );
};

export default ListDoTo;