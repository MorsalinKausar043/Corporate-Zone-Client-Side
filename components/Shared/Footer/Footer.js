// import React, { useRef } from "react";

import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import stripe from "../../../images/stripe.png";

import { useRef } from "react";
import Image from "next/image";


const Footer = () =>
{

  const form = useRef();

  const sendEmail = (e) =>
  {
    e.preventDefault();

    emailjs.sendForm(
      "service_xgz22ma",
      "template_kmbg1t2",
      form.current,
      "iTYZHZvfqHjV6ixNT"
    )
      .then(
        (result) =>
        {
          console.log(result.text);
          if (result.text) {
            return Swal.fire(
              "Thank You For Subscription!",
              "You will get skills required jobs within 24hrs!",
              "success"
            );
          }
          useRef.current('')
        },
        (error) =>
        {
          console.log(error.text);
        }
      );
  };

  return (
    <footer className="">
      <ScrollToTop
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
        color="#42C2FF"
        smooth
        top="1000"
      />
      <div className="text-center px:2 md:px-20 lg:text-left md:w-10/12 mx-auto  text-slate-700 dark:text-white">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
          <div className="mr-12 hidden lg:block">
            <span className="text-xl font-bold uppercase">
              Get your required jobs
            </span>
          </div>
          <div>
            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              className="flex justify-center items-center"
            >
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-l-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Enter your mail..."
                type="text"
                name="search"
              />
              <button className="bg-[#42C2FF] hover:bg-white px-3 py-2 text-white hover:text-[#42C2FF] font-medium rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mx-6 pt-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-sm space-y-3">
              <Link href="/">
                <a className="flex justify-center md:justify-start items-center">
                  <img
                    src="https://i.ibb.co/z8GVp26/corzon.png"
                    className="w-12 h-12"
                    alt="logo"
                  />
                  <span className=" text-xl font-extrabold">
                    <span className="dark:text-white text-slate-700 whitespace-nowrap">
                      CorporateZone
                    </span>
                  </span>
                </a>
              </Link>
              <p className="text-base leading-8 text-slate-700 dark:text-white">
                We strongly encourage employers to embrace diversity, equity,
                and inclusion as fundamental values when hiring through
                CorporateZone.
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Recruiter
              </h6>
              <p className="mb-2">
                <Link href="/jobpost">
                  <a className="">Post A Job</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/dashboard/applicant">
                  <a className="">Applicant</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/dashboard/chats">
                  <a className="">Live Chat</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/rules">
                  <a className="">Rules & Regulation</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Candidate
              </h6>
              <p className="mb-2">
                <Link href="/jobs">
                  <a className="">Get A Job</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/dashboard/topCompanies">
                  <a className="">Company List</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/dashboard/skillTest">
                  <a className="">Skill Test</a>
                </Link>
              </p>
              <p className="mb-2">
                <Link href="/dashboard/buildResume">
                  <a className="">Build Resume</a>
                </Link>
              </p>
            </div>

            <div className="text-base">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Hire Remotely
              </h6>
              <p className="text-base leading-8 text-slate-700 dark:text-white">
                Optimize your entire recruiting process. Post a job and reach
                thousands of engineers, developers, and other remote candidates.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pb-5 border-b border-gray-300">
          <div className="flex flex-wrap flex-row items-center text-gray-500 dark:text-gray-400 my-5 md:my-0">
            <p className="ml-3 text-xs md:text-sm">
              <Link href="/about">
                <a className="">About us</a>
              </Link>
            </p>
            <p className="ml-3 text-xs md:text-sm">
              <Link href="/contact">
                <a className="">Contact us</a>
              </Link>
            </p>

            <p className="ml-3 text-xs md:text-sm">
              <Link href="/policy">
                <a className="">Privacy Policy</a>
              </Link>
            </p>
          </div>
          <div className="mb-2">
            <Image src={stripe} width={300} height={80} alt="" />
          </div>
        </div>

        <div className="text-center py-5">
          <p className=" font-semibold text-slate-600 dark:text-white">
            CodExpress &copy; 2022, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
