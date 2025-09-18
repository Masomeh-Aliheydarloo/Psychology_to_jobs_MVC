import { useEffect, useState } from "react";
import jfile from "../JobInfo/Final_Jobs_All.json";
import storage from "./LocalStorage";
import { post } from "./api";

export default function AddJobResultCom() {
  const [Result, SetResult] = useState(0);
  const [BResult, SetBResult] = useState(0);
  const [Jobs, SetJobs] = useState<string[]>([]);

  const [Code1, SetCode1] = useState("");
  const [Code2, SetCode2] = useState("");
  const [E, SetE] = useState(0);
  const [N, SetN] = useState(0);
  const [A, SetA] = useState(0);
  const [O, SetO] = useState(0);
  const [C, SetC] = useState(0);

  let jpass1 = false;
  let jpass2 = false;
  let jpass3 = false;
  let jpass4 = false;
  let jpass5 = false;
  let jpass6 = false;
  let jpass7 = false;

  let jName: string;//names of jobs



  let E_read: string = "";//E value that has read from excell file
  let N_read: string = "";//N value that has read from excell file
  let A_read: string = "";//A value that has read from excell file
  let O_read: string = "";//O value that has read from excell file
  let C_read: string = "";//C value that has read from excell file
  //https://stackoverflow.com/questions/47112864/how-do-i-access-the-children-of-a-json-object  //

  const pid = storage.get("id");

  const InsertDB = async (Jobs:string) => {
    console.log(Jobs);
    try {
      const data: any = { pid, Jobs };
      const response = await post("/api/insertjobresult", data);
      if (response.data) {
       console.log("Job inserted successfully");
      }
    } catch (error: any) {
      console.error("Error inserting jobs:", error.message);
    }
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data: any = { pid };
        const response = await post("/api/alltestsresult", data);

        console.log("Response data:", response.data);
        if (response.data && Array.isArray(response.data)) {


          const result = response.data[0];
          SetResult(result.Result);
          SetBResult(result.BResult);
          SetCode1(result.Code1);
          SetCode2(result.Code2);
          SetC(result.C);
          SetA(result.A);
          SetE(result.E);
          SetN(result.N);
          SetO(result.O);
        }
      } catch (error: any) {
        console.log("Error fetching test result:", error.message);
      }
    };

    fetchQuestion();






  }, [pid, Result, BResult, Code1, Code2, A, N, O, C, E]);

  Recursive(jfile);


  useEffect(() => {
    if (Jobs.length > 0)//has job recommendation
    {
     // console.log("Jobs", Jobs);
      for (let i = 0; i < Jobs.length; i++) {
        InsertDB(Jobs[i]);
      }

    }
  },);

  function isObject(target: any) {
    return typeof target === "object";
  }

  function Recursive(obj: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) {



    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        if (isObject(obj)) {
          let value = obj[key];

          if ((Array.isArray(value)) && value.length !== undefined) {
            jpass1 = false;
            jpass2 = false;
            jpass3 = false;
            jpass4 = false;
            jpass5 = false;
            jpass6 = false;
            jpass7 = false;

            N_read = "";
            A_read = "";
            C_read = "";
            O_read = "";
            E_read = "";

            jName = key;
          }

          if (key === "Code1" && value === Code1) jpass1 = true;
          if (jpass1 && key === "Code2" && value === Code2) jpass2 = true;
          if (jpass1 && jpass2 && key === "N") N_read = value;
          if (jpass1 && jpass2 && key === "E") E_read = value;
          if (jpass1 && jpass2 && key === "A") A_read = value;
          if (jpass1 && jpass2 && key === "O") O_read = value;
          if (jpass1 && jpass2 && key === "C") C_read = value;

          if (jpass1 && jpass2) {
            if (N_read === 'L' && (N >= 8 && N <= 25)) {
              jpass3 = true;

            }
            else if (N_read === 'H' && (N > 25 && N <= 45)) {
              jpass3 = true;

            }

            if (E_read === 'L' && (E >= 8 && E <= 25)) {
              jpass4 = true;

            }
            else if (E_read === 'H' && (E > 25 && E <= 45)) {
              jpass4 = true;

            }

            if (A_read === 'L' && (A >= 8 && A <= 25)) {
              jpass5 = true;

            }
            else if (A_read === 'H' && (A > 25 && A <= 45)) {
              jpass5 = true;

            }

            if (O_read === 'L' && (O >= 8 && O <= 25)) {
              jpass6 = true;

            }
            else if (O_read === 'H' && (O > 25 && O <= 45)) {
              jpass6 = true;

            }

            if (C_read === 'L' && (C >= 8 && C <= 25)) {
              jpass7 = true;

            }
            else if (C_read === 'H' && (C > 25 && C <= 45)) {
              jpass7 = true;

            }
          }

          if (jpass1 && jpass2 && jpass3 && jpass4 && jpass5 && jpass6 && jpass7) {
            if (!Jobs.includes(jName)) {
              SetJobs([jName, ...Jobs]);


              // InsertDB(jName);
            }
          }

          Recursive(obj[key]);
        }
    }
  }

  return <></>;
}