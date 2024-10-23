import React, { useState, useEffect } from 'react';
import countryData from './country.json'; // Correct path to your local JSON file

const ContactForm = () => {
  const [captcha, setCaptcha] = useState({ question: "", answer: null });
  const [invalidCaptcha, setInvalidCaptcha] = useState(false);
  const [formData, setFormData] = useState({
    captchaInput: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: ""
  });

  // Generate a random number for captcha
  const getRandomNumber = () => Math.floor(Math.random() * 26) + 6;

  // Generate and set captcha
  const generateCaptcha = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    setCaptcha({
      question: `${num1} + ${num2} =`,
      answer: num1 + num2,
    });
  };

  useEffect(() => {
    generateCaptcha(); // Generate captcha when component loads
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    // Captcha validation
    if (parseInt(formData.captchaInput, 10) !== captcha.answer) {
      setInvalidCaptcha(true);
      generateCaptcha(); // Generate a new captcha on failure
      return;
    }

    // Handle form submission logic here
    console.log('Form Data:', formData);
    // Reset form and captcha after successful submission
    setFormData({
      captchaInput: "",
      name: "",
      email: "",
      phone: "",
      country: "",
      message: ""
    });
    generateCaptcha(); // Reset captcha
    setInvalidCaptcha(false);
  };

  return (
    <section>
      <h1 className='text-center text-6xl text-blue-500 font-semibold my-10'>Get In Touch</h1>
      <form onSubmit={submitForm} className='flex flex-col lg:flex-row gap-20'>
        <div className='lg:w-1/2 flex flex-col gap-5 mb-20 mx-20'>
          <input 
            type="text" 
            name="name" 
            placeholder='Enter name*' 
            required 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange}
            value={formData.name}
          />
          <input 
            type="email" 
            name="email" 
            placeholder='Enter Email*' 
            required 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange}
            value={formData.email}
          />
          <input 
            type="text" 
            name="phone" 
            placeholder='Enter Phone*' 
            required 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange}
            value={formData.phone}
          />

          {/* Country Dropdown */}
          <select 
            name="country" 
            required 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange}
            value={formData.country}
          >
            <option value="" disabled>Select country</option>
            {countryData.map((country) => (
              <option key={country.name} value={country.dialing_code}>
                {country.name}
              </option>
            ))}
          </select>

          <input 
            type="text" 
            placeholder='Skype ID' 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48'
          />
          <input 
            type="text" 
            name="message" 
            placeholder='Subject/Query*' 
            required 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange}
            value={formData.message}
          />

          {/* Captcha Section */}
          <div id="captchaDisplay">
            <p>{captcha.question}</p>
          </div>
          <input 
            type="text" 
            name="captchaInput" 
            required 
            placeholder="Enter Captcha*" 
            className='placeholder:text-black outline-1 outline-blue-500 border-2 rounded-lg py-2 pl-4 pr-48' 
            onChange={handleChange} 
            value={formData.captchaInput}
          />
          {invalidCaptcha && (
            <p id="invalidCaptcha" className="text-red-500">
              Invalid Captcha! Please try again.
            </p>
          )}
          <button type="submit" className='py-4 px-10 text-white mb-5 bg-blue-500 w-fit'>Submit</button>
        </div>

        {/* Google Map */}
        <div className='lg:w-1/2 mb-10'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.795980198256!2d3.708454!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sbd!4v1723619506631!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
