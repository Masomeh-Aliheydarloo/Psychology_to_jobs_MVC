import image from '../assets/interRelation.jpg';
import { InterPResultCom } from '../components/InterPResultCom';





interface LoginProps {
    onLogin: () => void;
    
}
const InterPResult: React.FC<LoginProps> = ({ onLogin }) => {

    return (
        <>

            {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="InterPResult"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">InterPersonal Relationship Result</p>
            </div>
            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >
                <InterPResultCom onLogin={onLogin} ></InterPResultCom>
            </div>





        </>
    );
}
export default InterPResult;