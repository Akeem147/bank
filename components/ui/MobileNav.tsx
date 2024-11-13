"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { sidebarLinks1 } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { TbLogout } from "react-icons/tb";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLinkClick = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const logOut = () => {
    router.push("/sign-in");
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between px-3 py-4 md:px-4 md:py-5">
        <Link className="flex items-center gap-1" href={"/"}>
          <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
          <h1 className="text-xl font-medium">AfriBank</h1>
        </Link>
        <button
          onClick={handleMenu}
          className="text-black-1 rounded font-medium"
        >
          <Menu />
        </button>
      </div>

      {/* Sidebar with Slide-In Animation */}
      <div
        className={`fixed top-0 left-0 w-64 md:w-72 h-full bg-slate-100 text-black-2 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 flex flex-col justify-between h-full">
          {/* Top Section: Logo */}
          <div>
            <Link onClick={() => setIsOpen(false)} className="flex items-center gap-1 mb-10" href={"/"}>
              <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
              <h1 className="text-xl font-medium">AfriBank</h1>
            </Link>

            {/* Middle Section: Nav Links */}
            <div className="flex flex-col space-y-4">
              {sidebarLinks1.map(({ imgURL: Icon, route, label }) => (
                <button
                  key={route}
                  onClick={() => handleLinkClick(route)}
                  className="w-full flex items-center space-x-4 text-lg p-2 rounded my-1 hover:bg-blue-500 hover:text-white"
                >
                     {Icon ? (
               <span> <Icon  size={24} /></span> // Render React Icon if not null
              ) : (
                <span className="text-gray">Default Icon</span> // Fallback in case Icon is null
              )}
                  <span className="">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* Bottom Section: User Info and Logout */}
          <div className="p-4 border-t border-gray-300">
            <div className="flex items-center gap-1">
              <span className="text-black-1 bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center font-medium">
                A
              </span>
              <div className="flex flex-col ml-2 text-black-1">
                <h5 className="font-semibold text-sm">Odede Akeem</h5>
                <p className="text-xs">odedeakeem@gmail.com</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 flex items-center gap-2 text-black-1 font-semibold"
            >
              <span>Logout</span>
              <TbLogout size={25} />
            </button>
          </div>
        </nav>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-[#191919] bg-opacity-50 flex justify-center items-center">
          <div className="bg-slate-100 rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Are you sure you want to logout?
            </h2>
            <div className="flex justify-center gap-4 pt-5">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={logOut}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
