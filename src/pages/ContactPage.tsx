function ContactPage() {
  return (
    <div className="px-4 py-8 mx-auto max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Have a question or need assistance? We're here to help! Reach out to us through any 
          of the following channels, and our team will get back to you as soon as possible.
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <span className="font-semibold text-gray-800 w-24">Email:</span>
            <a href="mailto:support@electroshop.com" className="text-blue-600 hover:underline">
              support@electroshop.com
            </a>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-800 w-24">Phone:</span>
            <a href="tel:+15551234567" className="text-blue-600 hover:underline">
              +1 (555) 123-4567
            </a>
          </div>
          <div className="flex items-start">
            <span className="font-semibold text-gray-800 w-24">Address:</span>
            <span className="text-gray-600">
              123 Tech Avenue, Silicon Valley, CA 94043
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactPage;
