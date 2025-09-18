import { useEffect, useRef, useState } from "react";
import image from '../assets/truity_logo.webp';
import imagesmall from '../assets/truity_sticky_logo.webp';
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import storage from "./LocalStorage";

//https://dev.to/chintanonweb/the-ultimate-guide-to-crafting-a-responsive-header-with-react-and-tailwind-css-o7g
export interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
  showresult: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout, showresult }) => {
  const [nav, setNav] = useState(false);

  const [isTestMenuOpen, setIsTestMenuOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  const IsPassExam1 = Boolean(storage.get('exam1'));
  const IsPassExam2 = Boolean(storage.get('exam2'));
  const HasResult = Number(storage.get('result')) === 1 ? 1 : 0;
  const HasBResult = Number(storage.get('bresult')) === 1 ? 1 : 0;

  const IsPassA = Boolean(storage.get('examA'));
  const IsPassB = Boolean(storage.get('examB'));
  const IsPassC = Boolean(storage.get('examC'));
  const IsPassD = Boolean(storage.get('examD'));
  const IsPassE = Boolean(storage.get('examE'));



  useEffect(() => {
    showresult();
    const handleScroll = () => setNav(false);
    window.addEventListener('scroll', handleScroll);

    function handleClickOutside(event: MouseEvent) {

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsTestMenuOpen(false); // Close submenu
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  return (
    <>
      {isLoggedIn ? (<>
        <header className="sticky top-0 z-50 bg-light_bg_nav dark:bg-dark_bg_nav shadow-md">
          <nav >
            <div className="flex flex-wrap justify-between items-center max-w-screen-lg  ml-auto mr-auto lg:w-[65%] pl-0 pr-8 ">


              <div className="flex  order-2 " >
                <div className="md:hidden flex items-center lg:order-1 " >
                  <button
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-xs  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu"
                    aria-expanded={nav}
                    onClick={() => setNav(!nav)}
                  >
                    <span className="sr-only">Open main menu</span>
                    {nav ? (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>

                <Link to={"/"}  ><img src={imagesmall} className="md:hidden  h-14 ml-4" alt="LOGO" ></img></Link>
                <Link to={"/"} ><img src={image} className=" hidden md:block  h-16 ml-4" alt="LOGO"  ></img></Link>

              </div>
              {/*login and not give exam1*/}
              {(!IsPassExam1 && !IsPassExam2) && (
                <div
                  className={` font-roboto text-xs md:text-base  flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                      ? "absolute  z-10 inset-y-0 top-14  left-0 w-[35%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                      : "hidden md:flex gap-6  "
                    }`}
                >
                  <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                    <li className="flex items-center cursor-pointer  ">

                      <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  
                     text-xs md:text-base font-bold"
                        onClick={() => setNav(false)} to="/PersonalityTest">PERSONALITY TEST</Link>

                    </li>



                  </ul>

                </div>)}
              {/*login and  give exam1*/}
              {(IsPassExam1 && !IsPassExam2) && (<div
                className={` font-roboto text-xs md:text-base  flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                    ? "absolute  z-10 inset-y-0 top-14  left-0 w-[35%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                    : "hidden md:flex gap-6  "
                  }`}
              >
                <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs md:text-base font-bold"
                      onClick={() => setNav(false)} to="/PersonalityTestResult">PERSONALITY TEST RESULT</Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  w-[100%]
                     text-xs md:text-base font-bold"
                      onClick={() => setNav(false)}
                      to="/BusinessTest">BUSINESS TEST</Link>

                  </li>


                </ul>

              </div>)}
              {/*login and  give exam2 and exam1 but result of exam1 and exam2 are not ok*/}
              {(IsPassExam1 && IsPassExam2 && (HasResult === 1 && HasBResult === 0)) && (<div
                className={` font-roboto text-xs  flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                    ? "absolute  z-10 inset-y-0 top-14  left-0 w-[35%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                    : "hidden md:flex gap-6  "
                  }`}
              >
                <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                      onClick={() => setNav(false)} to="/PersonalityTestResult"> PERSONALITY TEST RESULT</Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/BusinessTestResult"> BUSINESS TEST RESULT</Link>

                  </li>


                </ul>

              </div>)
              }
              {/*login and  give exam2 and exam1 and result of exam1 and exam2 are ok*/}
              {(IsPassExam1 && IsPassExam2 && HasResult === 1 && HasBResult === 1) && (<div
                className={`  font-roboto   flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                    ? "absolute  z-10 inset-y-0 top-14  left-0 w-[45%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                    : "hidden md:flex gap-6  "
                  }`}
              >
                <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs font-bold "
                      onClick={() => setNav(false)} to="/PersonalityTestResult">
                      <span className="text-xs font-bold">
                        PERSONALITY
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        TEST RESULT
                      </span></Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  w-[100%]
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/BusinessTestResult">
                      <span className="text-xs font-bold">
                        BUSINESS
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        TEST RESULT
                      </span>
                    </Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  w-[100%]
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/IntraResult"> <span className="text-xs font-bold">
                        INTRA
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        RESULT
                      </span></Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  w-[100%]
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/InterResult">
                         <span className="text-xs font-bold">
                        INTER
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        RESULT
                      </span></Link>

                  </li>


                  {(!IsPassA || !IsPassB || !IsPassC || !IsPassD || !IsPassE) && (
                    <li ref={menuRef} className="relative group cursor-pointer  ">
                      {/* Main Button */}
                      <button
                        type="button"
                        onClick={() => setIsTestMenuOpen((prev: any) => !prev)}
                        className="flex items-center justify-between w-full py-2 pr-4 pl-3 md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav  md:p-0   border-b 
                     md:border-0
                     text-xs  font-bold"
                      >
                        
                         <span className="text-xs font-bold">
                         INTERPERSONAL
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        RELATIONSHIP TEST
                      </span>
                        <span className="ml-1 transform transition-transform duration-200 md:hidden">
                          {isTestMenuOpen ? '▲' : '▼'}
                        </span>
                        <span className="hidden md:inline ml-1">▼</span>
                      </button>

                      {/* Submenu */}
                      <ul
                        className={`
      absolute left-full top-0 mt-0   bg-white dark:bg-gray-800 shadow-md rounded-md w-[50%]  overflow-hidden items-center justify-between
      ${isTestMenuOpen ? 'block' : 'hidden'}  // Mobile toggle state
      md:w-[140%]  md:left-0 md:top-8  // Desktop hover state
    `}
                      >
                        {!IsPassA && (
                          <li>
                            <Link
                              to="/ClassTest?type=A"
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700   bg-light_bg_subnav dark:bg-dark_bg_subnav  border-b 
                      
                     text-xs  font-bold  text-text_light_subnav w-[100%]
                  dark:text-text_dark_subnav"
                              onClick={() => {
                                setIsTestMenuOpen(false);
                                setNav(false);
                              }}
                            >
                              Class A Test
                            </Link>
                          </li>
                        )}
                        {!IsPassB && (
                          <li>
                            <Link
                              to="/ClassTest?type=B"
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs  bg-light_bg_subnav dark:bg-dark_bg_subnav  border-b 
                   
                      font-bold  text-text_light_subnav w-[100%]
                  dark:text-text_dark_subnav"
                              onClick={() => {
                                setIsTestMenuOpen(false);
                                setNav(false);
                              }}
                            >
                              Class B Test
                            </Link>
                          </li>
                        )}
                        {!IsPassC && (
                          <li>
                            <Link
                              to="/ClassTest?type=C"
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs  bg-light_bg_subnav dark:bg-dark_bg_subnav  border-b 
                    
                     font-bold  text-text_light_subnav w-[100%]
                  dark:text-text_dark_subnav"
                              onClick={() => {
                                setIsTestMenuOpen(false);
                                setNav(false);
                              }}
                            >
                              Class C Test
                            </Link>
                          </li>)}
                        {!IsPassD && (
                          <li>
                            <Link
                              to="/ClassTest?type=D"
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs  bg-light_bg_subnav dark:bg-dark_bg_subnav  border-b 
                     
                     font-bold  text-text_light_subnav w-[100%]
                  dark:text-text_dark_subnav"
                              onClick={() => {
                                setIsTestMenuOpen(false);
                                setNav(false);
                              }}
                            >
                              Class D Test
                            </Link>
                          </li>
                        )}
                        {!IsPassE && (
                          <li>
                            <Link
                              to="/ClassTest?type=E"
                              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs  bg-light_bg_subnav dark:bg-dark_bg_subnav  border-b 
                    
                     font-bold  text-text_light_subnav w-[100%]
                  dark:text-text_dark_subnav"
                              onClick={() => {
                                setIsTestMenuOpen(false);
                                setNav(false);
                              }}
                            >
                              Class E Test
                            </Link>
                          </li>
                        )}
                      </ul>
                    </li>
                  )}

                  <li className="flex items-center cursor-pointer ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b 
                     md:border-0  md:p-0  w-[100%]
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/InterPResult">  <span className="text-xs font-bold">
                         INTERPERSONAL
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        RESULT
                      </span></Link>

                  </li>
                  <li className="flex items-center cursor-pointer ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav 
                     md:border-0  md:p-0  
                     text-xs  font-bold "
                      onClick={() => setNav(false)}
                      to="/JobResult"><span className="text-xs font-bold">
                         JOB
                        <span className="md:hidden"> </span>
                        <span className="hidden md:inline"><br /></span>
                        RESULT
                      </span></Link>

                  </li>
                </ul>

              </div>)
              }
               {/*login and  give exam2 and exam1 is not ok and result of exam1 and exam2 are ok*/}
              {(IsPassExam1 && IsPassExam2 && HasResult === 0 && HasBResult === 1) && (<div
                className={`  font-roboto   flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                    ? "absolute  z-10 inset-y-0 top-14  left-0 w-[35%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                    : "hidden md:flex gap-6  "
                  }`}
              >
                <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs font-bold "
                      onClick={() => setNav(false)} to="/PersonalityTestResult"> PERSONALITY<br />
                      TEST RESULT</Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/BusinessTestResult"> BUSINESS
                      TEST RESULT</Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/IntraResult"> INTRA RESULT</Link>

                  </li>
                  <li className="flex items-center cursor-pointer  ">

                    <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                      onClick={() => setNav(false)}
                      to="/InterResult"> INTER RESULT</Link>

                  </li>



                </ul>

              </div>)
              }
              <div className="inline-block right-0 items-end order-4">
                <ThemeToggle />
              </div>

            </div>

          </nav>

        </header>


        <div className=" font-roboto  flex h-8 w-full lg:w-[66.80%] xl:w-[66%] 2xl:w-[65%]  justify-end transition-all duration-300  
       bg-light_bg_subnav dark:bg-dark_bg_subnav ml-auto mr-auto  top-24 content-end text-right   " >
          <nav>
            <ul className="flex gap-6  mr-4 ">

              <li className="flex items-center cursor-pointer px-4 py-1 ">

                <Link className="block items-center  text-sm cursor-pointer md:text-base font-bold text-text_light_subnav dark:text-text_dark_subnav  "
                  to="/info" onClick={() => setNav(false)}>Account</Link>

              </li>
              <li className="flex items-center cursor-pointer px-4 py-1 ">

                <Link className="block items-center text-sm cursor-pointer md:text-base font-bold text-text_light_subnav dark:text-text_dark_subnav  "
                  to="/changepassword" onClick={() => setNav(false)}>Change Password</Link>

              </li>
              <li className="flex items-center cursor-pointer px-4 py-1 ">

                <Link className="block items-center text-sm cursor-pointer  md:text-base font-bold text-text_light_subnav dark:text-text_dark_subnav  "
                  to="/logout" onClick={() => { setNav(false); onLogout(); }}>Logout</Link>

              </li>

            </ul>
          </nav>
        </div>
      </>
      ) : (
        <>
          <header className="sticky top-0 z-50 bg-light_bg_nav dark:bg-dark_bg_nav shadow-md">
            <nav >
              <div className="flex flex-wrap justify-between items-center max-w-screen-lg  ml-auto mr-auto lg:w-[65%] pl-0 pr-8 ">


                <div className="flex  order-2 " >
                  <div className="md:hidden flex items-center lg:order-1 " >
                    <button
                      type="button"
                      className="inline-flex items-center p-2 ml-1 text-xs  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="mobile-menu"
                      aria-expanded={nav}
                      onClick={() => setNav(!nav)}
                    >
                      <span className="sr-only">Open main menu</span>
                      {nav ? (
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                    </button>
                  </div>

                  <Link to={"/"}  ><img src={imagesmall} className="md:hidden  h-14 ml-4" alt="LOGO" ></img></Link>
                  <Link to={"/"} ><img src={image} className=" hidden md:block  h-16 ml-4" alt="LOGO"  ></img></Link>

                </div>
                <div
                  className={` font-roboto text-xs  flex-col md:flex md:flex-row items-center md:bg-transparent md:dark:bg-transparent
                 bg-light_bg_subnav dark:bg-dark_bg_subnav  md:w-auto md:order-3 
                 transition-all duration-300  ${nav
                      ? "absolute  z-10 inset-y-0 top-14  left-0 w-[40%]  shadow-md    md:relative  md:top-0 md:w-auto md:shadow-none "
                      : "hidden md:flex gap-6  "
                    }`}
                >
                  <ul className="flex flex-col md:flex-row md:gap-8 gap-0  bg-light_bg_subnav dark:bg-dark_bg_subnav  md:bg-transparent md:dark:bg-transparent ml-0">
                    <li className="flex items-center cursor-pointer  ">

                      <Link className="block py-2 pr-4 pl-3 justify-center  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs font-bold "
                        onClick={() => setNav(false)} to="/PersonalityTestInfo">




                        PERSONALITY TEST

                      </Link>

                    </li>
                    <li className="flex items-center cursor-pointer  ">

                      <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                        onClick={() => setNav(false)}
                        to="/BusinessTestInfo" >



                        BUSINESS TEST

                      </Link>

                    </li>
                    <li className="flex items-center cursor-pointer ">

                      <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                        onClick={() => setNav(false)}
                        to="/IntraInfo">



                        INTRA/INTER PERSONAL TEST

                      </Link>

                    </li>


                    <li className="flex items-center cursor-pointer ">

                      <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav border-b w-[100%]
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                        onClick={() => setNav(false)}
                        to="/SupplementaryInfo">



                        INTERPERSONAL RELATIONSHIP TEST

                      </Link>

                    </li>
                    <li className="flex items-center cursor-pointer ">

                      <Link className="block py-2 pr-4 pl-3  md:text-text_light md:dark:text-text_dark  text-text_light_subnav
                  dark:text-text_dark_subnav
                     md:border-0  md:p-0  
                     text-xs  font-bold"
                        onClick={() => setNav(false)}
                        to="/JobInfo">



                        BEST JOB FOR YOU


                      </Link>

                    </li>
                  </ul>

                </div>
                <div className="inline-block right-0 items-end order-4">
                  <ThemeToggle />
                </div>

              </div>

            </nav>

          </header>

          <div className=" font-roboto  flex h-8 w-full lg:w-[66.80%] xl:w-[66%] 2xl:w-[65%]  justify-end transition-all duration-300  
       bg-light_bg_subnav dark:bg-dark_bg_subnav ml-auto mr-auto  top-24 content-end text-right   " >

            <nav>
              <ul className="flex gap-6  mr-4 ">
                <li className="flex items-center cursor-pointer  ">

                  <Link className="block   text-sm md:text-base font-bold text-text_light_subnav dark:text-text_dark_subnav  "
                    to="/login" onClick={() => setNav(false)}>Login</Link>

                </li>
                <li className="flex items-center cursor-pointer  ">

                  <Link className="block text-sm md:text-base font-bold text-text_light_subnav dark:text-text_dark_subnav  "
                    to="/signup" onClick={() => setNav(false)}>SignUp</Link>

                </li>

              </ul>
            </nav>
          </div>
        </>
      )}

    </>
  );
}

