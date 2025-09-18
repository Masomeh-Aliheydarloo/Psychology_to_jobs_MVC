import { useEffect, useState } from "react";
import { get, post } from "./api";
import storage from "./LocalStorage";

import { ResultAlert } from "./Alert";

interface LoginProps {
  onLogin: () => void;
  showresult: () => void;
}

export const ClassBTestCom: React.FC<LoginProps> = ({ onLogin, showresult }) => {


  interface Question {
    QBnumber: number,
    QBid: string,
    QBtitle: string,
    c: number,


  }
  interface SelectedQuestion {

    QBid: string,
    Score: number,
    QBnumber: number,

  }
  const [Q, setQ] = useState<Question[]>([]);
  const [SQ, setSQ] = useState<SelectedQuestion[]>([]);




  // const elementperpage = 10;//count item in per page 

  const pid = storage.get('id');

  const [showResult, setShowResult] = useState(false);
  const [showResultno, setShowResultno] = useState(false);


  useEffect(() => {
    const fetchQuestion = async () => {

      try {

        const response = await get("/api/classBtest");

        if (response.data && Array.isArray(response.data)) {
          const questions = response.data as Question[];
          setQ(questions);
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


  console.log("q",Q);
  const selectQ = async (event: React.ChangeEvent<HTMLInputElement>, qlist: Question) => {


    event.target.setAttribute('disabled', 'disabled');

    setSQ(SQ.filter((q) => q.QBid !== qlist.QBid));

    let newQ: SelectedQuestion = { QBid: qlist.QBid, Score: parseInt(event.target.value), QBnumber: qlist.QBnumber };


    setSQ([newQ, ...SQ]);

  };
  const resultFunc = async (event: React.MouseEvent
  ) => {
    event.stopPropagation();
    event.preventDefault();

    let sum = score();
    console.log("sumE", sum);

    InsertDB(sum);

  }
  function score() {

    let sum = 0;

    const list1 = SQ.filter((q) => q.QBnumber === 1);
    if (list1.length != 0) sum = sum + Number(list1[list1.length - 1].Score);

    console.log("list1", list1);
    console.log("sum", sum);

    const list2 = SQ.filter((q) => q.QBnumber === 2);
    if (list2.length != 0) sum = sum + Number(list2[list2.length - 1].Score);

    console.log("list2", list2);
    console.log("sum", sum);

    const list3 = SQ.filter((q) => q.QBnumber === 3);
    if (list3.length != 0) sum = sum + Number(list3[list3.length - 1].Score);

    console.log("list3", list3);
    console.log("sum", sum);

    const list4 = SQ.filter((q) => q.QBnumber === 4);
    if (list4.length != 0) sum = sum + Number(list4[list4.length - 1].Score);

    console.log("list4", list4);
    console.log("sum", sum);

    const list5 = SQ.filter((q) => q.QBnumber === 5);

    if (list5.length !== 0) {
      if (list5[list5.length - 1].Score === 1) { sum = sum + 6 }
      else if (list5[list5.length - 1].Score === 2) { sum = sum + 5 }
      else if (list5[list5.length - 1].Score === 3) { sum = sum + 4 }
      else if (list5[list5.length - 1].Score === 4) { sum = sum + 3 }
      else if (list5[list5.length - 1].Score === 5) { sum = sum + 2 }
      else if (list5[list5.length - 1].Score === 6) { sum = sum + 1 }
    }

    console.log("list5", list5);
    console.log("sum", sum);

    const list6 = SQ.filter((q) => q.QBnumber === 6);
    // console.log("score", list3[list3.length - 1].Score);
    if (list6.length != 0) {
      if (list6[list6.length - 1].Score === 1) { sum = sum + 6 }
      else if (list6[list6.length - 1].Score === 2) { sum = sum + 5 }
      else if (list6[list6.length - 1].Score === 3) { sum = sum + 4 }
      else if (list6[list6.length - 1].Score === 4) { sum = sum + 3 }
      else if (list6[list6.length - 1].Score === 5) { sum = sum + 2 }
      else if (list6[list6.length - 1].Score === 6) { sum = sum + 1 }
    }
    console.log("list6", list6);
    console.log("sum", sum);





    const list7 = SQ.filter((q) => q.QBnumber === 7);
    // console.log("score", list6[list6.length - 1].Score);
    if (list7.length != 0) {
      if (list7[list7.length - 1].Score === 1) { sum = sum + 6 }
      else if (list7[list7.length - 1].Score === 2) { sum = sum + 5 }
      else if (list7[list7.length - 1].Score === 3) { sum = sum + 4 }
      else if (list7[list7.length - 1].Score === 4) { sum = sum + 3 }
      else if (list7[list7.length - 1].Score === 5) { sum = sum + 2 }
      else if (list7[list7.length - 1].Score === 6) { sum = sum + 1 }
    }
    console.log("list7", list7);
    console.log("sum", sum);

    const list8 = SQ.filter((q) => q.QBnumber === 8);
    if (list8.length != 0) sum = sum + Number(list8[list8.length - 1].Score);

    console.log("list8", list8);
    console.log("sum", sum);


    const list9 = SQ.filter((q) => q.QBnumber === 9);
    //  console.log("score", list8[list8.length - 1].Score);
    if (list9.length != 0) {
      if (list9[list9.length - 1].Score === 1) { sum = sum + 6 }
      else if (list9[list9.length - 1].Score === 2) { sum = sum + 5 }
      else if (list9[list9.length - 1].Score === 3) { sum = sum + 4 }
      else if (list9[list9.length - 1].Score === 4) { sum = sum + 3 }
      else if (list9[list9.length - 1].Score === 5) { sum = sum + 2 }
      else if (list9[list9.length - 1].Score === 6) { sum = sum + 1 }
    }
    console.log("list9", list9);
    console.log("sum", sum);


    const list10 = SQ.filter((q) => q.QBnumber === 10);
    if (list10.length != 0) sum = sum + Number(list10[list10.length - 1].Score);

    console.log("list10", list10);
    console.log("sum", sum);


    const list11 = SQ.filter((q) => q.QBnumber === 11);
    if (list11.length != 0) sum = sum + Number(list11[list11.length - 1].Score);

    console.log("list11", list11);
    console.log("sum", sum);

    const list12 = SQ.filter((q) => q.QBnumber === 12);
    if (list12.length != 0) sum = sum + Number(list12[list12.length - 1].Score);

    console.log("list12", list12);
    console.log("sum", sum);

    const list13 = SQ.filter((q) => q.QBnumber === 13);
     if (list13.length != 0) sum = sum + Number(list13[list13.length - 1].Score);

    console.log("list13", list13);
    console.log("sum", sum);

    const list14 = SQ.filter((q) => q.QBnumber === 14);
    if (list14.length != 0) sum = sum + Number(list14[list14.length - 1].Score);

    console.log("list14", list14);
    console.log("sum", sum);


    const list15 = SQ.filter((q) => q.QBnumber === 15);
    if (list15.length != 0) sum = sum + Number(list15[list15.length - 1].Score);

    console.log("list15", list15);
    console.log("sum", sum);

    const list16 = SQ.filter((q) => q.QBnumber === 16);
    if (list16.length != 0) sum = sum + Number(list16[list16.length - 1].Score);

    console.log("list16", list16);
    console.log("sum", sum);

    const list17 = SQ.filter((q) => q.QBnumber === 17);
    if (list17.length != 0) sum = sum + Number(list17[list17.length - 1].Score);

    console.log("list17", list17);
    console.log("sum", sum);

    const list18 = SQ.filter((q) => q.QBnumber === 18);
    if (list18.length != 0) sum = sum + Number(list18[list18.length - 1].Score);

    console.log("list18", list18);
    console.log("sum", sum);



    const list19 = SQ.filter((q) => q.QBnumber === 19);
    if (list19.length != 0) sum = sum + Number(list19[list19.length - 1].Score);

    console.log("list19", list19);
    console.log("sum", sum);

    const list20 = SQ.filter((q) => q.QBnumber === 20);
    if (list20.length != 0) {
      if (list20[list20.length - 1].Score === 1) { sum = sum + 6 }
      else if (list20[list20.length - 1].Score === 2) { sum = sum + 5 }
      else if (list20[list20.length - 1].Score === 3) { sum = sum + 4 }
      else if (list20[list20.length - 1].Score === 4) { sum = sum + 3 }
      else if (list20[list20.length - 1].Score === 5) { sum = sum + 2 }
      else if (list20[list20.length - 1].Score === 6) { sum = sum + 1 }
    }

    console.log("list20", list20);
    console.log("sum", sum);

    const list21 = SQ.filter((q) => q.QBnumber === 21);
   if (list21.length != 0) sum = sum + Number(list21[list21.length - 1].Score);
    console.log("list21", list21);
    console.log("sum", sum);

    const list22 = SQ.filter((q) => q.QBnumber === 22);
    if (list22.length != 0) sum = sum + Number(list22[list22.length - 1].Score);

    console.log("list22", list22);
    console.log("sum", sum);



    return sum;

  }
  // Insert data into the database
  const InsertDB = async (sum: number) => {
    let type = 'B'
    let result = 0;
    if (sum != 0) {
      result = 1;

    }
    try {

      const data: any = {
        pid, sum, result, type
      };


      const response = await post('/api/insertclasstest', data);

      if (response.data) {//  data inserted              

       
      storage.set('examB',true);
       setShowResult(true);


      }
      else if (response.data === null) {// fail to insert user
        setShowResultno(true);
        
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

  }




  return (<>
    <div className="pb-5 pt-5 pl-8 pr-8">
    <p className="  font-roboto  text-base font-semibold md:text-l  text-text-error">
        CLASS B: BIDIRECTIONAL COMMUNICATION (IMPACT and FEEDBACK)</p><p>
        <br/>This questionnaire will ask you to respond to a number of statements. You are asked to read each statement
carefully, and then think about whether the statement applies to you or does not apply to you. Then circle the
number that best describes how much you agree with the statement.<br />
      </p>
    </div>

     <div className=" flex w-full max-w-screen-sm md:max-w-screen-md text-center items-center  mx-auto justify-between font-roboto font-semibold p-2 space-x-2 md:text-base">
      <div className="text-text-green1 justify-center">Strongly <br />Disagree</div>
      <div className="text-text-green2 justify-center">Moderately <br />Disagree</div>
      <div className="text-text-green3 justify-center">Mildly <br />Disagree </div>
      <div className="text-text-green4  justify-center"> Mildly <br />Agree</div>
      <div className="text-text-green5 justify-center"> Moderately <br />Agree</div>
      <div className="text-text-green5 justify-center"> Strongly <br />Agree</div>
    </div>
    <div className="  w-full max-w-screen-sm md:max-w-screen-md mx-auto py-6  rounded-md" >


      <fieldset className="text-center space-y-8">
        {Q.map((qlist) => (

          <div key={qlist.QBid} className=" p-4 rounded-md hover:text-text_light  text-text_black dark:text-text_white shadow-sm transition duration-200">
            <legend className="font-roboto font-medium text-base mb-4" > {qlist.c}/22.{qlist.QBtitle}  </legend>
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-12 mt-4">



               <input type="radio" className="  cursor-pointer w-14 h-14  mr-4  " name={`question-${qlist.QBnumber}`} id={`disagree-q1-3-${qlist.QBid}`} value={1} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className=" cursor-pointer w-10 h-10 mr-4" name={`question-${qlist.QBnumber}`} id={`disagree-q1-2-${qlist.QBid}`} value={2} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-8 h-8 mr-4" name={`question-${qlist.QBnumber}`} id={`neutral-q1-${qlist.QBid}`} value={3} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-8 h-8 mr-4" name={`question-${qlist.QBnumber}`} id={`agree-q1-2-${qlist.QBid}`} value={4} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-10 h-10 mr-4" name={`question-${qlist.QBnumber}`} id={`agree-q1-3-${qlist.QBid}`} value={5} onChange={(event) => selectQ(event, qlist)} />

              <input type="radio" className="  cursor-pointer w-14 h-14  mr-4 " name={`question-${qlist.QBnumber}`} id={`disagree-q1-4-${qlist.QBid}`} value={6} onChange={(event) => selectQ(event, qlist)} />




            </div>
          </div>))}
      </fieldset>
    </div>
    {/* Submit Button */}
    <div className="w-full max-w-6xl flex justify-end mt-4 pr-10 pb-4">
      <button type="submit" onClick={(event) => resultFunc(event)} className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black bg-blue-700 rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">
        SAVE CHOICES
      </button>
    </div>



    {/* Final Alert */}
    {showResult && (
      <ResultAlert onLogin={onLogin} showresult={showresult} message="🎉 Test completed successfully!" />
    )}
    {showResultno && (
      <ResultAlert onLogin={onLogin} showresult={showresult} message="Unfortunately, the test couldn't be saved. Please try again." />
    )}
  </>);
}