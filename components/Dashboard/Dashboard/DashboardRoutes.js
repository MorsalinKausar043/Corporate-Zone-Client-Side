import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import
{
  MdOutlineLogout,
  MdOutlineChevronLeft,
  MdOutlineMenu,
} from "react-icons/md";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import Jobs from "../Admin/Jobs";
import AddAdmin from "../Admin/AddAdmin";
import Candidate from "../Admin/Candidate";
import Company from "../Admin/Company";
import useFirebase from "../../../redux/slices/user/useFirebase";
import AdminRoutes from "./AdminRoutes";
import CandidateRoutes from "./CandidateRoutes";
import RecruiterRoutes from "./RecruiterRoutes";
import UpdateProfile from "../Recruiter/RecruiterProfileUpdate";
import RecruiteProfileUpdate from "../Recruiter/RecruiterProfileUpdate";
import CandidateProfileUpdate from "../Candidate/profileUpdate/CandidateProfileUpdate";
import CandidateProfile from "../Candidate/profileView/CandidateProfile";
import RecruiterProfile from "../Recruiter/profileView/RecruiterProfile";
import AdminProfile from "../Admin/AdminProfile";
import SkillTest from "../Candidate/skillTest/SkillTest";
import AppliedJobs from "../Candidate/AppliedJobs/AppliedJobs";
import ChatLayout from "../Messages/ChatLayout";
import BuildResume from "../Candidate/BuildResume/BuildResume";
import { FcVideoCall } from "react-icons/fc";
import Applicant from "../../Applicant/Applicant";
import PostedJobs from "../Recruiter/postedJobs/PostedJobs";
import CompanyLists from "../Candidate/CampalyLists";
import Dashboard from "../../../pages/dashboard/[...params]";
import Panel from "./Panel";
import OrderHistory from "../../Dashboard/Recruiter/OrderHistory/OrderHistory"

