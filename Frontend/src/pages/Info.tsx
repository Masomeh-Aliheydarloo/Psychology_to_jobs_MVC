import { InfoCom } from "../components/InfoCom";

interface LoginProps {
  onLogin: () => void;
}

const Info: React.FC<LoginProps> = ({ onLogin }) => {
    return (
        <>

            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
               
<InfoCom onLogin={onLogin}></InfoCom>
                
            </div>



        </>
    );
}
export default Info;