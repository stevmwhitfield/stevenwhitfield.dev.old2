const PageHeader = ({ mainHeader }: { mainHeader: string }) => {
  return (
    <header className="mb-12 md:mb-16">
      <h1 className="text-center font-bold text-4xl">{mainHeader}</h1>
    </header>
  );
};

export default PageHeader;
