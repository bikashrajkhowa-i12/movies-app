import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} MovieHub. All rights reserved.</p>
        <p>Made with ❤️ by Bikash</p>
      </div>
    </footer>
  );
};

export default Footer;
