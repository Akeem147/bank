"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sidebarLinks1 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const currentPath = usePathname();

  const clearSessionAndRedirect = async () => {
    try {
      // Call the logout API to clear the server-side cookie
      const response = await fetch("/api/sign-out", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Remove any client-side tokens or session info
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");

        // Redirect the user to the sign-in page
        router.replace("/sign-in");
      } else {
        console.error("Failed to log out:", await response.text());
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  return (
    <div className="relative">
      {/* Logout button at the top */}
      <div className="fixed top-0 left-0 right-0 flex items-center bg-slate-100 z-40 shadow-sm justify-between p-3 md:p-4">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/icons/logo.svg" alt="Logo" width={30} height={30} />
          <h2 className="text-black text-xl font-medium">Uniti Bank</h2>
        </Link>
        <button
          onClick={handleLogout}
          className="font-medium flex items-center gap-2"
        >
          <Image
            className="rounded-[50%] object-cover w-8 h-8"
            src={"/icons/paris.avif"}
            width={24}
            height={24}
            alt="img"
          />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-100 border-t border-gray-300 shadow-md">
        <nav className="flex justify-around items-center py-2">
          {sidebarLinks1.map(({ imgURL: Icon, route, label }) => (
            <button
              key={route}
              onClick={() => router.push(route)}
              className={`flex flex-col items-center text-xs ${
                currentPath === route
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              {Icon ? (
                <Icon className="w-[25px] h-[25px]" />
              ) : (
                <span>Default Icon</span>
              )}
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l-4-4m0 0l-4-4m4 4H3m13 4v5m0-10V5m5 5H3"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Confirm Logout
            </h2>
            <p className="text-gray-500">
              Are you sure you want to log out of your account? You will need to
              log in again to access your information.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={clearSessionAndRedirect}
                className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition mb-20"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
