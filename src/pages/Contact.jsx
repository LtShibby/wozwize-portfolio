import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    sending: false,
    sent: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, sent: false, error: null });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', result);
      setStatus({ sending: false, sent: true, error: null });
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('Detailed EmailJS error:', error);
      setStatus({
        sending: false,
        sent: false,
        error: `Failed to send message: ${error.message || 'Unknown error'}`
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-5rem)] p-8"
    >
      <h2 className={`${theme.text} text-3xl md:text-4xl font-bold mb-8 text-center font-['Fira_Code']`}>
        &lt;Contact /&gt;
      </h2>
      
      <div className="max-w-2xl mx-auto">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="from_name" className={`${theme.text} block mb-2`}>Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
            />
          </div>
          
          <div>
            <label htmlFor="from_email" className={`${theme.text} block mb-2`}>Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
            />
          </div>
          
          <div>
            <label htmlFor="message" className={`${theme.text} block mb-2`}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className={`w-full p-3 rounded ${theme.nav} ${theme.text} border border-current border-opacity-20`}
            />
          </div>
          
          <button
            type="submit"
            disabled={status.sending}
            className={`${theme.button} w-full py-3 rounded transition-all ${
              status.sending ? 'opacity-50' : 'hover:opacity-90'
            }`}
          >
            {status.sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.sent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-500 text-white rounded"
          >
            Message sent successfully!
          </motion.div>
        )}

        {status.error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-500 text-white rounded"
          >
            {status.error}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Contact; 