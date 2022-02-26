import React from "react";
import style from "./AddAdmin.module.css";

const AddAdmin = () => {
  return (
    <div className={style.add}>
      <h1>ADD ADMIN</h1>
      <hr />
      <div className={style.admin}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#311838",
              padding: "40px 20px",
              borderRadius: "20px",
            }}
          >
            <form>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                />
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Email address
                </label>
              </div>
              <button
                style={{ width: "300px" }}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;