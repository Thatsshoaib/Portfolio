import React from "react";

const ContactMe = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-4">
          Contact <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Have a question or want to work together? Fill out the form below and I'll get back to you!
        </p>

        {/* Contact Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-6"
        >
          {/* Web3Forms Hidden Input */}
          <input type="hidden" name="access_key" value="988e4550-7a73-405e-8484-2bff76945d9a" />

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-left font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-left font-semibold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-left font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here"
              className="w-full px-4 py-3 rounded-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
