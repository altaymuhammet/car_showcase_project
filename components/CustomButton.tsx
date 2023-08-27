"use client";

import React from "react";
import Image from "@/node_modules/next/image";
import { CustomButtonProps } from "@/types/index";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn hover:shadow-lg cursor-pointer ${textStyles} ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
    </button>
  );
};

export default CustomButton;
