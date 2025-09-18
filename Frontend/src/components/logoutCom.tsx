import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


interface LogoutProps {
  onLogout: () => void;
}

export const LogoutCom: React.FC<LogoutProps> = ({ onLogout }) => {

  const navigate = useNavigate();
  useEffect(() => {

    onLogout();
    localStorage.removeItem('id'); // Clear user data on idle"");
    localStorage.removeItem('displayname');
    localStorage.removeItem('exam1');
    localStorage.removeItem('exam2');
    localStorage.removeItem('examA');
    localStorage.removeItem('examB');
    localStorage.removeItem('examC');
    localStorage.removeItem('examD');
    localStorage.removeItem('examE');
    localStorage.removeItem('result');
    localStorage.removeItem('bresult');
    
    // Redirect to homepage
    navigate('/');

  }, [onLogout, navigate]
  );


  return (<div>       </div>);



}





