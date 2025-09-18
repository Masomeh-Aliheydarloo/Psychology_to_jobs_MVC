import React from "react";
import { LogoutCom } from "../components/logoutCom";


interface LogoutProps {
  onLogout: () => void;
}

const Logout: React.FC<LogoutProps> = ({ onLogout }) => {
  return <LogoutCom onLogout={onLogout} />;
};

export default Logout;