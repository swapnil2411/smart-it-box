"use client";
import React, { useState, useRef, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
    const multiselectRef = useRef();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      service: [],
      message: "",
    });
  
    const [errors, setErrors] = useState({
      name: "",
      email: "",
      subject: "",
      service: "",
      message: "",
    });
  
    const [isLoading, setIsLoading] = useState(false); // Track form submission loader
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      let error = "";
      switch (name) {
        case "name":
          if (!value) {
            error = "Full name is required";
          } else if (!/^[a-zA-Z ]+$/.test(value)) {
            error = "Full name should only contain alphabets";
          }
          break;
        case "email":
          if (!value) {
            error = "Email is required";
          } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            error = "Invalid email address";
          }
          break;
        case "subject":
          if (!value) {
            error = "Subject is required";
          } else if (value.includes("<script")) {
            error = "Subject should not contain script tags";
          }
          break;
        default:
          break;
      }
  
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSelect = (selected) => {
      setSelectedOptions(selected);
      const selectedKeys = selected.map((option) => option.key).join(", ");
      setFormData({ ...formData, service: selectedKeys });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate required fields
      const newErrors = {
        name: formData.name ? "" : "Full name is required",
        email: formData.email ? "" : "Email is required",
        subject: formData.subject ? "" : "Subject is required",
        service: selectedOptions.length > 0 ? "" : "At least one service is required", // Ensure service is selected
      };
  
      setErrors(newErrors);
  
      // Prevent form submission if there are errors
      if (Object.values(newErrors).some((error) => error !== "")) {
        return;
      }
  
      setIsLoading(true); // Show loader when form is being submitted
  
      try {
        const response = await fetch("https://email-repo.onrender.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formData,
          }),
        });
  
        const result = await response.json();
  
        setFormData({
          name: "",
          email: "",
          subject: "",
          service: [],
          message: "",
        });
  
        // Clear Multiselect chips
        multiselectRef.current.resetSelectedValues();
  
        toast.success(result.message || "Message sent successfully!"); // Success toast message
      } catch (error) {
        toast.error("Error sending the contact form. Please try again later."); // Error toast message
      } finally {
        setIsLoading(false); // Hide loader after form submission
      }
    };

  return (
    <section className="contact_form_area">
      <div className="sec contact_form_wrapper">
        <div className="contact_form_sec">
          <div className="sec_header">
            <span className="chip">Contact Us</span>
            <h2 className="mb-0">
              <span className="text_yellow about_brief_title">
                Love to hear from you
              </span>
            </h2>
            <h2 className="mt-0">
              <span className="about_brief_title">
                Get in touch{" "}
                <img
                  src="/images/waving-hand.png"
                  alt="hand"
                  className="hand_img"
                />
              </span>
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_element">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              
            {errors.name && <div style={{ color: "red" }} className="error_line">{errors.name}</div>}
            </div>

            <div className="form_element">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              
            {errors.email && <div style={{ color: "red" }} className="error_line">{errors.email}</div>}
            </div>

            <div className="form_element">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <div style={{ color: "red" }} className="error_line">{errors.subject}</div>
              )}
            </div>

            <div className="form_element">
              <Multiselect
                displayValue="key"
                id="css_custom"
                onSelect={handleSelect}
                options={[
                  { cat: "service", key: "Google Sheet Automate" },
                  { cat: "service", key: "What’s App API" },
                  { cat: "service", key: "Email Integration" },
                  { cat: "service", key: "Digital Marketing" },
                  { cat: "service", key: "UI/UX Design" },
                  { cat: "service", key: "Web Development" },
                  { cat: "service", key: "App Development" },
                  { cat: "service", key: "Content Writing" },
                  { cat: "service", key: "Software Development" },
                ]}
                placeholder="Select Services"
                value={formData.service}
                style={{
                  chips: {
                    background: "#EF644C",
                  },
                  searchBox: {
                    border: "none",
                    borderBottom: "1px solid blue",
                    borderRadius: "0px",
                  },
                }}
                ref={multiselectRef}
              />
              {errors.service && (
              <div style={{ color: "red" }} className="error_line">{errors.service}</div>
            )}
            </div>

            <div className="form_element form_element_msg">
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="form_element form_element_msg">
              <button type="submit" className="btn_green" disabled={isLoading}>
                {isLoading ? <span>Loading...</span> : <span>Send Message</span>}
              </button>
            </div>
          </form>
        </div>
        <div className="contact_form_img">
          <img src="/images/contact_us_img.jpg" alt="contact_us_img" />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default ContactForm;
