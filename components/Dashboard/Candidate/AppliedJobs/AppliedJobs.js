import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const AppliedJobs = ({ jobs }) => {
  const [myJobs, setMyJobs] = useState([]);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch(
          `http://localhost:4030/appliedJobs?email=${loggedInUser?.email}`
        )
      ).json();
      setMyJobs(data);
    };
    fetchData();
  }, []);

  // handling error if no jobs found
  if (!myJobs.length) {
    return (
      <div className="bg-white py-5 xl:px-20 md:px-5 px-2">
        <h1 className="text-lg font-serif text-red-500">
          You haven't applied any jobs yet! {jobs?.length}
        </h1>
        <p className="py-5 font-serif text-xl font-bold">
          Go and apply
          <Link href="/jobs">
            <a className="text-blue-500 underline">Jobs</a>
          </Link>
        </p>
      </div>
    );
  } else {
    // jobs here
    return (
      <div className="overflow-x-scroll bg-white py-5 xl:px-20 md:px-5 px-2">
        <table className="min-w-full">
          {/* table head */}
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                TITLE
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                COMPANY
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Job Type
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Status
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Applied Date
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* table body */}
            {myJobs?.map((job) => (
              <>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {job.jobTitle}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {job.companyName}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {job.jobType}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {job.status}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    {new Date(job.appliedDate).toDateString()}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AppliedJobs;