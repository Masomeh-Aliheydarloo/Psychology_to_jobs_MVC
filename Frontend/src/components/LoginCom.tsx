import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";//npm install react-hook-form
import imageicon from '../assets/login.png';

import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import storage from './LocalStorage';
import { post } from './api';

// npm i --save-dev @types/node for env parameter


interface LoginProps {
    onLogin: () => void;
}
export const LoginCom: React.FC<LoginProps> = ({ onLogin }) => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    // const [username, SetUsername] = useState("");
    // const [password, SetPassword] = useState("");
    const [type, setType] = useState('password');
    const [showpassword, Setshowpassword] = useState(false);

    const [error, setError] = useState({ usernameOrPassword: false });



    useEffect(() => {
        storage.set('exam1', false);
        storage.set('exam2', false);
        storage.set('result', 0);
        storage.set('bresult', 0);
        storage.set('examA', false);
        storage.set('examB', false);
        storage.set('examC', false);
        storage.set('examD', false);
        storage.set('examE', false);
    }, []);



    const checkExam1 = async () => {


        const pid = storage.get('id');

        try {
            const data: any = {
                pid

            };
            const response = await post("/api/exam1", data);
         
            if (response.data !== null && response.data !== undefined) {
                const userArray = response.data as Array<{ Result: any }>;

                if (userArray.length > 0) {
                    const user = userArray[0];

                    storage.set('exam1', true);
                    storage.set('result', user.Result);
                   
                }
            }

            //    load();

        } catch (error: any) {
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

    };
    const checkExam2 = async () => {


        const pid = storage.get('id');

        try {
            const data: any = {
                pid

            };
            const response = await post("/api/exam2", data);


            if (response.data !== null && response.data !== undefined) {
                const userArray = response.data as Array<{ Result: any }>;

                if (userArray.length > 0) {
                    const user = userArray[0];

                    storage.set('exam2', true);
                    storage.set('bresult', user.Result);
                   
                }
            }
        } catch (error: any) {
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

    };
    const checkClassExam = async () => {

        const pid = storage.get('id');
        try {
            const data: any = {
                pid

            };
            const response = await post("/api/classexam", data);
 
            if (response.data && Array.isArray(response.data) && response.data.length > 0) { // before did the classtest            
                while (response.data.length > 0) {
                    const item = response.data.shift();
                   
                    if (item.Type === 'A') {
                        storage.set('examA', true);
                    }
                    if (item.Type === 'B') {
                        storage.set('examB', true);
                    }
                    if (item.Type === 'C') {
                        storage.set('examC', true);
                    }
                    if (item.Type === 'D') {
                        storage.set('examD', true);
                    }
                    if (item.Type === 'E') {
                        storage.set('examE', true);
                    }

                }
               
            }
            load();
        } catch (error: any) {
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


    };
    const load = () => {


        onLogin(); // Notify App that user is logged in
        navigate("/");

    }
    const handleClickShowPassword = () => {
        Setshowpassword(!showpassword);
        if (type === 'password') {

            setType('text')
        } else {

            setType('password')
        }

    };

    const onSubmit = (formData: any) => {
        onSubmit1(formData); // directly pass values
    }
    /*
        useEffect(() => {
            if (username !== "" && password !== "") {
                onSubmit1();
            }
        }, [username, password]);
    */
    const onSubmit1 = async ({ uname, password }: { uname: string; password: string }) => {

        //catch from DB
        try {
            const data = {
                username: uname,
                password,
            };
            const response = await post('/api/login', data);


            if (response.data === null) {// user is invalid               
                setError({ usernameOrPassword: true });

            }
            else if (response.data != undefined) {// user valid
                //set storagey
                localStorage.clear();

                const user = response.data as { fullName: any; personId: any };


                storage.set('displayname', user.fullName);
                storage.set('id', user.personId);


                await checkExam1();
                await checkExam2();
                await checkClassExam();


                //


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
                    <img className="lg:h-[50%] lg:w-[70%]  z-0 md:visited" src={imageicon} alt="Login"   ></img>
                </div>

                <div className="  col-span-2  mt-10 mr-5 ml-10 justify-center mb-5 ">
                    <p className='font-roboto font-medium text-3xl md:text-4xl '>Welcome Back</p>
                    <form onSubmit={handleSubmit(onSubmit)} >


                        <label className="block pb-2 font-roboto text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="uname" >UserName*</label>

                        <input className="ring-1 outline-none ring-gray-500 p-2 rounded-md w-3/4 "
                            type="text" required {...register("uname")} onFocus={() => setError({ usernameOrPassword: false })} />



                        <label className="block mt-3 pb-1  font-roboto text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="password">  Password* </label>


                        <div className="flex flex-row ">
                            <input className="ring-1 font-roboto text-sm   md:text-base  outline-none ring-gray-500 p-2 rounded-md w-3/4  " type={type}
                                required {...register("password")} onFocus={() => setError({ usernameOrPassword: false })} />
                            &nbsp;&nbsp;&nbsp;{showpassword ? (
                                <BsEye onClick={handleClickShowPassword} />
                            ) : (
                                <BsEyeSlash onClick={handleClickShowPassword} />
                            )}
                        </div>




                        <div >
                            <button type="submit" className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black bg-blue-700 rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">LOG IN</button>


                        </div>

                        {error.usernameOrPassword && (
                            <label className="text-text-error mt-5 mb-10 font-roboto font-medium text-sm">
                                &#10060;Sorry, unrecognized Username and Password. Please try again.
                            </label>
                        )}
                    </form>

                    <Link className="block   md:text-base font-medium mt-3  text-text_light dark:text-text_dark" to="/forgetpassword"> Forgot Password?</Link>
                    <hr className="lg:w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm md:my-5 dark:bg-dark_gray"></hr>

                    <span className=" flex flex-row  font-roboto font-medium text-base   text-text_black dark:text-text_white" >
                        Not yet a member?<Link className="block   md:text-base font-bold  text-text_light dark:text-text_dark"
                            to="/signup"> Join Us Today!</Link> </span>

                </div>

            </div>

        </>


    );
}


