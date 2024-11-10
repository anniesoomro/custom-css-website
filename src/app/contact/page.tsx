
import "../styles/contact.css";

export default function Contact() {
  return (
    <div>
      
      <main className="main">
        <h2>Contact Us</h2>
        <p>We had love to hear from you! Please reach out with any questions or feedback.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      
    </div>
  );
}