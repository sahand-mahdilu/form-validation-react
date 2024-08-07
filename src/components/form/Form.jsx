import { useState } from "react";
import "./Form.css";

export default function Form() {

    const [nameValue,setNameValue]=useState("")
    const [lastNameValue,setLastNameValue]= useState("")
    const [emailValue,setEmailValue]= useState("")
    const [isSubmitValue,setIsSubmitValue]=useState(false)
    const [allValid, setAllValid]=useState(false)


    const nameValueHandler =(e)=>{
        setNameValue(e.target.value)
        
      }
      const lastNameHandler= (e)=>{
        setLastNameValue(e.target.value)
      }
      
      const emailHandler =(e)=>{
        setEmailValue(e.target.value)
      
      }
      const submitHandler=(e)=>{
      e.preventDefault()
       
        console.log(`${nameValue} ${lastNameValue} ${emailValue} ${isSubmitValue}`)
        setIsSubmitValue(true)
      
      if(nameValue.length !==0 && lastNameValue.length !==0 && emailValue.length !==0 ){
      
        setAllValid(true)
      }
      setTimeout(()=>{
        setAllValid(false)
      
      },3000)

  
      
      }
      




  return  (
    <div className="form-container">
        <form className="register-form" onSubmit={submitHandler} autoComplete="off">
          
            {isSubmitValue && allValid &&  (
                <div className="success-message">Success! Thank you for registering</div>
            )}
            <input
                id="first-name"
                onChange={nameValueHandler}
                value={nameValue}
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
            />

            {isSubmitValue && nameValue.length=== 0 &&(
                <span id="first-name-error">Please enter a first name</span>
            )}
            <input
                id="last-name"
                onChange={lastNameHandler}
                value={lastNameValue}
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
            />

            {isSubmitValue && lastNameValue.length=== 0 && (

                <span id="last-name-error">Please enter a last name</span>
            )}
            <input
                id="email"
                onChange={emailHandler}
                value={emailValue}
                className="form-field"
                type="email"
                placeholder="Email"
                name="email"
            />

            {isSubmitValue && emailValue.length=== 0 && (
                <span id="email-error">Please enter an email address</span>
            )}
            <button className="form-field" type="submit">
                Register
            </button>
        </form>
    </div>

)
  
  
}
