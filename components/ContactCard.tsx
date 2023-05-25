import Image from "next/image";
import Link from "next/link";

interface ContactCardProps {
  imageSrc: string;
  label: string;
  url: string;
}

const ContactCard = ({ imageSrc, label, url }: ContactCardProps) => {
  return (
    <Link
      href={`${url}`}
      target="_blank"
      className="link flex space-x-2 items-start md:items-center"
    >
      <div className="relative w-8 h-8 md:w-12 md:h-12">
        <Image src={imageSrc} alt={""} fill />
      </div>
      <p className="text-xl md:text-2xl">{label}</p>
    </Link>
  );
};

export default ContactCard;
