import { useEffect, useState } from 'react';
import image from '../assets/Inter.webp';

import storage from '../components/LocalStorage';
import { post } from "../components/api";
import { InterResultCom } from '../components/InterResultCom';





interface LoginProps {
    onLogin: () => void;

}
const InterResult: React.FC<LoginProps> = ({ onLogin }) => {
    const [E, SetE] = useState(0);
  const [N, SetN] = useState(0);
  const [A, SetA] = useState(0);
  const [O, SetO] = useState(0);
  const [C, SetC] = useState(0);

    const [Result, SetResult] = useState(0);
    const pid = storage.get('id');
    useEffect(() => {
        const fetchQuestion = async () => {

            try {

                const data: any = {
                    pid

                };

                const response = await post("/api/businesstestresult", data);


                if (response.data && Array.isArray(response.data)) {

                    

                    SetE(response.data[0].E);

                    SetN(response.data[0].N);

                    SetO(response.data[0].O);
                   
                    SetC(response.data[0].C);

                    SetA(response.data[0].A);



                    //check result 
                    if (response.data[0].E === 0 && response.data[0].N=== 0 && response.data[0].O=== 0 && response.data[0].C=== 0) {
                       SetResult(0);
                    }
                    else  {
                       SetResult(1);
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

    console.log("Result", Result);
    console.log("N", N);
    console.log("O", O);
    console.log("E", E);
    console.log("C", C);
    console.log("A", A);
    onLogin();
    return (
        <>

            {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="InterTestResult"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">Inter-Personal Result</p>
            </div>
            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
               
                {(Result === 1) && (<InterResultCom E={E} A={A}/>)}


            </div>





        </>
    );
}
export default InterResult;