import Link from "next/link";
import CandidateForm from "./CandidateForm";

const CandidateRegisterLayout = () => {
  return (
    <div className="px-3 py-5 mt-9">
      <p className="text-right font-semibold font-mono">
        Existing Candidate?
        <Link href="/signin">
          <a className="text-blue-600 underline"> Sign In</a>
        </Link>
      </p>
      <div>
        <h1 className="text-2xl py-8 text-center font-bold font-serif">
          Create Candidate Profile
        </h1>
        <CandidateForm />
      </div>
    </div>
  );
};

export default CandidateRegisterLayout;
