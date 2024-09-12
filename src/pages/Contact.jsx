import BannerImage from "../assets/2blackbean.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rigthSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter Email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Enter your message..." />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
