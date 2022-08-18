import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import Linkedin from '../../img/Linkedin.png';
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';


const Contact = () => {

// Form Submit Function 

const formRef = useRef();

// Use State after submiting the form

const [done, setDone]= useState(false);

// Context API

const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

const handleSubmit= (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_auq8ojf', 'template_u2xhyi1', formRef.current, 'PLUa5uP99WsgOlfC5')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
}

  return (
    <div className='c'>
      <div className="c-bg"> </div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className='c-title'> Contact me</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src= {Phone} alt="" className='c-icon'/> +46-734839745
                  </div>
                  <div className="c-info-item">
                      <img src= {Email} alt="" className='c-icon'/> sudha.poojari@hyperisland.se
                  </div>
                  <div className="c-info-item">
                      <img src= {Linkedin} alt="" className='c-icon'/> <a target="_blank" href="https://www.linkedin.com/in/sudha-madhuri-0ab4b721/"> Sudha Madhuri </a> 
                  </div>
                  <div className="c-info-item">
                      <img src= {Address} alt="" className='c-icon'/> Solna, Stockholm
                  </div>
              </div>
          </div>
          <div className="c-right">
            <h4 className='c-subtitle'> Get in touch</h4>
              <form ref={formRef} onSubmit= {handleSubmit}>
                <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Your Name' name='user_name' />
                <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Your Email' name='user_email' />
                <input style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} type="text" placeholder='Subject' name='user_subject' />
                <textarea style={{backgroundColor: darkMode && '#333', color: darkMode && 'white'}} name="message"  rows="5" placeholder='Message'></textarea>
                <button>Submit</button>
                    {done && "Thank you"}
              </form>
          </div>
      </div>
    </div>
  )
}

export default Contact
