import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Chat = () => {
  const whatsappUrl = 'https://wa.me/13157835441';

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#002654] text-white p-4">
      <Helmet>
        <title>Chat with WozWize</title>
        <meta name="description" content="Connect with WozWize on WhatsApp for personalized assistance and support." />
        <meta property="og:title" content="Chat with WozWize" />
        <meta property="og:description" content="Connect with WozWize on WhatsApp for personalized assistance and support." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-[#FDB927]">Chat with WozWize</h1>
        <p className="text-xl">Redirecting you to WhatsApp...</p>
        <p className="text-sm text-gray-300">
          If you're not redirected automatically,{' '}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FDB927] hover:text-[#FDB927]/80 underline"
          >
            click here to start the chat
          </a>
        </p>
      </div>
    </div>
  );
};

export default Chat; 