
import { useState } from "react";
import data from "./result/Intra";
interface CircleData {
    label: string;
    onClick: () => void;
}

interface IntraResultComProps {
   
    C: number;
    N: number;
    O: number;
    
}



export const IntraResultCom: React.FC<IntraResultComProps> = ({ C, N, O }) => {


    const centerX = 200;
    const centerY = 250;
    const radius = 100;
    const orbitRadius = 190;

    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const [flag, setFlag] = useState(false);
    const [nullFlag, setNullFlag] = useState(false);


    const calculateContent = (type: string) => {
        setFlag(false);
        setNullFlag(false);
        switch (type) {
            case "O":
                if (O > 25 && O <= 45) {
                    setContent(data.O_content);
                    setTitle("Intellectual Openness");
                    setFlag(true);
                }
                else {
                setContent(data.Null_content);
                setNullFlag(true);
            }
            
                break;
            case "C":
                if (C > 25 && C <= 45) {
                    setContent(data.C_content);
                    setTitle("Work Ethic/ Conscientiousness");
                    setFlag(true);
                }
                else {
                    setContent(data.Null_content);
                     setTitle("Work Ethic/ Conscientiousness");
                    setNullFlag(true);
                }
                break;
            case "N":
                if (N >= 8 && N <= 25) {
                    setContent(data.N_content);
                    setTitle("Positive Core-self Evaluation");
                    setFlag(true);
                }
                else {
                    setContent(data.Null_content);
                    setTitle("Positive Core-self Evaluation");
                    setNullFlag(true);
                }
                break;
            default:
                setNullFlag(true);
                setContent(data.Null_content);
                
                  
        }
    };


    const circleData: CircleData[] = [
        { label: 'Intellectual Openness', onClick: () => calculateContent("O") },
        { label: 'Work Ethic/Conscientiousness', onClick: () => calculateContent("C") },
        { label: 'Positive Core-self Evalution', onClick: () => calculateContent("N") },
    ];

    const outerCircles = circleData.map((data, i) => {

        const labelParts = data.label.split(' '); // splits by spaces

const firstPart = labelParts.slice(0, Math.ceil(labelParts.length / 2)).join(' ');
const secondPart = labelParts.slice(Math.ceil(labelParts.length / 2)).join(' ');


        const angle = (2 * Math.PI / circleData.length) * i;
        const x = centerX + orbitRadius * Math.cos(angle);
        const y = centerY + orbitRadius * Math.sin(angle);

        return (
            <g key={i} onClick={data.onClick} className="cursor-pointer  font-semibold">
                <circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill="#87CEFA"
                />
                <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="14"
                    className="fill-black font-semibold text-base"
                >
                     {firstPart}
                </text>
                 <text
      x={x}
      y={y + 20} // adjust spacing between lines
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="14"
      className="fill-black"
    >
      {secondPart}
    </text>
            </g>
        );
    });


       
    return (
        <div className="w-full h-full bg-light_bg_body dark:bg-dark_bg_body py-5 px-4  ">
          <p className="font-roboto font-medium text-l md:text-xl  text-text_black dark:text-text_white">
           Tap an option to view your intrapersonal traits:
          </p>
            <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto ">
                {/* SVG Panel */}
                <div className="flex justify-center items-center ">
                    <svg
                        viewBox="0 0 500 500"
                        className=" 
        w-[300px] h-[330px]           /* default (mobile) size */
        sm:w-[350px] sm:h-[380px]     /* small screens and up */
        lg:w-[500px] lg:h-[550px]     /* large screens and up */
        mx-auto
    "
                    >
                        {/* Central Circle */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            fill="orange"
                        />
                        <text
                            x={centerX}
                            y={centerY - 10}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className=" font-semibold text-base"
                        >
                            INTRA-PERSONAL
                        </text>
                        <text
                            x={centerX}
                            y={centerY + 20}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className=" font-semibold text-base"
                        >
                            COMPETENCIES
                        </text>

                        {/* Outer Circles */}
                        {outerCircles}
                    </svg>
                </div>

                {/* Description Panel */}
                
                   
                    <div className="mx-auto my-auto justify-center items-center">
                        {flag  && 
                            <div className=" font-roboto leading-relaxed
                                px-4 mx-auto my-auto justify-center items-center border-2 border-light_bg_subnav dark:border-dark_bg_subnav rounded-lg p-4 ">
                                <p className=" font-roboto font-semibold text-sm  text-text_black dark:text-text_white  ">
                                    Example of  your {title} Skills in Action:
                                </p>
                                <p className="text-sm  md:text-base text-text-green3 whitespace-pre-line" >
                                 {content}
                                </p>
                            </div>
                        }
                        
                        {nullFlag && 
                          <div className=" font-roboto leading-relaxed
                                px-4 mx-auto my-auto justify-center text-sm items-center border-2 border-light_bg_subnav dark:border-dark_bg_subnav rounded-lg p-4">
                               <p className="font-semibold text-sm text-text_black dark:text-text_white  ">
                                Example of your {title} Skills in Action:
                            </p>
                                <p className="text-sm  md:text-base text-text-green3 whitespace-pre-line" >
                                    {content}
                                </p>
                            </div>}
                    </div>
                </div>
            </div>
        
    );
    
        
};