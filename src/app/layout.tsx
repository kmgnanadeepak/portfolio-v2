import type { Metadata } from "next";
import "./globals.css";
import PremiumCursor from "@/components/ui/PremiumCursor";

export const metadata: Metadata = {
  title: "KM Gnana Deepak — Full Stack Engineer",
  description: "MERN Stack Engineer | Building scalable, production-ready applications with clean architecture, cloud deployments & modern DevOps.",
  keywords: ["Full Stack Developer", "MERN Stack", "React", "Node.js", "KM Gnana Deepak"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {/* Main content wrapper */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        
        {/* Premium Cursor rendered at the root level */}
        <PremiumCursor />
      </body>
    </html>
  );
}
