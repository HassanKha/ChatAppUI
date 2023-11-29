import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log("data", data);
    router.push("/Chatrooms/Rooms");
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/login/Login");
  };
  // const gotomain = (e) => {
  //   e.preventDefault();
  //   router.push("/Chatrooms/Rooms");
  // };
  console.log(watch("password"), "errors");
  console.log(errors, "errors");
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#8DC26F]">
      <h1 className="text-center text-white font-semibold text-4xl p-4 font-mono">
        Welcome to My Chat App
      </h1>
      <div className="p-6 bg-[#6F9D55] w-1/3 rounded-md">
        <form
          className=" flex flex-col p-10 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            name="Username"
            placeholder="Username"
            {...register("Username", { required: true })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: true,
            })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: true,
              validate: (val) => {
                if (watch("password") != val) {
                  return "Your passwords do no match";
                }
              },
            })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />
          <div className="flex flex-col justify-center items-center">
            <label className="flex justify-center items-center gap-2">
              <input
                type="checkbox"
                className="outline-none bg-none bg-[#6F9D55]"
                {...register("radio", { required: true })}
              />
              <span className="text-white text-center">
                I Agree To The Terms & Conditions
              </span>
            </label>
          </div>
          {Object.keys(errors).length > 0 && (
            <span className="text-white text-center"> Fields is Missing</span>
          )}
          <button
            className="text-white bg-[#76b852] border-none outline-none p-3 rounded-sm cursor-pointer"
            type="submit"
            // onClick={gotomain}
          >
            SIGNUP
          </button>
        </form>
        <p className="text-center text-white">
          Don't have an Account?
          <button
            onClick={handleClick}
            className="text-white p-2 font-bold cursor-pointer"
          >
            {" "}
            Login Now!
          </button>
        </p>
      </div>
    </div>
  );
}
