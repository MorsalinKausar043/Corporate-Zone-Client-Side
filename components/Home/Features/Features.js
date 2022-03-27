import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

const Features = (props) =>
{
  const [jobs, setJobs] = useState(props.jobs);
  const [widths, setWidths] = useState(0);
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
            .filter((e) => e.jobTitle && e.jobDescription && e.companyLogo)
            .slice(0, 5)
        );
        console.log(data.data);
      });
  }, []);

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
    <>
      <div className="space-y-7 mx-auto md:w-3/4 relative my-6 recent_header px-2 md:px-0">
        <h3 className="text-3xl text-center after:content-[''] after:absolute after:border-t-2 after:w-16 md:after:border-cyan-500 after:left-0 after:bottom-0 after:right-0 after:top-10 after:mx-auto font-medium text-slate-700 dark:text-white uppercase mb-20">
          Feature Jobs
        </h3>

        <Swiper
          //   navigation
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            centeredSlides: true,
          }}
          slidesPerView={`${widths < 580 ? 2 : 3}`}
          className="lg:w-9/12 md:w-11/12 mx-auto h-full"
          style={{ height: "350px", width:"100%" }}
        >
          {jobs?.map((job) => {
            return (
              <SwiperSlide
                key={job._id}
                className=" bg-cover flex flex-col items-center justify-center bg-white bg-center rounded-md shadow-md relative"
              >
                <img
                  className="block w-32 h-32 mx-auto "
                  src={job.companyLogo}
                />
                <button className="absolute left-3 top-3 bg-[#42C2FF] font-medium px-3 rounded-md text-gray-50">
                  {job?.jobType}
                </button>
                <div className="text-slate-800 rounded-md my-5 md:flex justify-between items-center md:w-8/12 space-y-3 w-100 mx-3">
                  <div>
                    <h2>{job?.jobTitle}</h2>
                    <h4 className="flex items-center py-2">
                      <FaRegMoneyBillAlt className="text-green-500 mr-2" />{" "}
                      <strong>{job?.salary}</strong>
                    </h4>
                    <h4 className="flex items-center ">
                      <GoLocation className="text-green-500 mr-2" />{" "}
                      <small>{job?.location}</small>
                    </h4>
                  </div>
                  <div className="flex flex-col space-y-3 lg:w-24 md:w-24">
                    <button
                      className="bg-[#42C2FF] font-medium text-gray-50 px-3 rounded-md"
                      onClick={() => router.push(`jobs/${job._id}`)}
                    >
                      APPLY
                    </button>
                    <button
                      className="bg-[#2a4a57] text-gray-50 font-medium px-3 rounded-md"
                      onClick={() => router.push("/jobs")}
                    >
                      See All
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Features;
