import React, { useEffect, useRef, useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Rooms from "../Chatrooms/Rooms";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import toast, { Toaster } from "react-hot-toast";
function Room() {
  const scrollableContainerRef = useRef(null);
  const MessageRef = useRef(null);
  const FileRef = useRef(null);
  const router = useRouter();
  const { room } = router.query;
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState(null);
  const [Messages, setMessages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const notify = () => toast.error("Please type something to send a Message");
  const remove = () => {
    setFilePreview(null);
    setSelectedFile(null);
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
  useEffect(() => {
    if (room) {
      if (scrollableContainerRef.current) {
        scrollableContainerRef.current.scrollTop =
          scrollableContainerRef.current.scrollHeight;
      }
      console.log(room[0]);

      const User = Users.filter((user) => user.id == room[0]);
      console.log(User);
      setMessages([]);
      setUser(User[0]);
    }
  }, [room]);
  const fetchData = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [room]);
  const override = {
    display: "block",
    marginRight: "50%",
    borderColor: "#6F9D55",
  };

  const handleClick = () => {
    // Click the hidden input when the div is clicked
    FileRef.current.click();
  };

  const Send = async () => {
    if (MessageRef.current.value === "" && !filePreview) {
      notify();
      return;
    }
    setMessages([...Messages, { message: "Sending..." }]);
    console.log(MessageRef.current.value, "message");

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    setMessages((prevArray) => {
      // Create a new array with all elements from the previous array
      const newArray = [...prevArray];
      // Update the last element with the new value
      newArray[newArray.length - 1] = { message: MessageRef.current.value };
      // Return the new array
      return newArray;
    });

    if (filePreview) {
      // setMessages([...Messages, { message: JSON.stringify(filePreview) }]);

      setMessages((prevArray) => {
        // Create a new array with all elements from the previous array
        const newArray = [...prevArray];
        // Update the last element with the new value
        newArray[newArray.length - 1] = {
          message: MessageRef.current.value,
          file: filePreview,
        };
        // Return the new array
        return newArray;
      });
    }
    console.log(typeof filePreview);
    console.log(Messages);
    // MessageRef.current.value = "";
    // setFilePreview(null);

    setFilePreview(null);
    setSelectedFile(null);
  };

  const handleFileChange = (event) => {
    // Get the selected file from the input event
    const file = event.target.files[0];
    console.log("Selected file:", event.target.files[0]);
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="flex h-screen bg-[#8DC26F]">
      <Rooms />
      {loading ? (
        <div className=" h-screen flex-1 flex justify-center items-center">
          <ClipLoader
            color={"#6F9D55"}
            loading={loading}
            size={150}
            // cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="  flex-col flex-1  bg-[#8DC26F] shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] shadow-black">
          <div className="flex   shadow-black justify-between items-center gap-3 p-2 bg-[#6F9D55]">
            <div className="flex gap-4">
              <div className="  h-14 w-14 rounded-full bg-white">
                <img
                  src={User?.ProfileImg}
                  className="  rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-white">
                  {User?.name}
                </h1>
                <p
                  className={`${
                    User?.status ? "text-green-300" : "text-orange-400"
                  }`}
                >
                  {User?.status ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex p-2 gap-2">
              <LocalPhoneIcon className="text-5xl text-white" />
              <VideoCallIcon className="text-5xl text-white" />
            </div>
          </div>
          <div
            ref={scrollableContainerRef}
            className=" overflow-y-auto bg-[#8DC26F] h-[550px] max-h-[550px] "
          >
            {Messages.map((message) => (
              <div className="p-2  flex gap-4 items-center bg-[#6F9D55] m-2 rounded-sm ">
                <div className=" flex flex-col justify-center items-center ">
                  <div className=" shadow-[0_0px_70px_0px_rgba(0,0,0,0.2)]  h-12 w-12 rounded-full bg-white">
                    <img
                      src={User?.ProfileImg}
                      className="  rounded-full object-cover"
                    />
                  </div>
                  <h1 className="text-xs font-bold text-white">10:35AM</h1>
                </div>
                <p className="text-white">
                  {message.message}
                  {message.file && (
                    <img
                      src={message.file}
                      alt="File Preview"
                      style={{ maxWidth: "110px", maxHeight: "110px" }}
                      className="shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] shadow-black m-2"
                    />
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className=" flex w-full h-[62px] items-center bg-[#6F9D55]">
            <input
              type="text"
              ref={MessageRef}
              className=" p-3 w-full outline-none bg-none bg-[#6F9D55] placeholder-white text-lg text-white"
              placeholder="Send a message.."
            />
            <div className="flex gap-3 justify-center items-center p-3">
              <div className="flex">
                {selectedFile && (
                  <div className="flex justify-center items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-50"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <h1 className="text-[0.5rem] text-gray-50 ">
                      {selectedFile.name}
                    </h1>
                  </div>
                )}
                <input
                  ref={FileRef}
                  onChange={handleFileChange}
                  type="file"
                  hidden
                />
                <div className=" rounded-full flex flex-col justify-center items-center">
                  <AttachFileIcon
                    onClick={handleClick}
                    className={`text-3xl hover:opacity-70 hover:scale-110 hover:text-green-400 text-white cursor-pointer rounded-full bg-none ${
                      filePreview && " text-green-400 "
                    } `}
                  />
                  <button
                    onClick={remove}
                    className={` text-sm  font-semibold text-gray-50 px-2 shadow-[0_0px_4px_0px_rgba(0,0,0,0.3)] shadow-black rounded-full ${
                      !filePreview && " hidden "
                    } `}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <SendIcon
                className="text-3xl cursor-pointer text-white hover:opacity-70 hover:scale-110 hover:text-green-400"
                onClick={Send}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room;
