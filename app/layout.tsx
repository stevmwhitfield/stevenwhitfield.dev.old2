import Copyright from "../components/Copyright";
import FooterSocials from "../components/FooterSocials";
import Navigation from "../components/Navigation";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="page-wrapper" className="flex flex-col min-h-screen">
          <header id="header" className="">
            <Navigation />
          </header>
          <main id="main" className="grow flex justify-center mt-12">
            {children}
          </main>
          <footer id="footer" className="mt-12 mb-20">
            <Copyright />
            {/* <FooterSocials /> */}
          </footer>
        </div>
      </body>
    </html>
  );
}
