const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-4/5 max-w-[1280px] h-full">{children}</div>;
};

export default Container;
