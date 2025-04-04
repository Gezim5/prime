import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Prime Hairstyle. All rights reserved.</p>
        <p>
          Website designed and developed by{" "}
          <a
            href="https://www.zivag.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Z I V A G</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
