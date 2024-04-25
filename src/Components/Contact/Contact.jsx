import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d1d1d851-d6ed-40cf-bea6-3916d61afe45");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Culpa voluptatibus deleniti
                 earum velit nihil doloremque blanditiis
                  voluptatem provident, dolores eum enim maxime
                   pariatur.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />imesh.uoc@gmail.com</li>
                <li><img src={phone_icon} alt="" />+94 778 389 345</li>
                <li><img src={location_icon} alt="" />No 12,Dicksan Road,Galle</li>  
            </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' requried />
            <label>Phone Numer</label>
            <input type="tel" name='phone'placeholder='Enter your moile number' requried/>
            <label>Write yout masssage here</label>
            <textarea name="message" rows="6" placeholder='Enter your Massage' ></textarea>
            <button type='submit' className='btn dark-btn'>Submit Nowimg <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

        </div>

    </div>
  )
}

export default Contact