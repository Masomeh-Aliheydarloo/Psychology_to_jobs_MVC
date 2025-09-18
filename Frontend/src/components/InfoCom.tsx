import { useEffect, useState } from 'react';
import storage from './LocalStorage';
import imageicon from '../assets/sign.png';
import { useForm } from "react-hook-form";
import { post } from './api';
import { ResultAlert } from './Alert';
interface LoginProps {
    onLogin: () => void;
}

export const InfoCom: React.FC<LoginProps> = ({ onLogin }) => {
    //user objects

    const [showResult, setShowResult] = useState(false);
    const [showResultno, setShowResultno] = useState(false);


    const pid = storage.get('id');
    const name=storage.get("displayname");

    const { register, handleSubmit, setValue } = useForm({
        defaultValues: {
            sex: "",
            name: "",
            age: "",
            job: "",
            major: "",
            education: "",
            email: "",
            state: "",
            city: "",
            postc: "",
            cell: ""
        }
    });





    useEffect(() => {

        const fetchNotes = async () => {

            try {

                const data: any = {
                    pid

                };

                const response = await post("/api/info", data);
                if (response.data !== null) {

                    const data = response.data as {
                        Job: string;
                        Email: string;
                        Province: string;
                        City: string;
                        Sex: string;
                        Education: string;
                        Major: string;
                        Tel: string;
                        Fullname: string;
                        Age: string;
                        Post: string;
                    }[];


                    const info = data[0];

                    setValue("sex", info.Sex); // update form value
                    setValue("name", info.Fullname);
                    setValue("job", info.Job);
                    setValue("state", info.Province);
                    setValue("major", info.Major);
                    setValue("education", info.Education);
                    setValue("cell", info.Tel);
                    setValue("postc", info.Post);
                    setValue("email", info.Email);
                    setValue("city", info.City);
                    setValue("age", info.Age);


                }

            } catch (e) {
                console.log(e);
            }
        };


        fetchNotes();

    }, []);

    const onSubmit = async (data: any) => {
        onLogin(); // Notify App that user is logged in

        try {
            const data1 = {
                pid,
                job: data.job,
                email: data.email,
                province: data.state,
                city: data.city,
                sex: data.sex,
                education: data.education,
                major: data.major,
                cellphone: data.cell,
                fullname: data.name,
                age: data.age,
                postc: data.postc,
            };

         
            const response = await post('/api/editinfo', data1);
           



            if (response.data === 1) {//  user update            

                setShowResult(true);
            }
            else if (response.data === 0) {// fail to insert user
                setShowResultno(true);
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

                    <p className=' font-roboto font-medium  text-3xl md:text-4xl mb-3'>Hi {name}</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2   " >

                        <label className='col-span-2 block pb-2 font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white' >Personal Information</label>



                        <div>
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="name" >Display Name*</label>

                            <input className="ring-1 outline-none  p-2 rounded-md w-3/4  "
                                type="text" required id="name"  {...register("name", { required: true })} />

                        </div>
                        <div>

                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="age">  Age* </label>
                            <input className="ring-1  outline-none p-2 rounded-md w-3/4  " type="number" inputMode="numeric" step="1" min="15" max="65" id="age"  {...register("age", { required: true })} title="Age must be between 15 and 65" required />

                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="sex">Gender*</label>

                            <select className=" ring-1 outline-none p-2 rounded-md w-3/4" id="sex" {...register("sex")} required>

                                <option value="Woman">Woman</option>
                                <option value="Man">Man</option>
                                <option value="Unknown">Unknown</option>
                            </select>
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base  text-text_black dark:text-text_white" htmlFor="job">Job*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="job" {...register("job", { required: true })} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="education">Education*</label>
                            <select

                                className="ring-1 outline-none p-2 rounded-md w-3/4" id="education"
                                {...register("education", { required: true })} required           >

                                <option value="Diploma">Diploma</option>
                                <option value="Advanced Diploma">Advanced Diploma</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="Doctorate">Doctorate</option>
                            </select>

                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="major">Major*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="major" {...register("major", { required: true })} required />
                        </div>
                        <hr className=" col-span-2 w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm dark:bg-dark_gray"></hr>

                        <label className='col-span-2 block font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white"' >Contact Information</label>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-base   text-text_black dark:text-text_white" htmlFor="email">Email*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="email" id="email" {...register("email", { required: true })} pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" required />
                        </div>
                        <div >

                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="cel">Cell phone*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" inputMode='numeric' type="tel" pattern="[0-9]{10,15}" id="cell" {...register("cell", { required: true })} title="Please enter a valid phone number (10 to 15 digits)" required />
                        </div>
                        <hr className=" col-span-2 w-[100%] h-1 mx-auto bg-light-gray border-0 rounded-sm  dark:bg-dark_gray"></hr>

                        <label className='col-span-2 block pb-2 font-roboto font-semibold text-sm   md:text-base   text-text_black dark:text-text_white"' >Location Information</label>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="state">State*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="state" {...register("state", { required: true })} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="city">City*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="city" {...register("city", { required: true })} required />
                        </div>
                        <div >
                            <label className="block pb-2 font-roboto font-medium text-sm   md:text-base   text-text_black dark:text-text_white" htmlFor="postc">Postal Code*</label>
                            <input className="ring-1 outline-none p-2 rounded-md w-3/4" type="text" id="postc"  {...register("postc", { required: true })} required />
                        </div>


                        <div className='col-span-2' >
                            <button type="submit" className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black  rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">CHANGE YOUR ACCOUNT</button>


                        </div>


                    </form>
                    



                        {showResult && (
                            <ResultAlert    onLogin={() => {}}  showresult={() => {}}
                            message="🎉  Congradulation, Your Account has changed. You will get an email." />
                        )}
                        {showResultno && (
                            <ResultAlert   onLogin={() => {}} showresult={() => {}} message="Unfortunately, Failed to edit information. Please try again." />
                        )}
                    
                </div>


            </div >
        </>


    );
}


