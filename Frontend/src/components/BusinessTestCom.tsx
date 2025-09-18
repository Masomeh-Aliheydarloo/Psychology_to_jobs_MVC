import { useEffect, useState } from "react";
import { get, post } from "./api";
import storage from "./LocalStorage";

import { ResultAlert } from "./Alert";
import AddJobResultCom from "./AddJobResultCom";




interface LoginProps {
  onLogin: () => void;
  showresult: () => void;
}

export const BusinessTestCom: React.FC<LoginProps> = ({ onLogin, showresult }) => {


  interface Question {
    Qnumber: number,
    Qid: string,
    Qtitle: string,
    c: number,


  }
  interface SelectedQuestion {

    Qid: string,
    Score: number,
    Qnumber: number,

  }
  const [Q, setQ] = useState<Question[]>([]);
  const [SQ, setSQ] = useState<SelectedQuestion[]>([]);




  const elementperpage = 10;//count item in per page 

  const pid = storage.get('id');

  const [showResult, setShowResult] = useState(false);
  const [showResultno, setShowResultno] = useState(false);
  const [showResultJob, setShowResultJob] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

 
  useEffect(() => {
    const fetchQuestion = async () => {

      try {

        const response = await get("/api/businesstest");

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
  const selectQ = async (event: React.ChangeEvent<HTMLInputElement>, qlist: Question) => {


    event.target.setAttribute('disabled', 'disabled');

    setSQ(SQ.filter((q) => q.Qid !== qlist.Qid));

    let newQ: SelectedQuestion = { Qid: qlist.Qid, Score: parseInt(event.target.value), Qnumber: qlist.Qnumber };

    setSQ([newQ, ...SQ]);

  };
  const resultFunc = async (event: React.MouseEvent
  ) => {
    event.stopPropagation();
    if (currentPage !== 5) {
      window.scrollTo({
        top: 0,
        behavior: "auto"

      });
    }
    if (currentPage < 5) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 5) {
      let sumE = scoreE();
      console.log("sumE", sumE);
      let sumA = scoreA();
      console.log("sumA", sumA);
      let sumC = scoreC();
      console.log("sumC", sumC);
      let sumN = scoreN();
      console.log("sumN", sumN);
      let sumO = scoreO();
      console.log("sumO", sumO);
      InsertDB(sumE, sumA, sumC, sumN, sumO);
    }
  }
  function scoreE() {
    let reject = 0;
    let sum = 0;

    const list1 = SQ.filter((q) => q.Qnumber === 20);
    if (list1.length === 0) reject++;
    else sum = sum + Number(list1[list1.length - 1].Score);
    console.log("list1", list1);
    console.log("sum", sum);

    const list2 = SQ.filter((q) => q.Qnumber === 6);
    if (list2.length === 0) reject++;
    else {
      if (list2[list2.length - 1].Score === 1) { sum = sum + 5 }
      else if (list2[list2.length - 1].Score === 2) { sum = sum + 4 }
      else if (list2[list2.length - 1].Score === 3) { sum = sum + 3 }
      else if (list2[list2.length - 1].Score === 4) { sum = sum + 2 }
      else if (list2[list2.length - 1].Score === 5) { sum = sum + 1 }
    }

    console.log("list2", list2);
    console.log("sum", sum);

    const list3 = SQ.filter((q) => q.Qnumber === 11);
    if (list3.length === 0) reject++;
    else sum = sum + Number(list3[list3.length - 1].Score);
    console.log("list3", list3);
    console.log("sum", sum);


    const list4 = SQ.filter((q) => q.Qnumber === 16);
    if (list4.length === 0) reject++;
    else {
      if (list4[list4.length - 1].Score === 1) { sum = sum + 5 }
      else if (list4[list4.length - 1].Score === 2) { sum = sum + 4 }
      else if (list4[list4.length - 1].Score === 3) { sum = sum + 3 }
      else if (list4[list4.length - 1].Score === 4) { sum = sum + 2 }
      else if (list4[list4.length - 1].Score === 5) { sum = sum + 1 }

    }
    console.log("list4", list4);
    console.log("sum", sum);

    const list5 = SQ.filter((q) => q.Qnumber === 21);
    if (list5.length === 0) reject++;
    else sum = sum + Number(list5[list5.length - 1].Score);
    console.log("list5", list5);
    console.log("sum", sum);


    const list6 = SQ.filter((q) => q.Qnumber === 26);
    if (list6.length === 0) reject++;
    else {
      if (list6[list6.length - 1].Score === 1) { sum = sum + 5 }
      else if (list6[list6.length - 1].Score === 2) { sum = sum + 4 }
      else if (list6[list6.length - 1].Score === 3) { sum = sum + 3 }
      else if (list6[list6.length - 1].Score === 4) { sum = sum + 2 }
      else if (list6[list6.length - 1].Score === 5) { sum = sum + 1 }

    }
    console.log("list6", list6);
    console.log("sum", sum);

    const list7 = SQ.filter((q) => q.Qnumber === 31);
    if (list7.length === 0) reject++;
    else sum = sum + Number(list7[list7.length - 1].Score);
    console.log("list7", list7);
    console.log("sum", sum);


    const list8 = SQ.filter((q) => q.Qnumber === 36);
    if (list8.length === 0) reject++;
    else {
      if (list8[list8.length - 1].Score === 1) { sum = sum + 5 }
      else if (list8[list8.length - 1].Score === 2) { sum = sum + 4 }
      else if (list8[list8.length - 1].Score === 3) { sum = sum + 3 }
      else if (list8[list8.length - 1].Score === 4) { sum = sum + 2 }
      else if (list8[list8.length - 1].Score === 5) { sum = sum + 1 }

    }
    console.log("list8", list8);
    console.log("sum", sum);

    const list9 = SQ.filter((q) => q.Qnumber === 41);
    if (list9.length === 0) reject++;
    else sum = sum + Number(list9[list9.length - 1].Score);
    console.log("list9", list9);
    console.log("sum", sum);

    const list10 = SQ.filter((q) => q.Qnumber === 46);
    if (list10.length === 0) reject++;
    else {
      if (list10[list10.length - 1].Score === 1) { sum = sum + 5 }
      else if (list10[list10.length - 1].Score === 2) { sum = sum + 4 }
      else if (list10[list10.length - 1].Score === 3) { sum = sum + 3 }
      else if (list10[list10.length - 1].Score === 4) { sum = sum + 2 }
      else if (list10[list10.length - 1].Score === 5) { sum = sum + 1 }

    }

    console.log("list10", list10);
    console.log("sum", sum);

    console.log("reject", reject);
    if (reject >= 3) return 0;
    else return sum;

  }
  function scoreA() {
    let reject = 0;
    let sum = 0;

    const list1 = SQ.filter((q) => q.Qnumber === 14);
    if (list1.length === 0) reject++;
    else {
      if (list1[list1.length - 1].Score === 1) { sum = sum + 5 }
      else if (list1[list1.length - 1].Score === 2) { sum = sum + 4 }
      else if (list1[list1.length - 1].Score === 3) { sum = sum + 3 }
      else if (list1[list1.length - 1].Score === 4) { sum = sum + 2 }
      else if (list1[list1.length - 1].Score === 5) { sum = sum + 1 }
    }

    const list2 = SQ.filter((q) => q.Qnumber === 7);
    if (list2.length === 0) reject++;
    else sum = sum + Number(list2[list2.length - 1].Score);


    const list3 = SQ.filter((q) => q.Qnumber === 12);
    if (list3.length === 0) reject++;
    else {
      if (list3[list3.length - 1].Score === 1) { sum = sum + 5 }
      else if (list3[list3.length - 1].Score === 2) { sum = sum + 4 }
      else if (list3[list3.length - 1].Score === 3) { sum = sum + 3 }
      else if (list3[list3.length - 1].Score === 4) { sum = sum + 2 }
      else if (list3[list3.length - 1].Score === 5) { sum = sum + 1 }

    }

    const list4 = SQ.filter((q) => q.Qnumber === 17);
    if (list4.length === 0) reject++;
    else sum = sum + Number(list4[list4.length - 1].Score);


    const list5 = SQ.filter((q) => q.Qnumber === 22);
    if (list5.length === 0) reject++;
    else {
      if (list5[list5.length - 1].Score === 1) { sum = sum + 5 }
      else if (list5[list5.length - 1].Score === 2) { sum = sum + 4 }
      else if (list5[list5.length - 1].Score === 3) { sum = sum + 3 }
      else if (list5[list5.length - 1].Score === 4) { sum = sum + 2 }
      else if (list5[list5.length - 1].Score === 5) { sum = sum + 1 }

    }

    const list6 = SQ.filter((q) => q.Qnumber === 27);
    if (list6.length === 0) reject++;
    else sum = sum + Number(list6[list6.length - 1].Score);


    const list7 = SQ.filter((q) => q.Qnumber === 32);
    if (list7.length === 0) reject++;
    else {
      if (list7[list7.length - 1].Score === 1) { sum = sum + 5 }
      else if (list7[list7.length - 1].Score === 2) { sum = sum + 4 }
      else if (list7[list7.length - 1].Score === 3) { sum = sum + 3 }
      else if (list7[list7.length - 1].Score === 4) { sum = sum + 2 }
      else if (list7[list7.length - 1].Score === 5) { sum = sum + 1 }

    }

    const list8 = SQ.filter((q) => q.Qnumber === 37);
    if (list8.length === 0) reject++;
    else sum = sum + Number(list8[list8.length - 1].Score);

    const list9 = SQ.filter((q) => q.Qnumber === 42);
    if (list9.length === 0) reject++;
    else sum = sum + Number(list9[list9.length - 1].Score);

    const list10 = SQ.filter((q) => q.Qnumber === 47);
    if (list10.length === 0) reject++;
    else sum = sum + Number(list10[list10.length - 1].Score);


    console.log("reject", reject);
    if (reject >= 3) return 0;
    else return sum;

  }
  function scoreC() {
    let reject = 0;
    let sum = 0;

    const list1 = SQ.filter((q) => q.Qnumber === 14);
    if (list1.length === 0) reject++;
    else sum = sum + Number(list1[list1.length - 1].Score);

    const list2 = SQ.filter((q) => q.Qnumber === 8);
    if (list2.length === 0) reject++;
    else {
      if (list2[list2.length - 1].Score === 1) { sum = sum + 5 }
      else if (list2[list2.length - 1].Score === 2) { sum = sum + 4 }
      else if (list2[list2.length - 1].Score === 3) { sum = sum + 3 }
      else if (list2[list2.length - 1].Score === 4) { sum = sum + 2 }
      else if (list2[list2.length - 1].Score === 5) { sum = sum + 1 }
    }

    const list3 = SQ.filter((q) => q.Qnumber === 13);
    if (list3.length === 0) reject++;
    else sum = sum + Number(list3[list3.length - 1].Score);


    const list4 = SQ.filter((q) => q.Qnumber === 18);
    if (list4.length === 0) reject++;
    else {
      if (list4[list4.length - 1].Score === 1) { sum = sum + 5 }
      else if (list4[list4.length - 1].Score === 2) { sum = sum + 4 }
      else if (list4[list4.length - 1].Score === 3) { sum = sum + 3 }
      else if (list4[list4.length - 1].Score === 4) { sum = sum + 2 }
      else if (list4[list4.length - 1].Score === 5) { sum = sum + 1 }
    }


    const list5 = SQ.filter((q) => q.Qnumber === 23);
    if (list5.length === 0) reject++;
    else sum = sum + Number(list5[list5.length - 1].Score);

    const list6 = SQ.filter((q) => q.Qnumber === 28);
    if (list6.length === 0) reject++;
    else {
      if (list6[list6.length - 1].Score === 1) { sum = sum + 5 }
      else if (list6[list6.length - 1].Score === 2) { sum = sum + 4 }
      else if (list6[list6.length - 1].Score === 3) { sum = sum + 3 }
      else if (list6[list6.length - 1].Score === 4) { sum = sum + 2 }
      else if (list6[list6.length - 1].Score === 5) { sum = sum + 1 }
    }


    const list7 = SQ.filter((q) => q.Qnumber === 33);
    if (list7.length === 0) reject++;
    else sum = sum + Number(list7[list7.length - 1].Score);

    const list8 = SQ.filter((q) => q.Qnumber === 38);
    if (list8.length === 0) reject++;
    else {
      if (list8[list8.length - 1].Score === 1) { sum = sum + 5 }
      else if (list8[list8.length - 1].Score === 2) { sum = sum + 4 }
      else if (list8[list8.length - 1].Score === 3) { sum = sum + 3 }
      else if (list8[list8.length - 1].Score === 4) { sum = sum + 2 }
      else if (list8[list8.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list9 = SQ.filter((q) => q.Qnumber === 43);
    if (list9.length === 0) reject++;
    else sum = sum + Number(list9[list9.length - 1].Score);

    const list10 = SQ.filter((q) => q.Qnumber === 48);
    if (list10.length === 0) reject++;
    else sum = sum + Number(list10[list10.length - 1].Score);


    console.log("reject", reject);
    if (reject >= 3) return 0;
    else return sum;

  }
  function scoreN() {
    let reject = 0;
    let sum = 0;

    const list1 = SQ.filter((q) => q.Qnumber === 38);
    if (list1.length === 0) reject++;
    else {
      if (list1[list1.length - 1].Score === 1) { sum = sum + 5 }
      else if (list1[list1.length - 1].Score === 2) { sum = sum + 4 }
      else if (list1[list1.length - 1].Score === 3) { sum = sum + 3 }
      else if (list1[list1.length - 1].Score === 4) { sum = sum + 2 }
      else if (list1[list1.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list2 = SQ.filter((q) => q.Qnumber === 19);
    if (list2.length === 0) reject++;
    else sum = sum + Number(list2[list2.length - 1].Score);


    const list3 = SQ.filter((q) => q.Qnumber === 14);
    if (list3.length === 0) reject++;
    else {
      if (list3[list3.length - 1].Score === 1) { sum = sum + 5 }
      else if (list3[list3.length - 1].Score === 2) { sum = sum + 4 }
      else if (list3[list3.length - 1].Score === 3) { sum = sum + 3 }
      else if (list3[list3.length - 1].Score === 4) { sum = sum + 2 }
      else if (list3[list3.length - 1].Score === 5) { sum = sum + 1 }
    }

    const list4 = SQ.filter((q) => q.Qnumber === 19);
    if (list4.length === 0) reject++;
    else sum = sum + Number(list4[list4.length - 1].Score);


    const list5 = SQ.filter((q) => q.Qnumber === 24);
    if (list5.length === 0) reject++;
    else {
      if (list5[list5.length - 1].Score === 1) { sum = sum + 5 }
      else if (list5[list5.length - 1].Score === 2) { sum = sum + 4 }
      else if (list5[list5.length - 1].Score === 3) { sum = sum + 3 }
      else if (list5[list5.length - 1].Score === 4) { sum = sum + 2 }
      else if (list5[list5.length - 1].Score === 5) { sum = sum + 1 }
    }

    const list6 = SQ.filter((q) => q.Qnumber === 29);
    if (list6.length === 0) reject++;
    else {
      if (list6[list6.length - 1].Score === 1) { sum = sum + 5 }
      else if (list6[list6.length - 1].Score === 2) { sum = sum + 4 }
      else if (list6[list6.length - 1].Score === 3) { sum = sum + 3 }
      else if (list6[list6.length - 1].Score === 4) { sum = sum + 2 }
      else if (list6[list6.length - 1].Score === 5) { sum = sum + 1 }
    }


    const list7 = SQ.filter((q) => q.Qnumber === 34);
    if (list7.length === 0) reject++;
    else {
      if (list7[list7.length - 1].Score === 1) { sum = sum + 5 }
      else if (list7[list7.length - 1].Score === 2) { sum = sum + 4 }
      else if (list7[list7.length - 1].Score === 3) { sum = sum + 3 }
      else if (list7[list7.length - 1].Score === 4) { sum = sum + 2 }
      else if (list7[list7.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list8 = SQ.filter((q) => q.Qnumber === 39);
    if (list8.length === 0) reject++;
    else {
      if (list8[list8.length - 1].Score === 1) { sum = sum + 5 }
      else if (list8[list8.length - 1].Score === 2) { sum = sum + 4 }
      else if (list8[list8.length - 1].Score === 3) { sum = sum + 3 }
      else if (list8[list8.length - 1].Score === 4) { sum = sum + 2 }
      else if (list8[list8.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list9 = SQ.filter((q) => q.Qnumber === 44);
    if (list9.length === 0) reject++;
    else {
      if (list9[list9.length - 1].Score === 1) { sum = sum + 5 }
      else if (list9[list9.length - 1].Score === 2) { sum = sum + 4 }
      else if (list9[list9.length - 1].Score === 3) { sum = sum + 3 }
      else if (list9[list9.length - 1].Score === 4) { sum = sum + 2 }
      else if (list9[list9.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list10 = SQ.filter((q) => q.Qnumber === 49);
    if (list10.length === 0) reject++;
    else {
      if (list10[list10.length - 1].Score === 1) { sum = sum + 5 }
      else if (list10[list10.length - 1].Score === 2) { sum = sum + 4 }
      else if (list10[list10.length - 1].Score === 3) { sum = sum + 3 }
      else if (list10[list10.length - 1].Score === 4) { sum = sum + 2 }
      else if (list10[list10.length - 1].Score === 5) { sum = sum + 1 }
    }
    console.log("reject", reject);
    if (reject >= 3) return 0;
    else return sum;

  }
  function scoreO() {
    let reject = 0;
    let sum = 0;

    const list1 = SQ.filter((q) => q.Qnumber === 8);
    if (list1.length === 0) reject++;
    else sum = sum + Number(list1[list1.length - 1].Score);

    const list2 = SQ.filter((q) => q.Qnumber === 10);
    if (list2.length === 0) reject++;
    else {
      if (list2[list2.length - 1].Score === 1) { sum = sum + 5 }
      else if (list2[list2.length - 1].Score === 2) { sum = sum + 4 }
      else if (list2[list2.length - 1].Score === 3) { sum = sum + 3 }
      else if (list2[list2.length - 1].Score === 4) { sum = sum + 2 }
      else if (list2[list2.length - 1].Score === 5) { sum = sum + 1 }
    }
    const list3 = SQ.filter((q) => q.Qnumber === 15);
    if (list3.length === 0) reject++;
    else sum = sum + Number(list3[list3.length - 1].Score);

    const list4 = SQ.filter((q) => q.Qnumber === 20);
    if (list4.length === 0) reject++;
    else {
      if (list4[list4.length - 1].Score === 1) { sum = sum + 5 }
      else if (list4[list4.length - 1].Score === 2) { sum = sum + 4 }
      else if (list4[list4.length - 1].Score === 3) { sum = sum + 3 }
      else if (list4[list4.length - 1].Score === 4) { sum = sum + 2 }
      else if (list4[list4.length - 1].Score === 5) { sum = sum + 1 }

    }
    const list5 = SQ.filter((q) => q.Qnumber === 25);
    if (list5.length === 0) reject++;
    else sum = sum + Number(list5[list5.length - 1].Score);


    const list6 = SQ.filter((q) => q.Qnumber === 30);
    if (list6.length === 0) reject++;
    else {
      if (list6[list6.length - 1].Score === 1) { sum = sum + 5 }
      else if (list6[list6.length - 1].Score === 2) { sum = sum + 4 }
      else if (list6[list6.length - 1].Score === 3) { sum = sum + 3 }
      else if (list6[list6.length - 1].Score === 4) { sum = sum + 2 }
      else if (list6[list6.length - 1].Score === 5) { sum = sum + 1 }

    }

    const list7 = SQ.filter((q) => q.Qnumber === 35);
    if (list7.length === 0) reject++;
    else sum = sum + Number(list7[list7.length - 1].Score);


    const list8 = SQ.filter((q) => q.Qnumber === 40);
    if (list8.length === 0) reject++;
    else sum = sum + Number(list8[list8.length - 1].Score);

    const list9 = SQ.filter((q) => q.Qnumber === 45);
    if (list9.length === 0) reject++;
    else sum = sum + Number(list9[list9.length - 1].Score);

    const list10 = SQ.filter((q) => q.Qnumber === 50);
    if (list10.length === 0) reject++;
    else sum = sum + Number(list10[list10.length - 1].Score);


    console.log("reject", reject);
    if (reject >= 3) return 0;
    else return sum;

  }
  const InsertDB = async (sumE: number, sumA: number, sumC: number, sumN: number, sumO: number) => {

    let result = 0;
    if (sumE != 0 && sumA !== 0 && sumC !== 0 && sumN !== 0 && sumO !== 0) {
      result = 1;

    }
    try {

      const data: any = {
        pid, sumE, sumA, sumC, sumN, sumO, result
      };


      const response = await post('/api/insertbusinesstest', data);

      if (response.data) {//  data inserted              

        storage.set('exam2', true);
        storage.set('bresult', result);
        //can have job result
        if (result === 1 && storage.get("result") === '1')
          setShowResultJob(true);
        //cant have job result
        else if (result != 1 || storage.get("result") != '1')
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
      <p className=" text-center font-roboto font-medium text-base md:text-l  text-text_black dark:text-text_white">
        Using the key below, answer the questions based on how strongly you agree or disagree with the statement.<br />
      </p>
    </div>

    <div className=" flex justify-center font-roboto font-semibold p-2 space-x-2">
      <div className="text-text-green1">&nbsp; &nbsp; &nbsp;Disagree&nbsp; &nbsp; &nbsp;</div>
      <div className="text-text-green2">Slightly Disagree &nbsp;&nbsp;&nbsp;</div>
      <div className="text-text-green3">Neutral &nbsp;&nbsp;&nbsp;</div>
      <div className="text-text-green4"> Slightly Agree &nbsp;&nbsp;&nbsp;</div>
      <div className="text-text-green5"> Agree&nbsp; &nbsp; &nbsp;</div>
    </div>
    <div className="  md:w-[60%] mx-auto py-6  rounded-md" >


      <fieldset className="text-center space-y-8">
        {Q.slice((currentPage - 1) * elementperpage, (currentPage) * elementperpage).map((qlist) => (

          <div key={qlist.Qid} className=" p-4 rounded-md hover:text-text_light  text-text_black dark:text-text_white shadow-sm transition duration-200">
            <legend className="font-roboto font-medium text-base mb-4" > {qlist.c}/50.{qlist.Qtitle}  </legend>
            <div className="flex justify-center items-center gap-6 mt-4">



              <input type="radio" className="  cursor-pointer w-12 h-12 mr-10  " name={`question-${qlist.Qnumber}`}  id={`disagree-q1-3-${qlist.Qid}`} value={1} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className=" cursor-pointer w-10 h-10 mr-10" name={`question-${qlist.Qnumber}`} id={`disagree-q1-2-${qlist.Qid}`} value={2} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-8 h-8 mr-10" name={`question-${qlist.Qnumber}`} id={`neutral-q1-${qlist.Qid}`} value={3} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-10 h-10 mr-10" name={`question-${qlist.Qnumber}`} id={`agree-q1-2-${qlist.Qid}`} value={4} onChange={(event) => selectQ(event, qlist)} />


              <input type="radio" className="cursor-pointer w-12 h-12 mr-10" name={`question-${qlist.Qnumber}`} id={`agree-q1-3-${qlist.Qid}`} value={5} onChange={(event) => selectQ(event, qlist)} />





            </div>
          </div>))}
      </fieldset>
    </div>
    {/* Submit Button */}
    <div className="w-full max-w-6xl flex justify-end mt-4 pr-10 pb-4">
      <button type="submit" onClick={(event) => resultFunc(event)} className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black bg-blue-700 rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">
        Save choices for page {currentPage} of 5 &raquo;
      </button>
    </div>



    {/* Final Alert */}
    {showResult && (
      <ResultAlert onLogin={onLogin} showresult={showresult} message="🎉 Test completed successfully!" />
    )}
    {showResultno && (
      <ResultAlert onLogin={onLogin} showresult={showresult} message="Unfortunately, the test couldn't be saved. Please try again." />
    )}
    {showResultJob && (<><AddJobResultCom /> && <ResultAlert onLogin={onLogin} showresult={showresult} message="🎉 Test completed successfully!" /></>)}
  </>);
}