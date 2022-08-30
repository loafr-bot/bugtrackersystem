import React, { Component } from 'react';
import './auth.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

// const signupCompo = () => {
//     return(
//         <>
//             <div className='container'>
//                 <form className='container-signup'>
//                     <h1 className='header'>Sign Up</h1>


//                     <div className='input'>
//                         <label>First Name<br/></label>
//                         <input type="text" placeholder="First" />
//                     </div>

//                     <div className='input'>
//                         <label>Last Name<br/></label>
//                         <input type="text" placeholder="Last" />
//                     </div>

//                     <div className='input'>
//                         <label>Employee Id<br/></label>
//                         <input type="text" placeholder="Employee Id" />
//                     </div>

//                     <div className='input'>
//                         <label>Email<br/></label>
//                         <input type="Email" placeholder="Email" />
//                     </div>

//                     <div className='input'>
//                         <label>Password<br/></label>
//                         <input type="password" placeholder="Password" />
//                     </div>

//                     <div className='btn' >Sign Up</div>
//                 </form>
//             </div>
//         </>
        
//     );
// }

class signupCompo extends Component{

    // need to create a constructor
    constructor(props){
        super(props)
        this.state={
            first: "",
            last: "",
            employeeId: "",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // handle change function to handle input values
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })

        console.log(e.target.value)
        console.log(this)
    }

    // validate given input

    validate = () =>{
        let emailErr = "";
        let formErr = "";

        if(!this.state.email.includes("@")){
            emailErr = "Invalid Email!"
            formErr = "Error: Please review form!";
        }

        if(emailErr){
            this.setState({emailErr});
            this.setState({formErr});
            return false;
        }

        return true;
    }

    // sends information
    send = async() => {
        await axios.post('/signup', this.state).then(response => {

        }).catch(error => {
            console.log(error);
        })
    }

    // handle submit function to handle submit the input values
    handleSubmit=(e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            this.send();
        }
    }



    render(){
        return(
            <div className='container'>
                <form className='container-signup'>
                     <h1 className='header'>Sign Up</h1>
            

                        <div className='input'>
                            <label>First Name<br/></label>
                            <input type="text" name='first' placeholder="First" value={this.state.first} onChange={this.handleChange} />
                        </div>
            
                        <div className='input'>
                            <label>Last Name<br/></label>
                            <input type="text" name='last' placeholder="Last" value={this.state.last} onChange={this.handleChange} />
                        </div>
            
                        <div className='input'>
                            <label>Employee Id<br/></label>
                            <input type="text" name='employeeId' placeholder="Employee Id" value={this.state.employeeId} onChange={this.handleChange} />
                        </div>
            
                        <div className='input'>
                            <label>Email<br/></label>
                            <input type="Email" name='email' placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </div>
            
                        <div className='input'>
                            <label>Password<br/></label>
                            <input type="password" name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </div>
            
                        <div className='btn' onClick={this.handleSubmit}>Sign Up</div>
                </form>
            </div>
        );
    }
}

export default signupCompo;