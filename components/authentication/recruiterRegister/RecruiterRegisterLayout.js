import Link from "next/link";
import RecruiterForm from "./RecruiterForm";

const RecruiterRegisterLayout = () => {
  return (
    <div className="px-3 py-5 mt-9">
      <p className="text-right font-semibold font-mono">
        Existing Employers/Recruters?
        <Link href="/signin">
          <a className="text-blue-600 underline"> Sign In</a>
        </Link>
      </p>
      <div>
        <h1 className="text-2xl py-8 text-center font-bold font-serif">
          Create Recruiter Profile
        </h1>
        <RecruiterForm />
      </div>
    </div>
  );
};

export default RecruiterRegisterLayout;
