"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (email === "ak@gmail.com" && password === "password123") {
        toast.success("Logged in successfully!", {
          icon: "✅",
        });
        router.push("/");
      } else {
        toast.error("Incorrect login details", {
          icon: "🚫",
        });
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        icon: "🚫",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1F2937]">
      <div className="w-full md:max-w-xl lg:max-w-md p-8 bg-gray-800 rounded-lg">
        <div className="flex justify-center flex-col items-center mb-6">
          <h2 className="text-white text-2xl font-medium">Afribank Inc</h2>
          <Image
            src="/icons/logo.svg" // Replace with your logo's URL
            alt="Logo"
            className="w-16 h- mt-10"
          />
        </div>
        <h2 className="text-xl font-semibold text-center text-gray-200 mb-6">
          Sign In to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-600 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default SignIn;