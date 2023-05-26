import { Metadata } from "next";
import Copyright from "../components/Copyright";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div
          id="page-wrapper"
          className="flex flex-col min-h-screen max-w-[1280px] mx-auto"
        >
          <header id="header" className="relative w-full md:h-16">
            <Navigation />
          </header>
          <main id="main" className="grow flex flex-col items-center">
            {children}
          </main>
          <footer id="footer" className="mt-12 mb-20 md:mb-12">
            <Copyright />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
