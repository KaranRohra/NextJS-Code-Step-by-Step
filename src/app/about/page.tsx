"use client";
import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

function About() {
    const router = useRouter();
    return (
        <div>
            <div id="Navigation">
                <Button onClick={() => router.push("/")}> Home </Button>
                <Button onClick={() => router.push("/login")}> Login </Button>
            </div>
            <div id="Linking">
                <Link href={"/"}> Home Page </Link>
                <Link href={"/login"}> Login Page </Link>
            </div>
        </div>
    );
}

export default About;
