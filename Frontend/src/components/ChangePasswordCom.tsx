import { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";//npm install react-hook-form
import imageicon from '../assets/login.png';
import { post } from './api';
import { ResultAlert } from './Alert';
import storage from './LocalStorage';

import { useNavigate } from 'react-router-dom';


// npm i --save-dev @types/node for env parameter


interface LoginProps {
    onLogin: () => void;
}
export const ChangePasswordCom: React.FC<LoginProps> = ({ onLogin }) => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [type, setType] = useState('password');

    const [error, setError] = useState({ usernameOrPassword: false });
    const [showResult, setShowResult] = useState(false);
    const [showResultno, setShowResultno] = useState(false);

    const pid = storage.get('id');

    useEffect(() => {
        onLogin();


    }, []);

    const onSubmit = (formData: any) => {

        onSubmit1(formData); // directly pass values
    }

    const onSubmit1 = async ({ uname, password, passwordR }: { uname: string; password: string, passwordR: string }) => {

        //catch from DB
        try {
            const data = {
                username: uname,
                password,
                newPassword: passwordR ,
                pid
            };
            const response = await post('/api/changepassword', data);

            if (response.data === 1) {
                setShowResult(true); // Success
                navigate('/logout');
            } else if (response.data === 0) {
                setShowResultno(true); // Not updated
            } else if (response.data === null) {
                setError({ usernameOrPassword: true }); // Incorrect current password
            }

        }


        catch (error: any) {
            if (error.response) {
                // The server responded with a status code outside the 2xx range
                console.log(`Server responded with error: ${error.response.status}`);
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received from the server.');
            } else {
                // Something happened in setting up the request
                console.log(`Error: ${error.message}`);
            }
        }
    }


    return (
        <>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 box-content  ml-auto mr-auto lg:w-[90%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <div className=" justify-center mt-auto mb-auto hidden lg:block " >
                    <img className="lg:h-[50%] lg:w-[70%]  z-0 md:visited" src={imageicon} alt="Change Password"   ></img>
                </div>

                <div className="  col-span-2  mt-10 mr-5 ml-10 justify-center mb-5 ">
                    <p className='font-roboto font-medium text-3xl md:text-4xl mb-5'>Change Password</p>
                    <form onSubmit={handleSubmit(onSubmit)} >


                        <label className="block pb-2 font-roboto text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="uname" >UserName*</label>

                        <input className="ring-1 outline-none ring-gray-500 p-2 rounded-md w-3/4 "
                            type="text" required {...register("uname")} onFocus={() => setError({ usernameOrPassword: false })} />



                        <label className="block mt-3 pb-1  font-roboto text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="password"> Current Password* </label>


                        <div className="flex flex-row ">
                            <input className="ring-1 font-roboto text-sm   md:text-base  outline-none ring-gray-500 p-2 rounded-md w-3/4  " type={type}
                                required {...register("password")} onFocus={() => setError({ usernameOrPassword: false })} />

                        </div>
                        <label className="block mt-3 pb-1  font-roboto text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="passwordR">New Password* </label>

                        <div className="flex flex-row ">
                            <input className="ring-1 font-roboto text-sm   md:text-base  outline-none ring-gray-500 p-2 rounded-md w-3/4  " type={type}
                                required {...register("passwordR")} onFocus={() => setError({ usernameOrPassword: false })} />

                        </div>


                        <div >
                            <button type="submit" className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black bg-blue-700 rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">Change Password</button>


                        </div>

                        {error.usernameOrPassword && (
                            <label className="text-text-error mt-5 mb-10 font-roboto font-medium text-sm">
                                &#10060;Sorry, unrecognized Username and Password. Please try again.
                            </label>
                        )}
                        {showResult && (
                            <ResultAlert onLogin={() => { }} showresult={() => { }}
                                message="🎉  Congradulation, Your password has changed." />
                        )}
                        {showResultno && (
                            <ResultAlert onLogin={() => { }} showresult={() => { }} message="Unfortunately, Failed to edit information. Please try again." />
                        )}
                    </form>



                </div>

            </div>

        </>


    );
}


