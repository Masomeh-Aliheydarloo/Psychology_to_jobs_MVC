import { useEffect, useState } from 'react';
import image from '../assets/PersonalityResult.webp';
import { PersonalityTestResultCom } from '../components/PersonalityTestResultCom';
import storage from '../components/LocalStorage';
import { post } from "../components/api";
import Message from './Message';

interface LoginProps {
    onLogin: () => void;

}
const PersonalityTestResult: React.FC<LoginProps> = ({ onLogin }) => {
    const [Code1, SetCode1] = useState("");
    const [Code2, SetCode2] = useState("");
    const [Len, Setlen] = useState(0);

    const [Result, SetResult] = useState(0);
    const pid = storage.get('id');
    useEffect(() => {
         onLogin();
        const fetchQuestion = async () => {

            try {

                const data: any = {
                    pid

                };

                const response = await post("/api/personalitytestresult", data);
                console.log("Response data:", response.data); // Debugging line

                if (response.data && Array.isArray(response.data)) {

                    SetResult(response.data[0].Result);
                    console.log("result:", response.data[0].Result);

                    SetCode1(response.data[0].Code1);

                    SetCode2(response.data[0].Code2);


                    //check result 

                    if (response.data[0].Code1_lenght - response.data[0].Code2_lenght <= 3) {
                        Setlen(100);
                    }
                    else if (response.data[0].Code1_lenght - response.data[0].Code2_lenght > 3) {
                        //50
                        Setlen(50);
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
        fetchQuestion();


    }, []);

   
   
    return (
        <>

            {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="PersonalityTestResult"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">Personality Test Result</p>
            </div>
            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
                {(Result === 0) && (<Message message={"Unfortunately, you failed the personality test. If you would like to receive a result, you can take the business test."}/>)}
                {(Result === 1) && (<PersonalityTestResultCom code1={Code1} code2={Code2} len={Len} />)}


            </div>





        </>
    );
}
export default PersonalityTestResult;