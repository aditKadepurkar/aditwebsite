"use client"
import Link from "next/link";
import { useState } from "react";

export const [login, setLogin] = useState(false);
export const [user, setUser] = useState(null);


const LoginButton = () => (
    login ? (
        <Link href="/login" className="bg-slate-700 p-3 px-5 rounded-xl text-slate-200">
            User!
        </Link>
    ) : (<Link href="/login" className="bg-slate-700 p-3 px-5 rounded-xl text-slate-200">
            Login
        </Link>)
);
export default LoginButton;