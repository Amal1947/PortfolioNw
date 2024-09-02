import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <h5 className="text-xl font-bold mb-2">Company</h5>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <h5 className="text-xl font-bold mb-2">Support</h5>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <h5 className="text-xl font-bold mb-2">Follow Us</h5>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
              <h5 className="text-xl font-bold mb-2">Newsletter</h5>
              <form>
                <input 
                  type="email" 
                  className="w-full p-2 mb-2 rounded bg-gray-700 text-white" 
                  placeholder="Enter your email" 
                />
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; 2024 Company Name. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer