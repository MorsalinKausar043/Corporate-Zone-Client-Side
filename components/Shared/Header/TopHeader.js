import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import Toggle from "./toggle";

const TopHeader = () =>
{
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="fixed top-8 right-0">
      <div className=" text-white dark:text-slate-800 ml-auto pl-10 md:w-40 relative md:flex hidden justify-between items-center">
        {/* signup and login */}
        <div className="lg:flex flex-col rounded-bl-lg rounded-tl-lg absolute top-16 ">
          {currentUser ? (
            <>
            </>
          ) : (
            <>
              <Link href="/signup">
                <a className="pl-4 font-semibold uppercase flex items-center space-x-3 font-serif pr-2 py-3  hover:text-white hover:transform duration-500 hover:scale-95 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg hover:bg-[#42C2FF]">
                  <FaUserAlt className="mr-2" /> Sign up
                </a>
              </Link>
              <Link href="/signin">
                <a className="pl-4 font-semibold uppercase flex items-center space-x-3  pr-2 py-3 hover:text-white hover:transform duration-500 hover:scale-95 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg hover:bg-[#42C2FF]">
                  <MdLogin className="mr-2" /> Sign In
                </a>
              </Link>
            </>
          )}
          <div className="font-light uppercase flex justify-center items-center space-x-3 font-serif p-2 hover:text-white hover:transform duration-500 hover:scale-95 border-2 border-[#42C2FF] text-[#42C2FF] rounded-bl-lg rounded-tl-lg hover:bg-[#42C2FF]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Toggle />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
