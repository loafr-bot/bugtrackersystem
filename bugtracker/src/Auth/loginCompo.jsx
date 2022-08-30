import axios from 'axios';
import React, { Component } from 'react';

// function loginCompo () {
//         return (
//             <>
//             <div className='container'>
//                 {/* <div className='container-login'> */}
//                     <form className='container-login'>
//                         <h1 className='header'>Log In</h1>     

//                             <div className='input'>
//                                 <label>Email<br/></label>
//                                 <input type="Email" placeholder="Email"/>
//                             </div>    
                            
//                             <div className='input'>
//                                 <label>Password<br/></label>
//                                 <input type="password" placeholder="Password"/>
//                             </div>
                            
//                             <div className='btn'>Login</div>
//                     </form>
                        
                    
//                 </div>
//             {/* </div>  */}
//             </>
//         );
    
// }

class loginCompo extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
        }
        
    }


    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    login = (e) =>{
        e.preventDefault();
        axios.post('/login', this.state).then(response =>{

        });
    }


    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }


    render(){
        return(
            <div className='container'>
                <form className='container-login' onSubmit={this.handleSubmit}>
                    <h1 className='header'>Log In</h1>     

                    <div className='input'>
                        <label>Email<br/></label>
                        <input type="Email" placeholder="Email" name='email' value={this.state.email} onChange={this.handleChange}/>
                    </div>    
                            
                    <div className='input'>
                        <label>Password<br/></label>
                        <input type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </div>
                            
                    <div className='btn' onClick={this.login}>Login</div>
                </form>        
            </div>
        );
    }
}

export default loginCompo;