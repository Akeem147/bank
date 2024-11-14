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
    } catch {
      toast.error("Something went wrong, please try again.", {
        icon: "🚫",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1F2937] overflow-hidden">
      <Toaster />

      <div className="flex flex-col items-center w-full md:max-w-xl lg:max-w-md  justify-center min-[414px]:gap-[140px] gap-[100px] md:gap-0 lg:gap-10">
        <div className="w-full md:max-w-xl lg:max-w-md p-8 bg-gray-800 rounded-lg">
          <div className="flex justify-center flex-col items-center mb-6">
            <Image
              src="/icons/logo.svg" // Replace with your logo's URL
              alt="Logo"
              className="mt-10"
              width={60}
              height={60}
            />
            <h2 className="text-white text-2xl font-medium">Afribank Inc.</h2>
          </div>

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
                className="mt-1 w-full px-2 py-2 border border-gray-600 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="mt-1 w-full px-2 py-2 border border-gray-600 bg-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <p className="text-white text-[14px]">Trouble Logging In?</p>
          </form>
        </div>

        <footer className="text-white flex items-center justify-center gap-2 w-full">
         <p className="border-r pr-3">Enroll</p>
         <p className="border-r pr-3">Become a Member</p>
         <p>Legal</p>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
