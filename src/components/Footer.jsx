import React, { useState } from "react";

function Footer() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted URL: ${url}`);
    setUrl(""); // Clear input after submission
  };

  return (
    <footer className="flex flex-col md:flex-row p-10 justify-between mt-20 bg-gray-200 text-grey-800">
      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold">Contact Info</h3>
        <p>Email: <a href="mailto:nk4015@srmist.edu.in" className="text-blue-400 hover:underline">nk4015@srmist.edu.in</a></p>
        <p>Phone: (123) 456-7890</p>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold">Follow Us</h3>
        <ul className="mt-2 space-y-1">
          <li><a href="https://github.com/nirmalkumar047" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a></li>
          <li><a href="https://bento.me/nirmal-kumar-02" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Bento</a></li>
          <li><a href="https://www.instagram.com/nirmal_kumar__002/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
        </ul>
      </div>

      {/* URL Input Form */}
     

      {/* Copyright */}
      <div className="mt-4 md:mt-0 text-center md:text-left">
        <p>&copy; 2025 Photosea. All rights reserved.</p>
        <p>Nirmal Kumar</p>
      </div>
    </footer>
  );
}

export default Footer;
