import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CenteredAlertProps {
  message: string;
  onLogin: () => void;
  showresult: () => void;
}


export const ResultAlert: React.FC<CenteredAlertProps>  = ({ message, onLogin,showresult }) => {
  const [visible, setVisible] = useState(true);
const navigate = useNavigate();

  useEffect(() => {
    if (!visible) {
      // Navigate after component updates
      const timer = setTimeout(() => {
         onLogin();
         showresult();
        navigate("/");
      }, 300); // Optional delay to allow alert to close nicely
      return () => clearTimeout(timer);
    }
  }, [visible, navigate]);

  if (!visible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0   bg-opacity-40 flex items-center justify-center z-50 ">
        {/* Alert Box */}
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-4 relative border-2 border-dark_bg_nav  dark:bg-light_bg_subnav bg-dark_bg_subnav">
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
            aria-label="Close alert"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Message Content */}
          <div className="flex items-center space-x-4">
            <svg
              className="w-8 h-8 text-blue-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
            </svg>
            <p className="font-roboto font-medium text-base
                                 text-text_white dark:text-text_black">{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}
