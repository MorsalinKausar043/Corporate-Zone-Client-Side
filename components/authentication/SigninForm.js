import { useForm } from "react-hook-form";
import useFirebase from "../../redux/slices/user/useFirebase";
import job from "../../images/job_hunt.svg";
import Image from "next/image";
import Link from "next/link";

const SigninForm = () =>
{
  const { logInWithEmailAndPassword } = useFirebase();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
  {
    logInWithEmailAndPassword(data.email, data.password);
    console.log(data.email, data.password);

    //  router.push("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="#">
        <div className="flex items-center bg-gray-50">
          <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2 md:order-last mb-16">
                <Image
                  className="object-cover w-full h-full"
                  src={job}
                  alt="img"
                />
              </div>
              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div className="w-full">
                  <div className="flex justify-center">
                    <img
                      className="my-3"
                      src="https://i.ibb.co/V29yZ2z/logo-zone.png"
                      alt="logo"
                    />
                  </div>
                  <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                    Hassle Free Journey!
                  </h1>
                  <div className="mt-4">
                    <label className="block text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 block">
                        email is required
                      </span>
                    )}
                  </div>
                  <div>
                    <label className="block mt-4 text-sm">Password</label>
                    <input
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Password"
                      type="password"
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.{6,})/,
                      })}
                    />
                    <span className="text-sm text-red-500 block">
                      {errors.password?.type === "required" &&
                        "password  is required"}
                    </span>
                    <span className="text-sm text-red-500 block">
                      {errors.password?.type === "pattern" &&
                        "password must be 6 characters"}
                    </span>
                  </div>
                  <button
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                    href="#"
                  >
                    Sign in
                  </button>

                  <div className="mt-4 text-center">
                    <p className="text-sm">
                      Don't have an account yet?{" "}
                      <Link href="/signup">
                        <a className="text-blue-600 hover:underline">Sign up.</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
