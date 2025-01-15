import React, { useRef, useState } from 'react'
import { validateEmail, validatePassword } from '../utils/Validate'

const Login = () => {
  const [toggle,setToggle] = useState(false)
  const [errorMessage,setErrorMessage] = useState({
    email:"",
    password:""
  })

  const email = useRef(null) 
  const password = useRef(null) 

  const toggleSignUp = ()=>{
    setToggle(!toggle)
  }
  const handleOnFormSubmit = (e)=>{
    e.preventDefault()
    const emailErrorMessage = validateEmail(email.current.value)
    const passwordErrorMessage = validatePassword(password.current.value)

    if (emailErrorMessage){
      setErrorMessage(prevErrorMessage => ({...prevErrorMessage,email:emailErrorMessage}))
    }
    if(passwordErrorMessage){
      setErrorMessage(prevErrorMessage =>({...prevErrorMessage,password:passwordErrorMessage}))
    }
  }
  return (
    <div className='relative text-white' >
        <form onSubmit={handleOnFormSubmit} className='absolute bg-black w-3/12 flex flex-col p-12 mx-auto right-0 left-0 rounded-lg bg-opacity-60 md:max-w-2xl'>
          <h1 className='font-bold py-2 my-2 text-3xl ' >
            {!toggle ? "Sign In" : "Sign Up"}
          </h1>
          {toggle&&
            <input type='text' placeholder='Name'className='p-4 my-4 rounded-lg bg-gray-900 border-solid border-[1px] border-gray-600' />}
          <input ref={email} type='text' placeholder='Email or Mobile Number'className='p-4 my-4 rounded-lg bg-gray-900 border-solid border-[1px] border-gray-600' />
            { errorMessage.email &&
              <span className='text-red-600' >
                {errorMessage.email}
              </span>
            }
          <input ref={password}  type='password' placeholder='Password'className='p-4 my-4 rounded-lg bg-gray-900 border-solid border-[1px] border-gray-600' />
            {errorMessage.password &&
              <span className='text-red-600'>
                {errorMessage.password}
              </span>}
          <button className='p-4 my-2 bg-red-600 rounded-lg' >
            {!toggle?"Sign In":"Sign Up"}
          </button>
          <h4 className='text-center' >Forgot password?</h4>
          <div>
            <input type='checkbox' value="Remember" className='my-2 w-5 h-5 rounded-xl'  />
            <label className='px-2 mb-2'>Remember me</label>
          </div>
          {!toggle? 
            <h4 className=' text-gray-500 flex py-2'>
              New to Netflix? 
              <p className='font-bold cursor-pointer text-white' onClick={toggleSignUp} >
                &nbsp;Sign up now.
              </p>
            </h4> : 
            <h4 className=' text-gray-500 flex py-2'>
              Already have an Account? 
              <p className='font-bold cursor-pointer text-white' onClick={toggleSignUp} >
                &nbsp;Sign In here.
                </p>
            </h4>}
        </form>
    </div>
  )
}

export default Login
