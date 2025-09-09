import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <form action="https://formspree.io/f/xvgblkdk" method='POST'>
        <input type="text" name="username" id="" placeholder='Enter you name' required />
        <input type="email" placeholder='Email' name='email' required/>
        <textarea name="message" placeholder='Message' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
