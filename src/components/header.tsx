import React from "react";
import Image from "next/image";
import { Spade } from "lucide-react";

export default function Header() {
 return (
  <div className="bg-gradient-to-r from-[#6380FC] to-[#7C4FFF] w-full px-4">
   <div className="w-full h-10 flex gap-1 items-center">
    {/* <Image src="/logo.svg" alt="logo" width={40} height={40} /> */}
    <Spade size={28} className="text-[#7C4FFF]" />
    <p className="text-2xl font-semibold">DevHatt Planning Poker</p>
   </div>
  </div>
 );
}
