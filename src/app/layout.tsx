import 'bootstrap/dist/css/bootstrap.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Next JS Tutorial",
    description: "Next JS Tutorial by Code Step by Step",
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
