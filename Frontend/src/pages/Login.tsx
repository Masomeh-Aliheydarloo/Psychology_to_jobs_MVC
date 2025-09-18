
import React from "react";
import { LoginCom } from "../components/LoginCom";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body dark:bg-dark_bg_body justify-center">
      <LoginCom onLogin={onLogin} />
    </div>
  );
};

export default Login;
