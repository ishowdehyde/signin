"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import olawale from "@/app/image/ishowdehyde. new.png";

import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetail = async () => {
    const res = await axios.get("api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex-col items-center py-10 px-4 ">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="flex items-center justify-center text-4xl font-bold text-blue-600 mt-8">
          <Image
            src={olawale}
            alt="olawale"
            width="100"
            height="100"
            className="h-18 w-18 mr-4"
          />

          <div className="h-12 w-px bg-black mx-6"></div>

          <span>Ishow Portal</span>
        </h2>
        <div className="text-center">
          <Image
            className="w-24 h-24 rounded-full mx-auto"
            src="/profile.png"
            alt="profile"
            width={100}
            height={100}
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Ishola Abdulahi
          </h2>
          <h3 className="p-2 rounded bg-green-500">
            {data === "nothing" ? (
              "Nothing"
            ) : (
              <Link href={`/profile/${data}`}>{data}</Link>
            )}
          </h3>
          <p className="text-gray-600">Software Developer</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Email:</span>
            <span className="text-gray-800 w-3/4">
              olawaleishola250@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Location:</span>
            <span className="text-gray-800 w-3/4">Iyanaisashi, ojo</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 w-1/4">Bio:</span>
            <span className="text-gray-800 w-3/4">
              Passionate about teaching student and builing web apps and
              improving user experiences
            </span>
          </div>
        </div>
        <div className="mt-6 text-center flex justify-between">
          <button
            onClick={getUserDetail}
            className="bg-green-900 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Get UerDetail
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-red-700 -700 mr-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
