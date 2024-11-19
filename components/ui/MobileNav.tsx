"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sidebarLinks1 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [hideBottomNav, setHideBottomNav] = useState(false);

  const currentPath = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setHideBottomNav(true);
      } else {
        setHideBottomNav(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearSessionAndRedirect = async () => {
    try {
      const response = await fetch("/api/sign-out", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");
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
      {/* Top bar */}
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

      {/* Logout Modal */}
      {showLogoutModal && (
  <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex justify-center items-center h-screen w-full">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-[90%]">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Confirm Sign Out
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          Are you sure you want to sign out? You’ll need to log in again to access your account.
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-6">
        <button
          className="flex-1 py-2 px-4 bg-gray-100 text-gray-600 font-medium rounded-lg hover:bg-gray-200 transition duration-150"
          onClick={() => setShowLogoutModal(false)}
        >
          Cancel
        </button>
        <button
          className="flex-1 py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-150"
          onClick={() => {
            setShowLogoutModal(false);
            clearSessionAndRedirect();
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
)}


      {/* Bottom Navigation */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-slate-100 border-t border-gray-300 shadow-md transition-transform duration-300 ${
          hideBottomNav ? "translate-y-full" : "translate-y-0"
        }`}
      >
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
    </div>
  );
}
