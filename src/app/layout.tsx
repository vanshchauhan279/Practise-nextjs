import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mt-15">
          <Navbar/>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
