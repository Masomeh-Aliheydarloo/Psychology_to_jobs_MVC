
import { useEffect, useState } from "react";

import storage from "./LocalStorage";

import React from "react";
import { post } from "./api";



interface LoginProps {

    onLogin: () => void;

}


export const InterPResultCom: React.FC<LoginProps> = ({ onLogin }) => {

    interface classResult {

        Pid: number,
        Score: string,
        Type: string,
        Result: number

    }
    const [P, setP] = useState<classResult[]>([]);
    const [A, setA] = useState(false);
    const [B, setB] = useState(false);
    const [C, setC] = useState(false);
    const [D, setD] = useState(false);
    const [E, setE] = useState(false);

    const [Astatus, setAstatus] = useState("");
    const [Bstatus, setBstatus] = useState("");
    const [Cstatus, setCstatus] = useState("");
    const [Dstatus, setDstatus] = useState("");
    const [Estatus, setEstatus] = useState("");

    const classRows = [
        { key: "A", show: A, status: Astatus, title: "ASSERTION OF NEEDS", desc: " The term needs is used to stand for anything that you want including making requests for social support, or other needs you may have that are more practical." },
        { key: "B", show: B, status: Bstatus, title: "BIDIRECTIONAL COMMUNICATION", desc: " These statements describe how you impact or affect other people, how you give and respond to feedback. Feedback refers to the responses and reactions to your behavior or the behavior of others. Feedback is not just information provided in formal evaluations (i.e., in a work setting), it is the information from others that lets us know how we are doing. It may be verbal (expressed in words) or nonverbal (e.g., facial expressions)." },
        { key: "C", show: C, status: Cstatus, title: "CONFLICT", desc: " These statements describe how you identify and then deal with conflict that occurs between you and another person. Here, conflict refers to having disagreement, or an uncomfortable interaction with someone else. Although conflict can sometimes come before violence, in these questions conflict does NOT refer to violence. It is very important to avoid and stop violent interactions with others." },
        { key: "D", show: D, status: Dstatus, title: "DISCLOSURE", desc: " These statements describe how you may disclose, or talk about, yourself or your experiences with other people. Statements also describe your feelings about interpersonal closeness. Interpersonal closeness simply refers to being “connected to, “close with,” or “good friends with” another person. This kind of closeness may occur with friends, family, or romantic partners, but typically does not occur with casual acquaintances, such as neighbors or classmates that you seldom encounter. Interpersonally close relationships are those that involve telling others how we feel, being understood by another person, and appreciating others and their needs " },
        { key: "E", show: E, status: Estatus, title: "EMOTIONAL EXPRESSION", desc: "  The following statements describe how you identify and then express your feelings. The term “emotional experience” means all types of emotions or feelings that you have, not just the “negative” feelings like sadness, anxiety, loneliness, etc. These feelings also include love, pride, joy, humor, etc. Feelings may occur in the moment as you experience an event or interaction, or they may occur afterwards, like when you remember something." },
    ];
    useEffect(() => {

        onLogin();


        const pid = storage.get("id");
        const fetchQuestion = async () => {
            try {
                const data: any = { pid };
                const response = await post("/api/classtest", data);
                console.log("Response from classtest API:", response); // Log the entire response object
                if (response.data && Array.isArray(response.data) && response.data.length > 0) { // before did the classtest            

                    const dataCopy = [...response.data];
                    setP(dataCopy);
                    for (const item of dataCopy) {

                        if (item.Type === 'A') {
                            setA(true);
                            setAstatus(item.Score >= 21 && item.Score <= 63 ? "High" : "Low");
                        }
                        if (item.Type === 'B') {
                            setB(true);
                            setBstatus(item.Score >= 22 && item.Score <= 66 ? "High" : "Low");
                        }
                        if (item.Type === 'C') {
                            setC(true);
                            setCstatus(item.Score >= 21 && item.Score <= 63 ? "High" : "Low");
                        }
                        if (item.Type === 'D') {
                            setD(true);
                            setDstatus(item.Score >= 24 && item.Score <= 72 ? "High" : "Low");
                        }
                        if (item.Type === 'E') {
                            setE(true);
                            setEstatus(item.Score >= 23 && item.Score <= 69 ? "High" : "Low");
                        }
                    }

                }



            } catch (error: any) {
                console.log("Error fetching test result:", error.message);
            }
        };

        fetchQuestion();


    }, []);



    if (P.length === 0) {
        return (
            <div className="w-full h-full bg-light_bg_body dark:bg-dark_bg_body py-10 px-4 ">
                <p className="font-roboto font-medium text-l md:text-xl  text-text_black dark:text-text_white">
                    No result available. Please complete the test first.
                </p>
            </div>
        );
    }




    else if (P.length > 0) {

        return (
            <div className="w-full h-full bg-light_bg_body dark:bg-dark_bg_body py-10 px-4 ">
                <p className="font-roboto font-medium text-l md:text-xl  text-text_black dark:text-text_white">
                    Your Result of Interpersonal Relationship Test:
                </p>
                <div className="overflow-x-auto w-full">
                    <table className="w-full  mx-auto table-fixed  border  rounded-lg shadow-sm m-6 ">
                        <thead>
                            <tr>
                                <th className=" w-15 px-6 py-3 text-center text-sm medium font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                                    Class
                                </th>
                                <th className=" w-32 md:w-40   px-6 py-3 text-center text-sm medium font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                                    Title
                                </th>
                                <th className="px-6 py-3 text-center text-sm medium font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                                    Description
                                </th>
                                <th className=" w-20 px-6 py-3 text-center text-sm medium font-semibold font-roboto leading-relaxed  border-2 border-light_bg_subnav dark:border-dark_bg_subnav  p-6">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {classRows.map(
                                ({ key, show, status, title, desc }) =>
                                    show && (
                                        <tr key={key}>
                                            <td className=" w-15 px-6  text-center text-xs md:text-sm lg:text-base  font-roboto leading-relaxed border-2 border-light_bg_subnav dark:border-dark_bg_subnav text-text-green3  ">{key}</td>
                                            <td className="  w-32 md:w-40  px-6  text-center text-xs md:text-sm lg:text-base  font-roboto leading-relaxed border-2 border-light_bg_subnav dark:border-dark_bg_subnav text-text-green3  ">{title}</td>
                                            <td className="    px-6  text-left text-xs md:text-sm lg:text-base  font-roboto leading-relaxed border-2 border-light_bg_subnav dark:border-dark_bg_subnav text-text-green3  ">{desc}</td>
                                            <td className="w-15 px-6  text-center text-xs md:text-sm lg:text-base  font-roboto leading-relaxed border-2 border-light_bg_subnav dark:border-dark_bg_subnav text-text-green3 ">{status}</td>
                                        </tr>
                                    )
                            )}
                        </tbody>


                    </table>


                </div>
            </div>


        );

    }


};
