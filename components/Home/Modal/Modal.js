import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "heroicons-react";

const Modal = ({ setOpenModal }) => {
  // home page popup
  return (
    <div
      className="lg:w-5/12 lg:h-2/4 w-3/4 h-1/2 m-auto  fixed inset-0 z-30"
      style={{ height: "50" }}
    >
      <div className="w-full h-full  rounded-3xl bg-[#42C2FF] opacity-80 shadow-2xl flex flex-col p-3 hover:opacity-100 hover:transform duration-700 hover:scale-105 ease-in-out">
        <div className="flex justify-end">
          <button
            className="inline-flex items-center px-3 py-1 rounded-full text-lg font-semibold bg-red-500 hover:bg-red-700 text-white cursor-pointer z-50"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="relative bottom-36 flex justify-center mx-auto bg-[#42C2FF] rounded-t-full p-2">
          <Image
            src="https://i.ibb.co/263GPD3/jov.png"
            alt="job offer"
            width={160}
            height={175}
          />
        </div>
        <div className="relative lg:bottom-1/2 bottom-40 flex justify-between">
          <div className="border-r-2 pb-5 rounded-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <Image
                src="https://i.ibb.co/jk2pq6t/candidate-w.png"
                alt="candidate"
                width={80}
                height={100}
              />
            </div>
            <ul className="sm:w-40 w-auto h-auto space-y-3 text-slate-900 ">
              <li className="flex justify-center lg:text-sm text-xs ">
                <CheckCircle className="text-xl text-white mx-1" />
                Search for the right company
              </li>
              <li className="flex justify-center lg:text-sm text-xs">
                <CheckCircle className="text-xl text-white mx-1" />
                Search specific job for yourself
              </li>
              <li className=" 2xl:flex hidden  justify-center lg:text-sm text-xs">
                <CheckCircle className="text-xl text-white mx-1" />
                Find the best scope for you
              </li>
            </ul>
            <div className="flex justify-center items-center mt-2">
              <Link href="/jobs">
                <a className="text-base font-medium text-white bg-slate-900 rounded-full px-2 py-1 hover:bg-white hover:text-slate-900 shadow-md">
                  Get Job
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:mt-10 hidden md:block">
            <Image
              src="https://i.ibb.co/XSTCBWV/hiring.png"
              alt="job offer"
              width={350}
              height={300}
            />
          </div>
          <div className="border-l-2 rounded-full flex flex-col justify-center items-center pb-5">
            <div className="flex justify-center items-center">
              <Image
                src="https://i.ibb.co/s2FgzMm/recruiter-w.png"
                alt="recruiter"
                width={100}
                height={100}
              />
            </div>
            <ul className="sm:w-40 w-auto h-auto space-y-3">
              <li className="flex justify-center lg:text-sm text-xs">
                <CheckCircle className="text-xl text-white mx-1" />
                Show off your employer brand
              </li>
              <li className="flex justify-center lg:text-sm text-xs">
                <CheckCircle className="text-xl text-white mx-1" />
                Create global hiring opportunity
              </li>
              <li className="2xl:flex hidden justify-center lg:text-sm text-xs">
                <CheckCircle className="text-xl text-white mx-1" />
                Total effortless hiring process
              </li>
            </ul>
            <div className="flex justify-center items-center mt-2">
              <Link href="/jobpost">
                <a className="text-base font-medium text-white bg-slate-900 rounded-full px-2 py-1 hover:bg-white hover:text-slate-900 shadow-md">
                  Post Job
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
