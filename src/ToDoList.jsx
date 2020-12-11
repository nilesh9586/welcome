import React, { useState } from 'react';
import './todolist.css';
import  ListDoTo from './ListDoTo';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const ToDoList= () =>{

    const [name , setName]= useState("");
    const [Items, setItems]= useState([]);


    const itemEvent=(event)=>{

        setName(event.target.value);

    }
const listItems=()=>{

    setItems((olditems)=>{

        return [...olditems, name];

    }
    );
    setName("");
};

const deleteItems =(id)=>{

    console.log('deleted');
    setItems((olditems)=>{


            return olditems.filter((errEle,index)=>{

                return index !==id;

            })
    });
}


    return (

        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type="text" placeholder="Add a item" 
                     onChange={itemEvent}
                         value={name}
                     />

                    <Button className="newBtn" onClick={listItems}> 
                    <AddIcon/>
                    </Button>

                    <ol>
                       { /*<li>{ name}</li> */}

                {
                       Items.map((itemval ,index)=>
                       {
                        return  <ListDoTo

                           key={index}   text={itemval}

                           id={index}
                           onSelect={deleteItems}
                          />;

                       })
                }
                    </ol>
                </div>

            </div>
      
        </>
    );
}

export default ToDoList;