"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
  url: string;
  label: string;
  iconSrc: string;
}

export default (props: Props) => {
  const { url, label, iconSrc } = props;
  const active = usePathname() === url;
  console.log(usePathname(), active);

  return (
    <li className="w-1/3">
      <Link
        href={url}
        className="text-blue hover:text-blueDarker active:text-blueDarkest flex flex-col justify-center items-center w-full h-full"
      >
        <Image src={iconSrc} alt={""} width={24} height={24} />
        <p className={active ? "text-xs font-bold" : "text-xs"}>{label}</p>
      </Link>
    </li>
  );
};
