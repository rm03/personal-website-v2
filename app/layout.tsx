// app/layout.tsx
import NavbarWrapper from "@/components/Navbar";
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <NavbarWrapper />
          {children}
        </Providers>
      </body>
    </html>
  );
}