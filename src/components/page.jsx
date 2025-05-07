// src/components/page.jsx
// Single component containing the landing page structure
import webinarImage from '../assets/webinar-image.png'; // Import the webinar image
import { useState } from 'react';

function Page() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled before submission
    if (formData.firstName && formData.lastName && formData.email && formData.phone) {
      setSubmitted(true);
      // Placeholder for backend integration (to be implemented later)
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <div className="page">
      <main>
        <section className="webinar-section">
          {/* Left side: Conditionally render form or thank you message */}
          {!submitted ? (
            <div className="webinar-form">
              <h2>
                Register for the <span className="highlight">FREE WEBINAR.</span>
              </h2>
              <form className="registration-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-input"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-input"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-input"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="register-btn">
                  Register Now
                </button>
              </form>
            </div>
          ) : (
            <div className="thank-you-section">
              <h2>
                Thank You for signing up for the <span className="highlight">FREE WEBINAR.</span>
              </h2>
              <p>Please check your email to access the Zoom meeting link.</p>
            </div>
          )}
          {/* Right side: Webinar details with image, always visible */}
          <div className="webinar-details">
            <img src={webinarImage} alt="Free Online Webinar" className="webinar-image" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;