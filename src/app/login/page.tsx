"use client";
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();
    return (
        <div>
            <div id="Navigation">
                <Button onClick={() => router.push("/")}> Home </Button>
                <Button onClick={() => router.push("/about")}> About </Button>
            </div>
            <div id="Linking">
                <Link href={"/"}> Home Page </Link>
                <Link href={"/about"}> About Page </Link>
            </div>
        </div>
    );
}

export default Login;
