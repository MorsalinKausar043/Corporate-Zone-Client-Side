import Image from "next/image";
import company from "../../../images/first_company.jpg";
import company_second from "../../../images/second_company.jpg";
import company_third from "../../../images/third_company.jpg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Navigation } from "swiper";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";



const CompanyJobs = (props) =>
{
  const [jobs, setJobs] = useState(props.jobs);
  const [widths, setWidths] = useState(0);
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();
  const router = useRouter();

  useEffect(() =>
  {
    fetch("https://murmuring-spire-15534.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) =>
      {
        setJobs(
          data.data
            .reverse()
            .filter(
              (e) =>
                e.jobTitle && e.jobDescription && e.companyLogo && e.companyName
            )
            .slice(0, 6)
        );
        console.log(data.data);
      });
  }, []);

  //slider
  useEffect(() =>
  {
    if (swiper) {
      console.log("Swiper instance:", swiper);
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  // responsive swiper
  useEffect(() =>
  {
    function handleResize ()
    {
      setWidths(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("mouseover", handleResize);
    return () =>
    {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);

  return (
    <div className="my-20">
      <div className="flex flex-wrap justify-center md:justify-between items-center md:w-8/12 mx-auto company_heading relative my-20 px-3">
        <h3 className="text-3xl font-medium text-slate-700 dark:text-white after:content-[''] after:absolute after:border-t-2 after:w-16 after:border-cyan-500 after:left-0 after:bottom-0 after:right-0 after:top-10 after:ml-36">
          Top Hiring Companies
        </h3>
        <ul className="flex md:float-right items-center mt-6 md:ml-0 md:mt-0 ">
          <li
            className="mx-3 text-xl font-bold cursor-pointer swiper-button"
            ref={prevRef}
          >
            <FcPrevious />
          </li>
          <li
            className="mx-3 text-xl font-bold cursor-pointer swiper-button"
            ref={nextRef}
          >
            <FcNext />
          </li>
        </ul>
      </div>

      <div className="px-4 md:px-0">
        <Swiper
          slidesPerView={`${widths < 580 ? 1 : 3}`}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          modules={[Navigation]}
          updateOnWindowResize
          observer
          observeParents
          onSwiper={setSwiper}
          className="lg:w-9/12 md:w-11/12 mx:mx-auto h-full"
        >
          {jobs?.map((job) => {
            return (
              <SwiperSlide
                key={job._id}
                className="bg-white dark:bg-slate-900 mb-3 rounded-lg px-6 py-8 ring-1 mx-2 ring-slate-900/5 text-center shadow-xl border-b-2 border-slate-800 hover:border-cyan-500 transform duration-500 hover:scale-95"
              >
                <div>
                  <Image
                    className="rounded w-full 2xl:h-56 lg:h-44 md:h-48 h-56 transition duration-300 transform group-hover:scale-125 group-hover:animate-pulse"
                    width="120"
                    height="100"
                    src={job?.companyLogo}
                    alt=""
                  />
                </div>
                <h3 className="text-slate-900 dark:text-white mt-3 text-base font-medium tracking-tight">
                  {job?.companyName}
                </h3>
                <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
                  {job?.companySize}
                </span>
                <br />
                <span className="text-slate-400 dark:text-white text-sm font-medium tracking-tight">
                  {job?.location}
                </span>
                <br />
                <p className="text-black block md:w-3/4 mx-auto mt-3 text-sm font-semibold hover:bg-[#36b9f7] p-2 rounded-lg bg-[#42C2FF] hover:text-white">
                  7 Openings
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CompanyJobs;
