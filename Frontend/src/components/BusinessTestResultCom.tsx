
import big5_A from "./result/big5_A";
import big5_C from "./result/big5_C";
import big5_E from "./result/big5_E";
import big5_O from "./result/big5_O";
import big5_N from "./result/big5_N";
import titles from "./result/titles";
import { useEffect, useState } from "react";


interface BusinessTestResultComProps {
    E: number;
    C: number;
    N: number;
    O: number;
    A: number;

}

export const BusinessTestResultCom: React.FC<BusinessTestResultComProps> = ({ E, C, N, O, A }) => {

    let content_Strengths = "";
    let title_Strengths = titles.Advantage;
    let title_Limitations = titles.Disadvantage;
    let content_Limitations = "";


    const calculateContent = () => {
        if ((O >= 8 && O <= 25) && (A >= 8 && A <= 25)) {
            {
                content_Limitations = content_Limitations.concat(big5_O.Limitations_low_content);
                content_Limitations = content_Limitations.concat(big5_A.Limitations_low_content);
            }


        }
        //2th case
        else if ((O > 25 && O <= 45 && A >= 8 && A <= 25)) {


            content_Strengths = content_Strengths.concat(big5_O.Strengths_high_content);

            content_Limitations = content_Limitations.concat(big5_O.Limitations_high_content);
            content_Limitations = content_Limitations.concat(big5_A.Limitations_low_content);


        }
        //3th case
        else if ((O >= 8 && O <= 25) && (A > 25 && A <= 45)) {
            content_Strengths = content_Strengths.concat(big5_A.Strengths_high_content);

            content_Limitations = content_Limitations.concat(big5_O.Limitations_low_content);
            content_Limitations = content_Limitations.concat(big5_A.Limitations_high_content);

        }
        //4th case
        else if ((O > 25 && O <= 45) && (A > 25 && A <= 45)) {

            content_Strengths = content_Strengths.concat(big5_A.Strengths_high_content);
            content_Strengths = content_Strengths.concat(big5_O.Strengths_high_content);

            content_Limitations = content_Limitations.concat(big5_O.Limitations_high_content);
            content_Limitations = content_Limitations.concat(big5_A.Limitations_high_content);



        }//5th case
        if (O >= 0 && O < 8) {

            content_Limitations = content_Limitations.concat(big5_O.Limitations_low_content);

        }
        //6th case
        else if (O > 45 && O <= 50) {

            content_Strengths = content_Strengths.concat(big5_O.Strengths_high_content);

            content_Limitations = content_Limitations.concat(big5_O.Limitations_high_content);

        }
        //7th case
        if (A >= 0 && A < 8) {

            content_Limitations = content_Limitations.concat(big5_A.Limitations_low_content);

        }

        //8th case
        if (A > 45 && A <= 50) {

            content_Strengths = content_Strengths.concat(big5_A.Strengths_high_content);

            content_Limitations = content_Limitations.concat(big5_A.Limitations_high_content);



        }
        //N
        if (N >= 0 && N < 8) {
            content_Limitations = content_Limitations.concat(big5_N.Limitations_low_content);

            content_Strengths = content_Strengths.concat(big5_N.Strengths_low_content);
            console.log("9:");

        }
        else if (N >= 8 && N <= 25) {
            content_Strengths = content_Strengths.concat(big5_N.Strengths_low_content);


        }
        else if (N > 25 && N <= 45) {
            content_Limitations = content_Limitations.concat(big5_N.Limitations_high_content);

        }

        else if (N > 45 && N <= 50) {
            content_Limitations = content_Limitations.concat(big5_N.Limitations_high_content);

        }
        //E
        if (E >= 0 && E < 8) {
            content_Limitations = content_Limitations.concat(big5_E.Limitations_low_content);

        }
        else if (E >= 8 && E <= 25) {
            content_Strengths = content_Strengths.concat(big5_E.Strengths_low_content);
            content_Limitations = content_Limitations.concat(big5_E.Limitations_low_content);

        }
        else if (E > 25 && E <= 45) {
            content_Limitations = content_Limitations.concat(big5_E.Limitations_high_content);
            content_Strengths = content_Strengths.concat(big5_E.Strengths_high_content);

        }
        else if (E > 45 && E <= 50) {
            content_Limitations = content_Limitations.concat(big5_E.Limitations_high_content);
            content_Strengths = content_Strengths.concat(big5_E.Strengths_high_content);

        }
        //C
        if (C >= 0 && C < 8) {
            content_Limitations = content_Limitations.concat(big5_C.Limitations_low_content);

        }
        else if (C >= 8 && C <= 25) {
            content_Strengths = content_Strengths.concat(big5_C.Strengths_low_content);

        }
        else if (C > 25 && C <= 45) {
            content_Limitations = content_Limitations.concat(big5_C.Limitations_high_content);
            content_Strengths = content_Strengths.concat(big5_C.Strengths_high_content);

        }
        else if (C > 45 && C <= 50) {
            content_Limitations = content_Limitations.concat(big5_C.Limitations_high_content);
            content_Strengths = content_Strengths.concat(big5_C.Strengths_high_content);



        }
        //   console.log("Updated content_Strengths:", content_Strengths);
        return { content_Strengths, content_Limitations };
    }

    // State to track active tab and content
    const [activeTab, setActiveTab] = useState<string>(title_Strengths);
    const [activeContent, setActiveContent] = useState<string>(content_Strengths);


    // Calculate content based on props
    useEffect(() => {
        const { content_Strengths, content_Limitations } = calculateContent();
        //  console.log("Updated content_Limitations:", content_Strengths); 
        setActiveContent(activeTab === title_Strengths ? content_Strengths : content_Limitations);
    }, [activeTab, E, C, N, O, A]); // Recalculate when inputs change

    // console.log("content_Limitations",content_Limitations);
    //  console.log(" content_Strengths", content_Strengths);

    return (


        <div className="justify-center items-center  ">

            {/* Tabs */}
            <div className="flex justify-center items-center space-x-4  text-center    pt-10  ">
                <button
                    className={`  font-roboto text-base font-semibold  text-text-green2  md:text-lg   rounded-t-lg ${activeTab === title_Strengths ? " bg-text-green5  " : "bg-gray-200"}`}
                    onClick={() => setActiveTab(title_Strengths)}
                >
                    {title_Strengths}
                </button>
                <button
                    className={`font-roboto text-base font-semibold  text-text-green2   md:text-lg  rounded-t-lg  ${activeTab === title_Limitations ? " bg-text-green5  " : "bg-gray-200"}`}
                    onClick={() => setActiveTab(title_Limitations)}
                >
                    {title_Limitations}
                </button>
            </div>

            {/* Tab Content */}
            <div className="font-['Roboto'] ml-6 mr-6  font-medium text-sm md:text-lg text-left justify-center bg-text-green5 p-3">
                <div dangerouslySetInnerHTML={{ __html: activeContent }} />
            </div>

        </div>);
}


