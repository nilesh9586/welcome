import React, { useState } from 'react';

const Form =()=> {


    const [data,setData]= useState({ 
        
    name:"",
    lastName:"",
    email:"",
    phone:"",

});

const inputEvent=(event)=>{

const  {name,value}=event.target;

        setData((preVal) =>{

            return {

                ...preVal,

                [name]:value,





            };

        });

};

const onSubmit=(e)=>{
    e.preventDefault();

}


       





    /*
    const [name , setName]= useState("");

    const [lastName, setLastName]=useState("");

    const [fullName , setFullName]= useState("");
    const [fullLname,setfullLname]=useState("");



    const inputEvent =(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
         
    }
    const inputEventTwo =(event)=>{
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    const onSubmit = (event) =>{

        event.preventDefault();

        setFullName(name);
        setfullLname(lastName)


    }
    */

return(

        <>
             <div className="my-5">
             

    <h1 className="text-center ">Hello</h1> <p className="text-center text-muted">Full Name : {data.name } {data.lastName}</p>
    
    <p className="text-center text-success">Email : {data.email}</p>
    <p className="text-center text-success">phone no : {data.phone}</p>

</div>
    <div className="container contact_div" >
        <div className="row" >

            <div className="col-md-6 col-10 mx-auto" >

                                    
            <form  onSubmit={onSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" placeholder="Enter your name"
                    
                    onChange={inputEvent}
                    value={data.name}
                    name="name"
               
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="text" class="form-control" placeholder="Enter your Last name"
                    
                    onChange={inputEvent}
                    value={data.lastName}
                    name="lastName"
               
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email </label>
                <input type="text" class="form-control" placeholder="Enter your Email"
                    
                    onChange={inputEvent}
                    value={data.email}
                    name="email"
               
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Phone No </label>
                <input type="number" class="form-control" placeholder="Enter your Email"
                    
                    onChange={inputEvent}
                    value={data.phone}
                    name="phone"
               
                />
              </div>
 
 
  

            <button class="btn btn-primary my-3" type="submit">Click me</button>

            </form>
            <form>

            <table border="2" width="50%" height="50%">
                <tr>
                <td align="center">
                
               
                
                    <th >Data</th>
                </td>
                </tr>
                <tr>
                <td> Name:   </td>
                <td>{data.name }</td>
                </tr>
                <tr>
                <td>Last Name:   </td>
                <td>{data.lastName}</td>
                </tr>
                <tr>
                <td>Email Name:</td>
                <td> {data.email}</td>
                </tr>
                <tr>
                <td>Phone no:</td>
                <td> {data.phone}</td>
                </tr>

                </table>

            </form>


           


            </div>

        </div>
        
    </div>
            
        </>


);

}


export default Form;