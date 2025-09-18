import { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import imageicon from '../assets/sign.png';

import { post } from './api';
import { ResultAlert } from './Alert';




export function SignupCom() {

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            uname: "",
            password: "",
            email: "",
            state: "",
            city: "",
            gender: "Woman",       // default selected
            education: "Diploma",  // same here
            major: "",
            cell: "",
            name: "",
            age: "",
            postc: "",
            job: ""
        }
    });
    const [error, setError] = useState<{ usernameOrPassword?: boolean; addUserFailed?: boolean; adddone?: boolean }>({});

    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        reset({
            uname: "",
            password: "",
            email: "",
            state: "",
            city: "",
            gender: "Woman",
            education: "Diploma",
            major: "",
            cell: "",
            name: "",
            age: "",
            postc: "",
            job: ""
        });
    }, [reset]);

    const onSubmit = async (data: any) => {
        try {
            const data1 = {
                username: data.uname,
                password: data.password,
                job: data.job,
                email: data.email,
                province: data.state,
                city: data.city,
                sex: data.gender,
                education: data.education,
                major: data.major,
                cellphone: data.cell,
                fullname: data.name,
                age: data.age,
                postc: data.postc,
            };
            //check username and password to be uniqe


            const response = await post('/api/signup', data1);

            if (!response.data) {//   username and password is  valid  
                setError({ usernameOrPassword: true });


            }
            else if (response.data) {//  user inserted              

                setShowResult(true);
            }
            else if (response.data === null) {// fail to insert user
                setError({ addUserFailed: true });
            }
        } catch (e) {
            console.log(e);
        }
    }

    


    return (
        <>
          

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2  box-content  ml-auto mr-auto lg:w-[90%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <div className=" justify-center mt-50  hidden lg:block" >
                    <img className="  lg:h-[30%] lg:w-[70%] z-0 md:visited " src={imageicon} alt="Signup"   ></img>
                </div>
                <div className=" col-span-2 mt-10  mr-5 ml-10 justify-center  ">

                    <p className=' font-roboto font-medium  text-3xl md:text-4xl mb-3'>Let's Get Started!</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2   " >

                        <label className='col-span-2 block pb-2 font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white' >Personal Information</label>



                        <div>
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="name" >Display Name*</label>

                            <input className="ring-1 outline-none  p-2 rounded-md w-3/4  "
                                type="text" required id="name" {...register("name")} />

                        </div>
                        <div>

                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="age">  Age* </label>
                            <input className="ring-1  outline-none p-2 rounded-md w-3/4  " type="number" inputMode="numeric" step="1" min="15" max="65" id="age" {...register("age")} title="Age must be between 15 and 65" required />

                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="gender">Gender*</label>

                            <select className=" ring-1 outline-none p-2 rounded-md w-3/4" id="gender" {...register("gender")} required>

                                <option value="Woman">Woman</option>
                                <option value="Man">Man</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="job">Job*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="job" {...register("job")} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="education">Education*</label>
                            <select

                                className="ring-1 outline-none p-2 rounded-md w-3/4" id="education"
                                {...register("education")} required           >

                                <option value="Diploma">Diploma</option>
                                <option value="Advanced Diploma">Advanced Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="Doctorate">Doctorate</option>
                            </select>

                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="major">Major*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="major" {...register("major")} required />
                        </div>
                        <hr className=" col-span-2 w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm dark:bg-dark_gray"></hr>

                        <label className='col-span-2 block font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white"' >Contact Information</label>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-base   text-text_black dark:text-text_white" htmlFor="email">Email*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="email" id="email" {...register("email")} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
                        </div>
                        <div >

                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="cel">Cell phone*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" inputMode='numeric' type="tel" pattern="[0-9]{10,15}" id="cell" {...register("cell")} title="Please enter a valid phone number (10 to 15 digits)" required />
                        </div>
                        <hr className=" col-span-2 w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm  dark:bg-dark_gray"></hr>

                        <label className='col-span-2 block pb-2 font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white"' >Location Information</label>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="state">State*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="state" {...register("state")} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="city">City*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="city" {...register("city")} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="postc">Postal Code*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="postc"  {...register("postc")} required />
                        </div>
                        <hr className=" col-span-2 w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm dark:bg-dark_gray"></hr>

                        <label className='col-span-2 block pb-2 font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white"' >Authentication Information</label>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-base   text-text_black dark:text-text_white" htmlFor="uname">Username*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" autoComplete="off" id="username" onFocus={() => setError({ usernameOrPassword: false })}  {...register("uname")} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="password"> Password* </label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" autoComplete="off" id="password" onFocus={() => setError({ usernameOrPassword: false })} {...register("password")} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                type="password"
                                required
                            />

                        </div>
                        <div className='col-span-2'>
                            <span className="font-roboto font-medium text-sm   text-light-gray  dark:text-text_white" id="passwordHint">
                                Password must be at least 8 characters long,
                                and include at least one uppercase letter, and
                                one lowercase letter, one number, and one
                                special character.
                            </span>
                        </div>
                        <div className='col-span-2' >
                            <button type="submit" className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black  rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">CREATE YOUR ACCOUNT</button>


                        </div>


                    </form>
                    <div className="mt-5 mb-10">

                        {error.usernameOrPassword && (
                            <label className="text-text-error mt-5 mb-10 font-roboto font-medium text-sm">
                                &#10060;Login failed. Please check your username and password and try again.
                            </label>
                        )}
                        {error.addUserFailed && (
                            <label className="text-text-error mt-5 mb-10 font-roboto font-medium text-sm">
                                &#10060;Failed to add user. Please try again.
                            </label>
                        )}
                        {/* Alerts */}
                        {showResult && (
                            <ResultAlert
                                onLogin={() => { }}
                                showresult={() => { }}
                                message="🎉 Congradulation, Your Account has created. You will get an email."
                            />
                        )}
                    </div>
                </div>


            </div >
        </>


    );
}


