import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    router.push("/Chatrooms/Rooms");
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  console.log(watch("email"));
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#8DC26F]">
      <h1 className="text-center text-white font-semibold text-4xl p-4 font-mono">
        Welcome to My Chat App
      </h1>
      <div className="p-8 bg-[#6F9D55] w-1/3 rounded-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col p-10 gap-8"
        >
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
            {...register("password", { required: true })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />

          <button
            className="text-white bg-[#76b852] border-none outline-none p-3 rounded-sm cursor-pointer"
            type="submit"
          >
            LOGIN
          </button>
        </form>
        <p className="text-center text-white">
          Don't have an Account?
          <button
            className="text-white p-2 font-bold cursor-pointer "
            onClick={handleClick}
          >
            {" "}
            Sign up!
          </button>
        </p>
      </div>
    </div>
  );
}
