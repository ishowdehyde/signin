"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import olawale from "@/app/image/ishowdehyde. new.png";

export default function myLogin() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("Login success", response.data);
      router.push("/profile");
    } catch (error: unknown) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 ">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg space-y-6">
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
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {loading ? "Processing" : "Login"}
        </h3>
        <hr className="mb-2 " />
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 required:"
          type="emall"
          id="email"
          value={user.email}
          placeholder="Enter your email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 required:"
          type="password"
          id="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={onLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200"
        >
          {buttonDisabled ? "No Login" : "Login"}
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Dont have account?
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign-Up here
          </Link>
        </p>
      </div>
    </div>
  );
}
