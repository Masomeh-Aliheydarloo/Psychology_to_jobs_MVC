import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from './AuthContext';

export default function CheckIdle() {
  const navigate = useNavigate();
  const idleTime: number = 30 * 60 * 1000; // 30 minutes in milliseconds

  //const { isAuthenticated } = useAuth();
 

  const onIdle = () => {
   
    localStorage.removeItem('id'); 
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

    
    navigate('/login'); // redirect to login
  };

  useIdleTimer({
    timeout: idleTime,
    onIdle,
    debounce: 500,
   // disabled: !isAuthenticated
  });

  return null;
}
