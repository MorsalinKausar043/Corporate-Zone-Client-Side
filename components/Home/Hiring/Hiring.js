import { BiAnalyse } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";


const Hiring = () =>
{
  return (
    <div className="space-y-7 mx-auto md:w-3/4 relative my-6 recent_header ">
      <h3 className="text-xl font-bold  md:text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 after:border-cyan-500 after:left-0 after:bottom-0 after:right-0 after:top-10 after:mx-auto md:font-medium mb-20 dark:text-white text-slate-800">
        Key Features For Exceptional Hiring
      </h3>
      <div className="md:flex md:justify-around lg:flex lg:justify-around ml-20 mx-3">
        <div className="md:w-2/4 lg:w-2/4">
          <img
            className="md:p-20 lg:p-20 transform hover:scale-105 duration-500"
            src="https://i.ibb.co/9p46Mkq/easyjobs-hiring-image-1-png.webp"
            alt=""
          />
        </div>
        <div className="space-y-5 md:w-2/4 lg:w-2/4 dark:text-white text-slate-800 md:mr-20 lg:mr-20 md:pr-10 mt-20 md:mt-0">
          <h3 className="text-3xl font-medium my-5">
            Get Your Entire Team Onboard
          </h3>

          <div className="flex items-center flex-col md:flex-row justify-between max-w-[500px] space-y-7 md:ml-5">
            <div>
              <FaUsers className="text-7xl mr-3 text-[#42C2FF]" />
            </div>
            <div className="space-y-3">
              <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                Collaborate & Enable Remote Hiring
              </h4>
              <p>
                Provide personalized team access to have full control over the
                recruiting team and make better & faster hiring decisions
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row justify-between max-w-[500px] space-y-7 md:ml-5">
            <div>
              <BiAnalyse className="text-7xl mr-3 text-[#42C2FF]" />
            </div>
            <div className="space-y-3">
              <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                Insightful Reports From Analytics
              </h4>
              <p>
                Use advanced & automated reports to track activities and
                monitor the recruiting team to improve the hiring workflow
              </p>
            </div>
          </div>

          <div className="flex items-center flex-col md:flex-row justify-between max-w-[500px] space-y-7 md:ml-5">
            <div>
              <MdOutlineNotificationsActive className="text-7xl mr-3 text-[#42C2FF]" />
            </div>
            <div className="space-y-3">
              <h4 className="md:text-xl lg:text-xl text-md font-semibold">
                Instant Smart Notifications
              </h4>
              <p>
                Get an instant notification to all the updates and also make
                your applicants alert for future activities to be prepared
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;