import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
