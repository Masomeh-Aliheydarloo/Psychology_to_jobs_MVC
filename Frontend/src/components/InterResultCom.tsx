
import { useEffect, useState } from "react";
import data from "./result/Intra";



interface InterResultComProps {
    E: number;

    A: number;
}


export const InterResultCom: React.FC<InterResultComProps> = ({ E, A }) => {


  
   

    const [contentA, setContentA] = useState('');
    const [titleA, setTitleA] = useState('');
    const [contentE, setContentE] = useState('');
    const [titleE, setTitleE] = useState('');

    const [flagE, setFlagE] = useState(false);
    const [flagA, setFlagA] = useState(false);
    const [nullFlagA, setNullFlagA] = useState(false);
    const [nullFlagE, setNullFlagE] = useState(false);

    useEffect(() => {

        if (E > 25 && E <= 45) {
            setContentE(data.E_content);
            setTitleE("Leadership");
            setFlagE(true);
        }
        else {
            setContentE(data.Null_content);
            setTitleE("Leadership");
            setNullFlagE(true);
        }



        if (A > 25 && A <= 45) {
            setContentA(data.A_content);
            setTitleA("Teamwork and Collaboration");
            setFlagA(true);
        }
        else {
            setContentA(data.Null_content);
            setTitleA("Teamwork and Collaboration");
            setNullFlagA(true);
        }
    }, [flagA, flagE, E, A, nullFlagA, nullFlagE]);

   
    




    return (
        <div className="w-full h-full bg-light_bg_body dark:bg-dark_bg_body py-10 px-4 ">
            <p className="font-roboto font-medium text-l md:text-xl  text-text_black dark:text-text_white">
                 Example of your interpersonal skills in Action: 
            </p>
             <div className="overflow-x-auto">
        <table className="mx-auto lg:w-[90%] border  rounded-lg shadow-sm m-6">
          <thead>
            <tr>
              <th className=" px-6 py-3 text-center text-medium md:text-lg font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                {titleE}
              </th>
              <th className="px-6 py-3 text-center text-medium md:text-lg font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                {titleA}
              </th>
            </tr>
          </thead>
          <tbody>
           
              <tr  >
                <td className="  px-6 align-text-top  text-medium md:text-lg font-roboto leading-relaxed   border-2 border-light_bg_subnav dark:border-dark_bg_subnav   text-text-green3 whitespace-pre-line">
                   {flagE && contentE}
                    {nullFlagE && contentE}
                </td>
                <td className="px-6 font-roboto text-medium md:text-lg leading-relaxed   border-2 border-light_bg_subnav dark:border-dark_bg_subnav   text-text-green3 whitespace-pre-line">
                 {flagA && contentA}
                   {nullFlagA && contentA}
                </td>
              </tr>
           
          </tbody>
        </table>
              
               
                </div>
            </div>
       

    );





};