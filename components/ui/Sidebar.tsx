"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  // Handle logout action
  const handleLogout = () => {
    setShowModal(true)
  };

  const logOut = () => {
    router.push("/sign-in"); 
  }

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4 bg-slate-100 bg-opacity-5">
        <Link
          className="mb-12 cursor-pointer items-center gap-2 flex pt-1"
          href={"/"}
        >
          <Image
            className="size-[20px] max-xl:size-8"
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
          />
          <h1 className="sidebar-logo">AfriBank</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              key={item.label}
              href={item.route}
            >
              <div className="relative size-5">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto p-4 flex flex-col items-start">
        <div className="flex items-center gap-1">
          <span className="text-black bg-gray-200 w-10 h-10 rounded-full items-center justify-center flex font-medium">
            A
          </span>
          <div className="flex flex-col text-black mb-2">
            <h5 className="text-black font-semibold text-sm">Odede Akeem</h5>
            <p className="text-black text-xs">odedeakeem@gmail.com</p>
          </div>
        </div>
        <button onClick={handleLogout} className="mt-2 flex items-center gap-2 text-black">
          <span className="font-semibold">Logout</span>
          <TbLogout size={25} />
        </button>
      </div>

      {/* Confirmation Modal */}
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
    </section>
  );
}