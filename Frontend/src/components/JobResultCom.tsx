import React, { useEffect, useState } from 'react';

import { post } from './api';
import storage from './LocalStorage';
import { ResultAlert } from './Alert';

interface LoginProps {
  onLogin: () => void;
  showresult: () => void;

}

export const JobResultCom: React.FC<LoginProps> = ({ onLogin, showresult }) => {
  interface Jobs {

    PJid: number,
    JobName: string,
    Selected: number,


  }
  interface SelectedJobs {

    PJid: number,
    Selected: number,

  }
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [selectedJobs, setSelectedJobs] = useState<SelectedJobs[]>([]);
  const [changed, Setchanged] = useState(false);
  //Error label

  //Error label
  const [showResult, setShowResult] = useState(false);
  const [showResultno, setShowResultno] = useState(false);

  const pid = storage.get("id");


  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const data: any = { pid };
        const response = await post("/api/jobresult", data);

        if (response.data && Array.isArray(response.data)) {



          setJobs(response.data);
        }
      } catch (error: any) {
        console.log("Error fetching test result:", error.message);
      }
    };

    fetchQuestion();

  }, []);

  const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>, job: Jobs) => {


    Setchanged(true);
    const selected = event.target.checked ? 1 : 0;

    
    // Update jobs state directly
    setJobs(prevJobs =>
      prevJobs.map(j =>
        j.PJid === job.PJid ? { ...j, Selected: selected } : j
      )
    );

  };
  const saveSelectedJobs = async (event: React.MouseEvent) => {
    event.stopPropagation();


    if (!changed) return;

    try {
      for (const job of jobs) {
        await post("/api/updatejobresult", {
          pjid: job.PJid,
          selected: job.Selected,
        });
      }

      setSelectedJobs([]);
      setShowResult(true);
    } catch (error) {
      console.error("Error saving selected jobs:", error);
      setShowResultno(true);
    }
  }

  return (<>


    <div className="flex flex-col items-center px-4 py-5">
      <p className="text-center font-roboto font-semibold text-base md:text-lg text-text_black dark:text-text_white mb-6">
        You can choose some options that are recommended for you:
      </p>

      <div className="flex flex-col w-full max-w-2xl border-2 border-light_bg_subnav dark:border-dark_bg_subnav rounded-lg p-6 space-y-6">
        {jobs.map((job) => (
          <div key={job.PJid} className="flex items-center gap-3 font-roboto font-medium text-text_black dark:text-text_white">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="jobCheckbox"
                checked={job.Selected === 1}
                onChange={(event) => handleCheckboxChange(event, job)}
                className="accent-blue-500 w-4 h-4"
              />
              <span>{job.JobName}</span>
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={saveSelectedJobs}
        className="mt-6 font-roboto font-medium text-base  text-text_white dark:text-text_black bg-blue-700 me-2 mb-2 
                                  bg-light_bg_subnav dark:bg-dark_bg_subnav px-7 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 transition"
      >
        SAVE MY SELECTED JOBS
      </button>
    </div>

    {/* Alerts */}
    {showResult && (
      <ResultAlert
        onLogin={onLogin}
        showresult={showresult}
        message="🎉 Your selection saved successfully!"
      />
    )}
    {showResultno && (
      <ResultAlert
        onLogin={onLogin}
        showresult={showresult}
        message="Unfortunately, your selection couldn't be saved. Please try again."
      />
    )}
  </>
  );
}

export default JobResultCom;