import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface CaptchaProps {
  onVerify: (value: string | null) => void;
}

const CaptchaCom: React.FC<CaptchaProps> = ({ onVerify }) => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (value: string | null) => {
    setCaptchaValue(value);
    onVerify(value);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-5 mt-7">
      <ReCAPTCHA
        sitekey="your-recaptcha-site-key"  // Replace with your actual site key
        onChange={handleChange}
        className="mb-4"
      />
      
    </div>
  );
};

export default CaptchaCom;