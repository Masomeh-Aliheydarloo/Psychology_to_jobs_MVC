
import image from '../assets/JobInfo.webp';
import imageicon from '../assets/pro_typefinder.png';

export default function JobInfo() {

    return (
        <>

             {/* Banner image always visible */}
            <div className=" z-0 flex box-content relative  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center  ">

                <img className="rounded-xl h-80 w-full " src={image} alt="JobInfo"   ></img>
                <p className="absolute  text-text_white   left-15 top-60 text-2xl lg:text-4xl font-bold  ">Jobs Information</p>
            </div>


             {/* left image invisible in mobile size */}


            <div className="box-content  ml-auto mr-auto lg:w-[65%]  bg-light_bg_body 
           dark:bg-dark_bg_body justify-center" >


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4  ">

                    <div className=" mx-auto  my-auto hidden md:block"> < img className="lg:h-[100%] lg:w-[100%] z-0" src={imageicon} alt="PersonalityTest"   ></img></div>
                    <div className="col-span-2 mt-10 mr-5 ml-10 justify-center mb-5 font-roboto font-normal  text-base">
                        <p >TypeFinder® for the Workplace
                            Based on Briggs Myers’ theories, validated by decades of research
                            Fuels professional development with enlightening reports
                            Drives appreciation of diversity & improves teamwork and communication
                            TypeFinder® for the Workplace
                            Based on Briggs Myers’ theories, validated by decades of research
                            Fuels professional development with enlightening reports
                            Drives appreciation of diversity & improves teamwork and communication
                            TypeFinder® for the Workplace
                            Based on Briggs Myers’ theories, validated by decades of research
                            Fuels professional development with enlightening reports
                            Drives appreciation of diversity & improves teamwork and communication
                            Drives appreciation of diversity & improves teamwork and communication
                            TypeFinder® for the Workplace
                            Based on Briggs Myers’ theories, validated by decades of research
                            Fuels professional development with enlightening reports
                            Drives appreciation of diversity & improves teamwork and communication
                            Drives appreciation of diversity & improves teamwork and communication
                            TypeFinder® for the Workplace
                            Based on Briggs Myers’ theories, validated by decades of research
                            Fuels professional development with enlightening reports
                            Drives appreciation of diversity & improves teamwork and communication

                        </p>
                    </div>

                </div>
            </div>



        </>
    );
}
