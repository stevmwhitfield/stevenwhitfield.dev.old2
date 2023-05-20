import NavItem from "./NavItem";

export default () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 w-full h-16 bg-background">
      <ul className="flex justify-evenly h-full">
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
