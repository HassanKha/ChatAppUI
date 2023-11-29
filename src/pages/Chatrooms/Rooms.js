import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

function rooms() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [Addroom, setAddroom] = useState(false);
  const [UsersAdded, setUsersAdded] = useState([]);

  const onSubmit = (data, e) => {
    if (e.nativeEvent.submitter.name === "Add") {
      console.log(data);
      setUsersAdded([
        ...UsersAdded,
        {
          id: Users.length + UsersAdded.length,
          email: data.email,
          name: data.Username,
          status: false,
          NotificationNumber: 0,
          ProfileImg:
            "https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png",
        },
      ]);
    } else if (e.nativeEvent.submitter.name === "Cancel") {
      // Logic for button 2
      setAddroom(false);
    }
  };
  const Users = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      status: true,
      NotificationNumber: 2,
      ProfileImg:
        "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg",
    },
    {
      id: 2,
      name: "Omar Ahmed",
      status: false,
      NotificationNumber: 1,
      ProfileImg:
        "https://www.shareicon.net/data/512x512/2016/06/25/786551_people_512x512.png",
    },
    {
      id: 3,
      name: "Hassan Khaled",
      status: true,
      NotificationNumber: 0,
      ProfileImg:
        "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    },
  ];

  const AddRoom = () => {
    setAddroom(true);
  };
  return (
    <div
      className={`   relative h-screen flex  flex-col items-center bg-[#8DC26F]`}
    >
      <div
        className={` ${
          Addroom && "opacity-10 bg-transparent bg-black"
        } h-full w-full`}
      >
        <div className="flex flex-1 pt-4 px-5 justify-between ">
          <h1 className="text-4xl text-center font-serif text-white">
            Chat Application
          </h1>
          <div className="flex gap-2 ">
            <AddCircleOutlinedIcon
              onClick={AddRoom}
              className="text-5xl text-white cursor-pointer hover:scale-110"
            />
            <SettingsIcon className="text-5xl text-white cursor-pointer hover:scale-110" />
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-1 justify-center items-center p-4 bg-[#6F9D55] rounded-lg  gap-2">
            <SearchIcon className="text-5xl text-white" />
            <input
              type="text"
              className="flex-1 p-3 outline-none bg-none bg-[#6F9D55] placeholder-white text-lg text-white"
              placeholder="Search For..."
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-5  m-5  ">
          {Users.map((user) => (
            <div
              onClick={() => router.push(`/Room/${user?.id}`)}
              key={user?.id}
              className=" cursor-pointer border-s-2 hover:shadow-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black  p-2 flex gap-2 items-center justify-between  bg-[#6F9D55] rounded-sm"
            >
              <div className="flex  gap-2">
                <div className=" h-12 w-12 rounded-full bg-white">
                  <img
                    src={user.ProfileImg}
                    className="  rounded-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-white font-bold text-lg">{user.name}</h1>
                  <p
                    className={` ${
                      user.status ? "text-green-300" : "text-orange-400"
                    }`}
                  >
                    {user.status ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="bg-white   h-5 w-5 rounded-full flex items-center justify-center">
                {user.NotificationNumber}
              </div>
            </div>
          ))}

          {UsersAdded.map((user) => (
            <div
              onClick={() => router.push(`/Room/${user?.id}`)}
              key={user?.id}
              className=" cursor-pointer border-s-2 hover:shadow-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black  p-2 flex gap-2 items-center justify-between  bg-[#6F9D55] rounded-sm"
            >
              <div className="flex  gap-2">
                <div className=" h-12 w-12 rounded-full bg-white">
                  <img
                    src={user.ProfileImg}
                    className="  rounded-full object-cover"
                  />
                </div>

                <div>
                  <h1 className="text-white font-bold text-lg">{user.name}</h1>
                  <p
                    className={` ${
                      user.status ? "text-green-300" : "text-orange-400"
                    }`}
                  >
                    {user.status ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="bg-white   h-5 w-5 rounded-full flex items-center justify-center">
                {user.NotificationNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${
          !Addroom && "hidden"
        } shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6F9D55] p-4`}
      >
        <form
          className=" flex flex-col p-10 gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />
          <input
            type="Username"
            name="Username"
            placeholder="Username"
            {...register("Username", { required: true })}
            className="outline-none rounded-sm border-white border-2 bg-none border-solid p-2 bg-[#6F9D55] bg-transparent text-gray-50 placeholder-white "
          />

          <button
            className="text-white hover:scale-110  border-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black  bg-[#76b852]  outline-none p-3 rounded-sm cursor-pointer"
            type="submit"
            name="Add"
          >
            Add Room
          </button>
          <button
            onClick={() => setAddroom(false)}
            type="submit"
            name="Cancel"
            className="text-white hover:scale-110  border-none shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] shadow-black  bg-[#76b852]  outline-none p-3 rounded-sm cursor-pointer"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default rooms;
