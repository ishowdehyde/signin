"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import olawale from "@/app/image/ishowdehyde. new.png";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Sign up failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
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
          {loading ? "Processing" : "Sign-up"}
        </h3>
        <hr className="mb-2 " />
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 required:"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 required:"
          id="password"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your Email"
        />
        <label
          className="block text-sm font-medium text-gray-700 mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4 required:"
          id="password"
          type="password"
          value={user.password}
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button
          onClick={onSignup}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-200"
        >
          {buttonDisabled ? "No sign-Up" : "SignUp"}
        </button>
        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline">
            Visit Login Page
          </Link>
        </p>
      </div>
    </div>
  );
}
