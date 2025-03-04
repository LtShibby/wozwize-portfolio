import { useTheme } from '../context/ThemeContext';
import PageTransition from '../components/PageTransition';

function ClientCustomWebsiteQuestionnaire() {
  const { theme } = useTheme();

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-5rem)] p-8 pt-12">
        <div className="max-w-6xl mx-auto">
          {/* Banner Image */}
          <div className="relative w-full h-[300px] mb-12 rounded-lg overflow-hidden">
            <img
              src="/images/website-questionnaire-banner.jpg"
              alt="Custom Website Development Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className={`text-white text-4xl font-bold text-center font-['Fira_Code'] px-4`}>
                Custom Website Questionnaire
              </h1>
            </div>
          </div>

          <p className={`${theme.text} text-center mb-12 text-lg max-w-3xl mx-auto`}>
            Please fill out this questionnaire to help us better understand your website needs and requirements. This will help us prepare for your free consultation.
          </p>
          
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdrfm-625FUfvmHo9_fBUlEsBEcBK2lRQ-YEghHfQ52z5Apbg/viewform?embedded=true"
              width="100%"
              height="1813"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="max-w-4xl"
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default ClientCustomWebsiteQuestionnaire; 