"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItemProps {
  url: string;
  label: string;
  iconSrc: string;
}

const NavItem = ({ url, label, iconSrc }: NavItemProps) => {
  const active = usePathname() === url;

  return (
    <li className="w-1/3 md:w-auto">
      <Link
        href={url}
        className="link flex flex-col justify-center items-center w-full h-full"
      >
        <Image
          src={iconSrc}
          alt={""}
          width={24}
          height={24}
          className="md:hidden"
        />
        <p className="text-xs md:text-lg">
          <span className={active ? "font-bold" : ""}>{label}</span>
        </p>
      </Link>
    </li>
  );
};

export default NavItem;
