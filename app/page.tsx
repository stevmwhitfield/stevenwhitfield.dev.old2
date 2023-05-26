import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../components/Container";

export const metadata: Metadata = {
  title: "Steven Whitfield - Software Engineer",
  description:
    "Steven Whitfield is a software engineer with a focus in full-stack web development.",
};

const IndexPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:space-x-16">
        {/* Photo of myself - replace with more professional photo once available */}
        <Image
          src={"/StevenWhitfield.jpg"}
          alt={"A photo of Steven Whitfield"}
          width={"250"}
          height={"250"}
          priority={true}
          className="rounded-full self-center my-12 sm:my-24 md:my-32"
        />
        {/* Text-heavy section */}
        <section className="w-full max-w-[31rem]">
          <header className="mb-8">
            <h1 className="font-bold text-3xl sm:text-4xl">Steven Whitfield</h1>
            <h2 className="text-textSecondary text-xl pt-[0.25em]">
              Software Engineer
            </h2>
          </header>
          <article>
            <p className="mb-4">
              Hi, my name is Steven. I graduated from Florida Polytechnic
              University in 2023 with a B.S. in Computer Science and a
              concentration in game development. That said, my current focus is
              on <span className="text-green">full stack development</span>. I
              would love to work with you to gain experience and build something
              awesome!
            </p>

            <p className="">
              See my{" "}
              <Link
                href={"/StevenWhitfield_Resume.pdf"}
                target="_blank"
                className="text-blue hover:text-blueDarker active:text-blueDarkest"
              >
                resume
              </Link>
              .
            </p>
          </article>
        </section>
      </div>
    </Container>
  );
};

export default IndexPage;
