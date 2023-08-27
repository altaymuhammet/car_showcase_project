import React from "react";
import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link className="flex justify-center items-center" href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={128}
            height={28}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] cursor-pointer border border-primary-blue"
        />
      </nav>
    </header>
  );
};

export default Navbar;
