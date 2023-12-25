"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function Home() {
    const router = useRouter();
    return (
        <main>
            <div id="Navigation">
                <Button onClick={() => router.push("/login")}> Login </Button>
                <Button onClick={() => router.push("/about")}> About </Button>
            </div>
            <div id="Linking">
                <Link href={"/login"}> Login Page </Link>
                <Link href={"/about"}> About Page </Link>
            </div>
        </main>
    );
}
