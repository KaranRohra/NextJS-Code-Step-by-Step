import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";

export const metadata: Metadata = {
  title: "Code Step by Step",
  description: "NextJS Tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
