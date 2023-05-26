import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <nav className="fixed z-50 inset-x-0 bottom-0 w-full h-16 bg-background border-t border-[#444851] md:absolute md:-bottom-0 md:top-0 md:border-t-0 md:border-b">
      <ul className="flex justify-evenly h-full md:justify-start md:space-x-16 md:ml-12">
        <NavItem url={"/"} label={"Home"} iconSrc={"/house-dark-theme.png"} />
        <NavItem
          url={"/projects"}
          label={"Projects"}
          iconSrc={"/program-dark-theme.png"}
        />
        <NavItem
          url={"/contact"}
          label={"Contact"}
          iconSrc={"/post-box-dark-theme.png"}
        />
      </ul>
    </nav>
  );
};

export default Navigation;
