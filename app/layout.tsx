import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        {/* Navigation */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
