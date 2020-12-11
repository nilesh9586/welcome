import React, { useState } from 'react';

const Contact=()=>{

    const [data,setData]=useState({

        fullname:"",
        phone:'',
        email:'',
        msg:'',

    });

    const InputEvent =(event)=>{
        const {name ,value}=event.target;

        setData((preVal)=>{

            return{
                ...preVal,
                [name]:value,

            };

        });
    };

const formSumbit=(e) =>{
    e.preventDefault();

    

    alert(
        `My name is ${data.fullname}. My  mobail number is ${data.phone}. Email is ${data.email}. here is what I want to say ${data.msg}
        `);
};





    return (

        <>
            <div className="my-5">

            <h1 className="text-center">Contact Us</h1>

            </div>
                <div className="container contact_div" >
                    <div className="row" >

                        <div className="col-md-6 col-10 mx-auto" >

                                                
                        <form onSubmit={formSumbit}>
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input 
                                  type="text"
                                     class="form-control"
                                      id="exampleFormControlInput1"
                                      name="fullname"
                                      value={data.fullname}
                                      onChange={InputEvent} 
                                      placeholder="Enter your name"/>
                             </div>
                             <div class="form-group">
                                    <label for="exampleFormControlInput1">Phone Number</label>
                                    <input 
                                    type="number"
                                     class="form-control"
                                      id="exampleFormControlInput1"
                                      name="phone"
                                      value={data.phone}
                                      onChange={InputEvent} 
                                      placeholder="Enter your mobail number"/>
                             </div>
                             
                            
                             
                             <div class="form-group">
                                    <label for="exampleFormControlInput1  ">Email address</label>
                                    <input 
                                    type="email"
                                     class="form-control"
                                      id="exampleFormControlInput1"
                                       name="email"
                                      value={data.email}
                                      onChange={InputEvent} 
                                      placeholder="Enter your mobail number"/>
                             </div>
                        
                        
                                 <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Massage</label>
                                    <textarea 
                                    class="form-control" 
                                    id="exampleFormControlTextarea1"
                                     rows="3"
                                     name="msg"
                                      value={data.msg}
                                      onChange={InputEvent} 
                                     >
                                     

                                     </textarea>
                                 </div>

                                 <div className="col-12 my-2">
                                 <button class="btn btn-outline-primary" type="submit">Submit form</button>

                                 </div>
                        </form>



                       


                        </div>

                    </div>
                    
                </div>

        </>
    );
}

export default Contact;