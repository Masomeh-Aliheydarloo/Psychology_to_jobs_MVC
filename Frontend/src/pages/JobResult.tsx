import image from '../assets/jobresult.webp';
import JobResultCom from '../components/JobResultCom';



interface LoginProps {
    onLogin: () => void;
    showresult: () => void;
}
const JobResult: React.FC<LoginProps> = ({ onLogin, showresult }) => {

    return (
        <>

            {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="JobResult"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">Job Result</p>
            </div>
            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
                <JobResultCom onLogin={onLogin} showresult={showresult}></JobResultCom>
            </div>





        </>
    );
}
export default JobResult;