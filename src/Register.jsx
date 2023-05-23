import React, { useState } from 'react'

function Register(props) {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

}
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>name</label>
        <input value={name} name='name' id='name' placeholder='full name'  >name</input>
        <label htmlFor='email'>email</label>
        <input value={email} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>password</label>
        <input value={pass} type='password' placeholder='*********' id='password' name='password' />
        <button onClick={() => props.onFormSwitch('login')} type='submit' >Log in</button>
    </form>

    <button>Already have an account? Login Here</button>
</>
  )
}

export default Register