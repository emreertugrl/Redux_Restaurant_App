import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>&copy; 2024 burger07.com</p>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Footer;
