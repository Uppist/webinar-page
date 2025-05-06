// src/components/page.jsx
// Single component containing the landing page structure
import webinarImage from '../assets/webinar-image.png'; // Import the webinar image

function Page() {
  return (
    <div className="page">
      <main>
        <section className="webinar-section">
          <div className="webinar-form">
            <h2>Register for the <span className="highlight">FREE WEBINAR.</span></h2>
            <form className="registration-form">
              <input type="text" placeholder="First Name" className="form-input" required />
              <input type="text" placeholder="Last Name" className="form-input" required />
              <input type="email" placeholder="Email Address" className="form-input" required />
              <input type="tel" placeholder="Phone Number" className="form-input" required />
              <button type="submit" className="register-btn">Register Now</button>
            </form>
          </div>
          <div className="webinar-details">
            <img src={webinarImage} alt="Free Online Webinar" className="webinar-image" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Page;