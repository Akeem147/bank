
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BankCard() {
  return (
    <div className="flex flex-col">
      <Link className="bank-card" href="/">
        <div className="bank-card_content">
          <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
          <img
            src="/icons/logo.svg" // Replace with your logo's URL
            alt="Logo"
            className="w-6 h-6"
          />
            <h2 className="text-white font-medium">Afribank</h2>
          </div>
           <Image src="/icons/bank-chip.jpg" width={30} height={30} alt="cjip" />
          </div>
          <article className="flex flex-col gap-2">
          <p className="text-14 font-semibold tracking-[1.1px] text-white">
            4677 2100 1268 <span>{4321}</span>
            </p>
            <div className="flex gap-4">
              <p className="text-12 text-white">VALID THRU</p>
              <h2 className="text-12 font-semibold text-white">10/28</h2>
            </div>
          </article>
        </div>
        <div className="bank-card_icon">
          <Image src='/icons/Paypass.svg' width={20} height={24} alt="pay"/>
          <Image className="ml-5 pl-2" src='/icons/m1.jpg' width={55} height={55} alt="mastercard"/>
        </div>
        <Image src='/icons/lines.png' width={316} height={190} alt="lines" className="absolute top-0 left-0"/>
      </Link>
    </div>
  );
}

