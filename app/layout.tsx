import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEMMA - AI Automation Agency for Small Businesses",
  description: "Automate customer service, sales calls, and admin tasks with AI. Voice AI for calls, email & chat automation, and no-code bot customization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