const DashboardRoutes = ({ jobs }) =>
{
  const [trigger, setTrigger] = useState(false);
  const router = useRouter();
  const { params = [] } = router.query;
  const dispatch = useDispatch();

  const { logOut } = useFirebase();

  const currentUser = useSelector((state) => state.user.currentUser);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // log out handler
  const logOutHandler = () =>
  {
    router.push("/");
    dispatch(logOut);
  };

  return (
    <>
      <div className="antialiased h-screen overflow-y-scroll chats relative lg:flex">
        <nav
          className={`absolute overflow-y-scroll chats lg:relative z-10 w-72 lg:transform-none lg:opacity-100 bg-[#00355f] text-white h-screen ${!trigger
            ? "inset-0 opacity-0 transform duration-200 -translate-x-full ease-out"
            : "inset-0 opacity-100 transform duration-200 translate-x-0 ease-in"
            }`}
        >
          <div className="flex justify-between items-center my-5 mr-5 ml-0 md:ml-4 py-5">
            <div className="flex flex-col items-center mx-auto">
              <Link href="/">
                <a className="flex justify-center md:justify-start items-center">
                  <img
                    src="https://i.ibb.co/z8GVp26/corzon.png"
                    className="w-12 h-12"
                    alt="logo"
                  />
                  <span className=" text-xl font-extrabold">
                    <span className="text-white whitespace-nowrap">CorporateZone</span>
                  </span>
                </a>
              </Link>
            </div>
            <MdOutlineChevronLeft
              onClick={() => setTrigger(false)}
              className="h-10 w-10  bg-pink-500 rounded-md cursor-pointer lg:hidden"
            />
          </div>
          {/* routes */}
          <div className="w-full">
            <ul className="px-2 py-5 ">
              {
                <li className="">
                  {/* candidate dashboard */}
                  {loggedInUser?.role === "candidate" && (
                    <CandidateRoutes setTrigger={setTrigger} />
                  )}
                  {/* recruiter dashboard */}
                  {loggedInUser?.role === "recruiter" && (
                    <RecruiterRoutes setTrigger={setTrigger} />
                  )}
                  {loggedInUser?.role === "admin" && (
                    <AdminRoutes setTrigger={setTrigger} />
                  )}

                  {/* shared for candidate and recruiter */}
                  {loggedInUser && loggedInUser?.role !== "admin" && (
                    <Link href={`/dashboard/chats`}>
                      <a
                        onClick={() => setTrigger(false)}
                        className=" py-4 text-lg font-extralight text-gray-300 hover:text-white   cursor-pointer flex items-center  px-10 "
                      >
                        <BsFillChatSquareDotsFill className="text-xl" />
                        &nbsp;&nbsp;&nbsp;Messages
                      </a>
                    </Link>
                  )}
                </li>
              }
            </ul>
          </div>
          {/* // log out button */}
          <div className="px-10 absolute md:bottom-10 bottom-4">
            <button onClick={logOutHandler}>
              <a className=" w-full py-2 px-10 text-md  mx-auto text-gray-300 border border-gray-500 rounded flex justify-center items-center mt-10 hover:text-white">
                <MdOutlineLogout className="text-2xl" />
                &nbsp;&nbsp;LogOut
              </a>
            </button>
          </div>
        </nav>
        <div className="relative z-0 lg:flex-grow">
          <header className="flex  items-center  py-2">
            <MdOutlineMenu
              onClick={() => setTrigger(true)}
              className="h-12 xl:hidden w-12 p-2 ml-2 hover:bg-pink-600 rounded-md cursor-pointer"
            />
            <div className="flex justify-center items-center ml-auto md:px-10 px-5">
              <h1 className="px-3 dark:text-white font-semibold ">{loggedInUser?.username}</h1>
              <div>
                {loggedInUser?.photoURL ? (
                  <img
                    src={loggedInUser?.photoURL}
                    className="w-12 h-12 border-2 border-gray-600"
                    style={{ borderRadius: "50%" }}
                    alt=""
                  />
                ) : (
                  <img
                    src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                    className="w-12 h-12 border-2 border-gray-600"
                    style={{ borderRadius: "50%" }}
                    alt=""
                  />
                )}
              </div>
            </div>
          </header>

          {/* route components */}
          <section
            className="p-5 bg-gray-100  overflow-y-scroll"
            style={{ height: "90vh" }}
          >
            {!params?.length ? (
              <div>
                <h1>Welcome to the dashboard</h1>
              </div>
            ) : null}

            {/* // admin route components */}

            {params[0] === "panel" && loggedInUser?.role === "admin" && (
              <Panel />
            )}
            {params[0] === "profile" && loggedInUser?.role === "admin" && (
              <div>
                <AdminProfile />
              </div>
            )}
            {params[0] === "jobs" && loggedInUser?.role === "admin" && (
              <div>
                <Jobs></Jobs>
              </div>
            )}
            {params[0] === "addadmin" && loggedInUser?.role === "admin" && (
              <div>
                <AddAdmin></AddAdmin>
              </div>
            )}
            {params[0] === "candidate" && loggedInUser?.role === "admin" && (
              <div>
                <Candidate></Candidate>
              </div>
            )}
            {params[0] === "company" && loggedInUser?.role === "admin" && (
              <div>
                <Company></Company>
              </div>
            )}

            {/* // recruiter route components */}

            {/* recruiter profile */}
            {params[0] === "panel" && loggedInUser?.role === "recruiter" && (
              <Panel />
            )}
            {params[0] === "profile" && loggedInUser?.role === "recruiter" && (
              <RecruiterProfile />
            )}
            {params[0] === "applicant" &&
              loggedInUser?.role === "recruiter" && <Applicant />}
            {params[0] === "postedJobs" &&
              loggedInUser?.role === "recruiter" && <PostedJobs />}
            {params[0] === "orderHistory" &&
              loggedInUser?.role === "recruiter" && <OrderHistory />}
            {/* update recruiter profile  */}
            {params[0] === "updateProfile" &&
              loggedInUser?.role === "recruiter" && <RecruiteProfileUpdate />}

            {/* candidate route components */}
            {params[0] === "panel" && loggedInUser?.role === "candidate" && (
              <Panel />
            )}
            {params[0] === "profile" && loggedInUser?.role === "candidate" && (
              <CandidateProfile />
            )}

            {/* candidate applied jobs*/}
            {params[0] === "appliedJobs" &&
              loggedInUser?.role === "candidate" && <AppliedJobs jobs={jobs} />}

            {/* candidate profile update */}
            {params[0] === "updateProfile" &&
              loggedInUser?.role === "candidate" && <CandidateProfileUpdate />}

            {/* candidate profile update */}
            {params[0] === "topCompanies" &&
              loggedInUser?.role === "candidate" && <CompanyLists />}

            {/* candidate profile update */}
            {params[0] === "buildResume" &&
              loggedInUser?.role === "candidate" && <BuildResume />}

            {/* candidate profile update */}
            {params[0] === "skillTest" &&
              loggedInUser?.role === "candidate" && <SkillTest />}

            {/* candidate profile update */}
            {params[0] === "chats" &&
              (loggedInUser?.role === "candidate" ||
                loggedInUser?.role === "recruiter") && <ChatLayout />}
          </section>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;
