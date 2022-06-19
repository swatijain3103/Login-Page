import React from "react";
import { useState } from "react";




function App(){
  // initialize registartion input
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [mobile,setMobileNo] = useState("");

  // initialize submit or error inputs
  const [submitted,setSubmitted] = useState(false);
  const [errors,setErrors] = useState(false);

// handle all input data 
  const handleName = (e) => {
    setName(e.target.value)
    setSubmitted(false);

  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    setSubmitted(false);

  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    setSubmitted(false);
  }

  const handleMobile = (e) => {
    setMobileNo(e.target.value)
    setSubmitted(false);
  }

// handle submit or error case
  const handleSubmit = (e) => {
    e.preventDefault();
    // it controls the fluctuating or refreshing browser again and again
    if(name === '' || email === '' || password === '' || mobile === ''){
      setErrors(true);
      
    } 
    else{
      setSubmitted(true);
      setErrors(false);
    }
    
  };

  const SuccessMessage = () => {
    return (
      <div
      className="success"
      style={{
        display: submitted ? '' : 'none'}}>
      <h1>{name} has successfully registered!!</h1>
    </div>
  );
};

 const ErrorMessage = () => {
   return (
     <div className="error"
     style={{
       display: errors ? '' : 'none'}}>
         <p>Please enter all the fields</p>
       </div>

   );
 };

  

  return(
    <div className="form-container">
      <h1 className="header">Registration</h1>
    <div>
      {SuccessMessage()}
      {ErrorMessage()}
    </div> 
    <form className="app"> 
    {/* use different diffrent div tag for each input name jisse saare inputs alag alag line se suru ho jayenge */}
        <div>
            <label className="name">Full Name</label>
            <input onChange={handleName} 
            className="form-field" 
            placeholder="Please enter your full name" 
            value={name} 
            type="text" />
        </div>
      
      <div>
          <label className="mail">Email</label>
          <input onChange={handleEmail} 
          className="form-field" 
          placeholder="Please enter your email" 
          value={email} 
          type="email"
          name="email"/>
      </div>

      <div>
          <label className="pwd">Password</label>
          <input onChange={handlePassword} 
          className="form-field" 
          placeholder="Please enter your password" 
          value={password} 
          type="password"
          name="password"></input>
      </div>
      
      <div>
          <label className="no">Mobile No</label>
          <input onChange={handleMobile} 
          className="form-field" 
          placeholder="Please enter your mobile number" 
          value={mobile} 
          type="number"
          name="mobileno"></input>
      </div>
      <button onClick={handleSubmit} className="btn">Submit</button>
    </form>
    
    </div>

    
   
  )

}
export default App;