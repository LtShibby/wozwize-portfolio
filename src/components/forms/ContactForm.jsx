import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general' // general, consulting, press, etc.
  });
  const [status, setStatus] = useState({ sending: false, sent: false, error: null });

  const inquiryTypes = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'consulting', label: 'Consulting Services' },
    { id: 'ai', label: 'AI Development' },
    { id: 'press', label: 'Press & Media' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    try {
      console.log('Sending form data:', formData);
      
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          subject: formData.subject,
          type: formData.type
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', response);
      setStatus({ sending: false, sent: true, error: null });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        sending: false,
        sent: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Inquiry Type */}
      <div>
        <label className={`${theme.text} block mb-2`}>Inquiry Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
        >
          {inquiryTypes.map(type => (
            <option key={type.id} value={type.id}>{type.label}</option>
          ))}
        </select>
      </div>

      {/* Name & Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={`${theme.text} block mb-2`}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
          />
        </div>
        <div>
          <label className={`${theme.text} block mb-2`}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className={`${theme.text} block mb-2`}>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
        />
      </div>

      {/* Message */}
      <div>
        <label className={`${theme.text} block mb-2`}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status.sending}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${theme.button} w-full py-3 rounded transition-all ${
          status.sending ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
        }`}
      >
        {status.sending ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Status Messages */}
      {status.sent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${theme.nav} p-4 rounded text-center ${theme.text}`}
        >
          Message sent successfully! We'll get back to you soon.
        </motion.div>
      )}

      {status.error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500 text-white p-4 rounded text-center"
        >
          {status.error}
        </motion.div>
      )}
    </form>
  );
}

export default ContactForm; 