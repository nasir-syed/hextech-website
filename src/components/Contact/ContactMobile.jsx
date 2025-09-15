import { useState } from "react";
import hextechLogo from "../../assets/hextech-logo.svg";

export default function ContactMobile() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    title: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formatFullName = (name) => {
    return name
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "fullName" ? formatFullName(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://hextech-website.vercel.app/api/contact', { // change this address for hosting
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ fullName: '', email: '', title: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-4 flex flex-col items-center text-white">
      <div className="text-center mb-6"></div>

      <div className="animate-rotate-border from-black from-80% via-blue-400 via-90% to-black to-100% p-px transition-all duration-500 ease-out bg-[conic-gradient(from_var(--border-angle),transparent_80%,#60a5fa_90%,transparent_100%)] rounded-lg shadow-lg w-[90%]">
        <div className="bg-[#0e0e0e] rounded-lg flex flex-col gap-8 p-6">
          <div className="flex justify-center items-end gap-5">
            <img src={hextechLogo} alt="Company Logo" className="w-25 h-25" />
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-transparent placeholder-gray-400 border-b-2 border-[#007fc2] p-2 text-white outline-none resize-none"
            />
            
            {submitStatus && (
              <div className={`p-3 rounded-md text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/30 border border-green-500 text-green-200' 
                  : 'bg-red-900/30 border border-red-500 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-32 h-12 rounded-md font-medium self-center bg-transparent border-2 border-[#007fc2] outline-none text-gray-200 transition-all ${
                isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'shadow-[3px_3px_0px_#00476d] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                'Send'
              )}
            </button>
          </form>

          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-lg text-[#007fc2] font-medium">info@hextech.ae</p>
            <p className="text-gray-400">Dubai, Dubai Internet City</p>
          </div>
        </div>
      </div>
    </section>
  );
}