import Image from "next/image";

export default () => {
  return (
    <div className="w-full min-h-screen max-h-full flex flex-col px-5 pt-32">
      <Image
        src="/StevenWhitfield.jpg"
        alt=""
        width="250"
        height="250"
        className="rounded-full self-center mb-7"
      />
      <h1 className="font-bold text-4xl pt-[1em]">Steven Whitfield</h1>
      <h2 className="text-textSecondary text-xl pt-[0.25em]">
        Software Engineer
      </h2>
      <p className="pt-8">
        Hello, my name is Steven. I'm a software engineer with focused on{" "}
        <span className="text-green">fullstack development</span>. I graduated
        from Florida Polytechnic University with a B.S. in Computer Science and
        now, I'm ready to work with you to build something awesome.
      </p>
    </div>
  );
};
