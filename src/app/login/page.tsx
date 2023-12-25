import React from "react";
import Link from "next/link";

function Login() {
    return (
        <div>
            <Link href="/login/student">Student Login</Link> <br />
            <Link href="/login/teacher">Teacher Login</Link>
        </div>
    );
}

export default Login;
