import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa6";
import Captcha from "./Captcha";
import { smtpexpressClient } from "../data/smtp";
import { BiCopyright } from "react-icons/bi";
import bittsLogo from "../assets/logo/bitts-logo.png";

const ContactForm = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [loader, setLoader] = useState(false);
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    skypeId: "",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [captchaAnswer, setCaptchaAnswer] = useState(null);
  const [invalidCaptcha, setInvalidCaptcha] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [invalidKey, setInvalidKey] = useState(false);
  const [forbiddenWords, setForbiddenWords] = useState([]);

  // Get all countries name
  useEffect(() => {
    fetch("/country.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading country data:", error));

    fetchForbiddenWords();
  }, []);

  // Handle input filed change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Get all forbidden words list
  const fetchForbiddenWords = async () => {
    const apiUrl = "https://bitts.fr/api.php";

    try {
      const credential = await fetch("/credential.json");
      const credentialsData = await credential.json();
      if (
        !credentialsData ||
        !credentialsData.username ||
        !credentialsData.password
      ) {
        return;
      }

      const servername = window.location.hostname;
      const data = { ...credentialsData, servername };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        setForbiddenWords(result ?? []);
      } else {
        setInvalidKey(true);
      }
    } catch (error) {
      console.error("Error fetching forbidden words:", error);
      setInvalidKey(true);
    }
  };

  // Check for forbidden words in message filed
  const checkForbiddenWords = (message) => {
    for (const word of forbiddenWords) {
      if (message.toLowerCase().includes(word.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  // Handle contact form submit
  const submitForm = async (event) => {
    event.preventDefault();
    setLoader(true);

    if (parseInt(formData.captchaInput, 10) !== captchaAnswer) {
      setLoader(false);
      setInvalidCaptcha(true);
      return;
    } else {
      setInvalidCaptcha(false);
    }

    if (!checkForbiddenWords(formData.message)) {
      setLoader(false);
      setInvalidMessage(true);
      return;
    } else {
      setInvalidMessage(false);
    }

    try {
      // Create a formatted message to send
      const formattedMessage = `
            Name: ${formData.name}
            <br />
            Email: ${formData.email}
            <br />
            Subject: ${formData.subject}
            <br />
            Phone: ${formData.phone}
            <br />
            Country: ${formData.country}
            <br />
            Skype ID: ${formData.skypeId}
            <br />
            Message: ${formData.message}
      `;
      // Sending an email using SMTP
      await smtpexpressClient.sendApi.sendMail({
        // Subject of the email
        subject: `Bobosoho Contact Form Submission from ${formData.name}`,
        // Body of the email
        message: `${formattedMessage}`,
        // Sender's details
        sender: {
          // Sender's name
          name: "Bobosoho",
          // Sender's email address
          email: "bfinit-9b2b98@projects.smtpexpress.com",
        },
        // Recipient's details
        recipients: {
          // Recipient's email address (obtained from the form)
          // email: `${formData.email}`,
          email: `support@bobosohomail.com`,
        },
      });

      setLoader(false);
      // Notify user of successful submission
      alert("Contact message sent. Our support team will reach you soon.");
      navigate("/");
    } catch (error) {
      setLoader(false);
      // Notify user if an error occurs during submission
      alert("Oops! Something went wrong. Please try again later.");
      // You can console.log the error to know what went wrong
      console.log(error);
    }

    // Reset form data and captcha invalidation error message
    setInvalidCaptcha(false);
    setInvalidMessage(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      skypeId: "",
      subject: "",
      message: "",
      captchaInput: "",
    });
  };

  return (
    <section className="py-10 pb-20">
      <h2 className="text-center text-3xl font-semibold">Get In Touch</h2>
      <p className="mx-auto mt-4 text-center text-lg text-gray-600">
        Fill out the form or find us on the map to get in touch.
      </p>

      <div className="mt-16 flex flex-col gap-10 lg:flex-row">
        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={submitForm}
          className="flex flex-col gap-5 rounded border p-6 lg:w-1/2"
        >
          <label htmlFor="name" className="text-lg font-medium">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          <label htmlFor="email" className="text-lg font-medium">
            Email *
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          <label htmlFor="phone" className="text-lg font-medium">
            Phone *
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          <label htmlFor="country" className="text-lg font-medium">
            Country *
          </label>
          <select
            id="country"
            name="country"
            required
            onChange={handleChange}
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          <label htmlFor="subject" className="text-lg font-medium">
            Subject/Query *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          <label htmlFor="skypeId" className="text-lg font-medium">
            Skype ID
          </label>
          <input
            type="text"
            id="skypeId"
            name="skypeId"
            value={formData.skypeId}
            onChange={handleChange}
            placeholder="Skype Id (optional)"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          <label htmlFor="message" className="text-lg font-medium">
            Enter Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          {/* Captcha Component */}
          <Captcha onCaptchaGenerated={setCaptchaAnswer} />

          <input
            type="text"
            id="captchaInput"
            name="captchaInput"
            required
            value={formData.captchaInput}
            onChange={handleChange}
            placeholder="Captcha *"
            className="mt-2 block w-full rounded border px-4 py-3 outline-none focus:border-black"
          />

          {invalidCaptcha && (
            <p className="text-red-500">Invalid Captcha! Please try again.</p>
          )}
          {invalidMessage && (
            <p className="text-red-500">
              Your message contains forbidden words.
            </p>
          )}
          {invalidKey && <p className="text-red-500">Invalid API Key.</p>}

          <button
            type="submit"
            className="mt-6 flex justify-center rounded bg-electricViolet px-4 py-3 text-lg font-medium text-white"
          >
            {loader ? (
              <p className="flex items-center gap-2">
                Sending <FaSpinner className="animate-spin text-xl" />
              </p>
            ) : (
              "Send Message"
            )}
          </button>

          <div className="mt-5">
            <p className="flex items-center justify-center gap-1 text-xs">
              <BiCopyright /> 2024 BFIN. BITSS by BFIN. All rights reserved.
            </p>
            <div className="mt-2.5 flex flex-col items-center justify-center gap-2.5">
              <img src={bittsLogo} alt="" loading="lazy" />
              <p className="text-xs">
                This form is powered by bitss cyber security
              </p>
            </div>
          </div>
        </form>

        {/* Google Map */}
        <div className="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5795.795980198256!2d3.708454!3d43.420958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1357c2efa6fbb%3A0xddfc93666aef9f37!2s8%20Rue%20de%20Dublin%2C%2034200%20S%C3%A8te%2C%20France!5e0!3m2!1sen!2sbd!4v1723619506631!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
