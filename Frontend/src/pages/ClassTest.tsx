import { useSearchParams } from 'react-router-dom';
import image from '../assets/supp.webp';
import { ClassATestCom } from '../components/ClassATestCom';
import { ClassBTestCom } from '../components/ClassBTestCom';
import { ClassCTestCom } from '../components/ClassCTestCom';
import { ClassETestCom } from '../components/ClassETestCom';
import { ClassDTestCom } from '../components/ClassDTestCom';




interface LoginProps {
    onLogin: () => void;
    showresult: () => void;
}
const ClassTest: React.FC<LoginProps> = ({ onLogin, showresult }) => {

    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');



    return (
        <>

            {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="ClassTest"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">Class {type} Test</p>
            </div>
            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
                {type === 'A' && (<ClassATestCom onLogin={onLogin} showresult={showresult} />)}
                {type === 'B' && (<ClassBTestCom onLogin={onLogin} showresult={showresult} />)}
                {type === 'C' && (<ClassCTestCom onLogin={onLogin} showresult={showresult} />)}
                {type === 'D' && (<ClassDTestCom onLogin={onLogin} showresult={showresult} />)}
                {type === 'E' && (<ClassETestCom onLogin={onLogin} showresult={showresult} />)}
            </div>





        </>
    );
}
export default ClassTest;