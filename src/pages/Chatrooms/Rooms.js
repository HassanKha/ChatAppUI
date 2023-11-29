import React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { useRouter } from "next/router";
function rooms() {
  const router = useRouter();
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
  return (
    <div className="h-screen flex  flex-col items-center bg-[#8DC26F]">
      <div className=" h-full w-full">
        <div className="flex flex-1 pt-4 px-5 justify-between ">
          <h1 className="text-4xl text-center font-serif text-white">
            Chat Application
          </h1>
          <div className="flex gap-2 ">
            <AddCircleOutlinedIcon className="text-5xl text-white" />
            <SettingsIcon className="text-5xl text-white" />
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
        </div>
      </div>
    </div>
  );
}

export default rooms;
