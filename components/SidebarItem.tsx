"use client";

import Link from "next/link";

import { IconType } from "react-icons";

import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  active?: boolean;
  lebal: string;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  active,
  lebal,
  href,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
  flex
  flex-row
  h-auto
  item-center
  w-full
  gap-x-4
  text-md
  font-medium
  cursor-pointer
  hover:text-white
  transition
  text-neutral-400
  py-1
  `,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full"> {lebal} </p>
    </Link>
  );
};

export default SidebarItem;
