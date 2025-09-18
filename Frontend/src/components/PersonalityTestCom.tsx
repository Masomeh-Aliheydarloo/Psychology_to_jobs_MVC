import { useEffect, useState } from "react";
import { get, post } from "./api";
import storage from "./LocalStorage";

import { useForm } from "react-hook-form";
import { ResultAlert } from "./Alert";


interface LoginProps {
  onLogin: () => void;
  showresult: () => void;
}

export const PersonalityTestCom:React.FC<LoginProps> =({ onLogin,showresult })=> {


  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      selectedQuestions: [],

    },
  });
  interface FormValues {
    selectedQuestions: string[];

  }
  interface Question {

    Qid: number,
    Qtitle: string,
    Catid: string,

  }

  const [Q, setQ] = useState<Question[]>([]);

  const [allSelections, setAllSelections] = useState<{ Qid: number; Catid: string }[]>([]);

  const elementperpage = 30;//count item in per page 116%30 = 4 pages
  //let result = 0;
  const pid = storage.get('id');

  const [showResult, setShowResult] = useState(false);
  const [showResultno, setShowResultno] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    const fetchQuestion = async () => {

      try {

        const response = await get("/api/personalitytest");

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

  
  const onSubmit = (data: FormValues) => {
    window.scrollTo({
      top: 0,
      behavior: "auto"

    });
    // const parsedSelections = data.selectedQuestions.map((item) => JSON.parse(item) as { Qid: number, Catid: string });
    //  console.log("Selected Qids:",  parsedSelections);
    // Merge with allSelections (state)
    const parsedSelections = data.selectedQuestions.map((item) =>
      JSON.parse(item) as { Qid: number; Catid: string }
    );

    // Merge with allSelections (state)
    const mergedSelections = [
      ...allSelections.filter(
        (prev) => !parsedSelections.some((curr) => curr.Qid === prev.Qid)
      ),
      ...parsedSelections,
    ];

    setAllSelections(mergedSelections); // Save merged results in state



    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage === 4) {

      // Final page: count everything
      const listA = mergedSelections.filter((q) => q.Catid === "A");
      const listB = mergedSelections.filter((q) => q.Catid === "B");
      const listC = mergedSelections.filter((q) => q.Catid === "C");
      const listD = mergedSelections.filter((q) => q.Catid === "D");
      const listE = mergedSelections.filter((q) => q.Catid === "E");
      const listF = mergedSelections.filter((q) => q.Catid === "F");
      const listG = mergedSelections.filter((q) => q.Catid === "G");
      const listH = mergedSelections.filter((q) => q.Catid === "H");

      console.log("A", listA.length);
      console.log("B", listB.length);
      console.log("C", listC.length);
      console.log("D", listD.length);
      console.log("E", listE.length);
      console.log("F", listF.length);
      console.log("G", listG.length);
      console.log("H", listH.length);



      // find Max1 Column and Max2 Column
      let maxColumn1: string = "";
      let maxColumn2: string = "";
      let result = 0;
      let firstMax: number = 0;
      let secondMax: number = 0;

      if (listA.length + listB.length + listC.length + listD.length < listE.length + listF.length + listG.length + listH.length)
        result = 0;
      else if (listA.length <= 3 || listB.length <= 3 || listC.length <= 3 || listD.length <= 3 || listE.length <= 3 || listF.length <= 3 || listG.length <= 3 || listH.length <= 3)
        result = 0;
      else if (listA.length !== 0 && listB.length === 0 && listC.length === 0 && listD.length === 0 && listE.length === 0 && listF.length === 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length !== 0 && listC.length === 0 && listD.length === 0 && listE.length === 0 && listF.length === 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length !== 0 && listD.length === 0 && listE.length === 0 && listF.length === 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length === 0 && listD.length !== 0 && listE.length === 0 && listF.length === 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length === 0 && listD.length === 0 && listE.length !== 0 && listF.length === 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length === 0 && listD.length === 0 && listE.length === 0 && listF.length !== 0 && listG.length === 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length === 0 && listD.length === 0 && listE.length === 0 && listF.length === 0 && listG.length !== 0 && listH.length === 0)
        result = 0;
      else if (listA.length === 0 && listB.length === 0 && listC.length === 0 && listD.length === 0 && listE.length === 0 && listF.length === 0 && listG.length === 0 && listH.length !== 0)
        result = 0;

      else {//accept

        result = 1;

        // if some codes are equal, the first column get for max1 column and other get for max2 column

        const lengths = [listA.length, listB.length, listC.length, listD.length];

        // Sort descending (largest to smallest)
        const sortedDesc = [...lengths].sort((a, b) => b - a);

        firstMax = sortedDesc[0];
        secondMax = sortedDesc[1];

        console.log("First max:", firstMax);
        console.log("Second max:", secondMax);

        //Code 1- should be 1  charachters
        if (firstMax <= listA.length) { maxColumn1 = "A"; }
        else if (firstMax <= listB.length) { maxColumn1 = "B"; }
        else if (firstMax <= listC.length) { maxColumn1 = "C"; }
        else if (firstMax <= listD.length) { maxColumn1 = "D"; }


        console.log("maxColumn1", maxColumn1);
        console.log("max1lenght", firstMax);


        //Code 2 - should be 1 charachters
        if (secondMax <= listA.length && maxColumn1 !== "A") { maxColumn2 = "A"; }
        else if (secondMax <= listB.length && maxColumn1 !== "B") { maxColumn2 = "B"; }
        else if (secondMax <= listC.length && maxColumn1 !== "C") { maxColumn2 = "C"; }
        else if (secondMax <= listD.length && maxColumn1 !== "D") { maxColumn2 = "D"; }

        console.log("maxColumn2", maxColumn2);
        console.log("max1lenght2", secondMax);





      }
      console.log("result", result);
      console.log("maxColumn1", maxColumn1);
      console.log("maxColumn2", maxColumn2);
      console.log("max1lenght", firstMax);
      console.log("max2lenght", secondMax);
      //insert to DB
      insertDB(result, maxColumn1, maxColumn2, firstMax, secondMax);


    }

  };
  const insertDB = async (result: number, code1: string, code2: string, code1_lenght: number, code2_lenght: number) => {
    try {

      const data: any = {
        pid, result, code1, code2, code1_lenght, code2_lenght
      };

      const response = await post('/api/insertpersonalitytest', data);

      if (response.data ) {//  data inserted              

        storage.set('exam1', true);
        setShowResult(true);
        // refresh page to show result
       
      }
      else if (response.data === null) {// fail to insert user
        setShowResultno(true);
       // navigate('/');
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
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="pb-5 pt-5 pl-8">
          <p className="font-roboto font-medium text-l md:text-xl  text-text_black dark:text-text_white">
            Please pick the choices that describe you most accurately:
          </p>
        </div>

        {/* Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 w-[90%] justify-between items-center bg-gray-50 rounded-lg shadow py-6">
            {Q.slice((currentPage - 1) * elementperpage, currentPage * elementperpage).map((qlist: Question) => (
              <div
                key={qlist.Qid}
                className="flex items-center space-x-2 p-4 border border-gray-300 rounded-md hover:bg-blue-50 shadow-sm"
              >
                <input
                  type="checkbox"
                  value={JSON.stringify({ Qid: qlist.Qid, Catid: qlist.Catid })}
                  {...register("selectedQuestions")}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />

                <label className="text-gray-700" htmlFor="selectedQuestions">{qlist.Qtitle}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full max-w-6xl flex justify-end mt-4 pr-10 pb-4">
          <button type="submit" className="font-roboto font-medium text-base  
                                 text-text_white dark:text-text_black bg-blue-700 rounded-lg px-7 mt-3   py-2.5 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav">
            Save choices for page {currentPage} of 4 &raquo;
          </button>
        </div>
      </form>

      {/* Final Alert */}
      {showResult && (
        <ResultAlert onLogin={onLogin} showresult={showresult} message="🎉 Test completed successfully!" />
      )}
      {showResultno && (
        <ResultAlert onLogin={onLogin} showresult={showresult} message="Unfortunately, the test couldn't be saved. Please try again." />
      )}
    </>
  );
}