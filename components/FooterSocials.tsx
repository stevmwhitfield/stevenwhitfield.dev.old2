import Link from "next/link";
import Image from "next/image";

export default () => {
  return (
    <div className="flex space-x-24 justify-center pt-4">
      <Link href={"https://github.com/stevmwhitfield"} target={"_blank"}>
        <Image src={"/github.svg"} alt={""} width={24} height={24}></Image>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/stevenmwhitfield/"}
        target={"_blank"}
      >
        <Image src={"/github.svg"} alt={""} width={24} height={24}></Image>
      </Link>
    </div>
  );
};
