import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[] pt-4 pb-2 mt-10 ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Navigation Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Pages</h3>
            <ul>
              <li>
                <a href="/home" className="text-gray-600 hover:text-blue-600">Home</a>
              </li>
              <li>
                <a href="/appointments" className="text-gray-600 hover:text-blue-600">Appointments</a>
              </li>
              <li>
                <a href="/store" className="text-gray-600 hover:text-blue-600">Store</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Public Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Contact Us</h3>
            <ul>
              <li>
                <p className="text-gray-600">Email: support@clinicstore.com</p>
              </li>
              <li>
                <p className="text-gray-600">Phone: +123 456 7890</p>
              </li>
              <li>
                <p className="text-gray-600">Address: 123 Clinic Street, City, Country</p>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links (optional) */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Follow Us</h3>
            <ul>
              <li>
                <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-gray-600 hover:text-blue-600">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup (optional) */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates.</p>
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border rounded w-full"
            />
            <button className="mt-2 bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; 2025 Clinic Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
