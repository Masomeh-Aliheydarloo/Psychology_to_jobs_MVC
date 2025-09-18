import { ChangePasswordCom } from "../components/ChangePasswordCom";


interface LoginProps {
    onLogin: () => void;
}

const ChangePassword: React.FC<LoginProps> = ({ onLogin }) => {
    return (
        <>

            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >

                <ChangePasswordCom onLogin={onLogin} />

            </div>



        </>
    );
}
export default ChangePassword;