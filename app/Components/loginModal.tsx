"use client"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "next/link";

const login = () => {
    
}

const loginModal = () => { 
    return (
        <div className="bg-slate-100 h-2/5 w-1/5 rounded-xl items-center p-5 shadow-2xl shadow-gray-900">
            <h1 className="text-slate-900 justify-center flex p-10 text-3xl font-bold m-auto"> Login </h1>
            <TextField 
            required
            id="username"
            label="Username"
            variant="outlined"
            className="justify-center flex mx-5 my-5 rounded-lg"
            />
            <TextField 
            required
            id="password"
            label="Password"
            variant="outlined"
            className="justify-center flex mx-5 my-5 rounded-lg"
            />
          <Link href="/home" className="justify-center flex bottom-2 mt-20">
            <Button variant="contained" color="primary" className="bg-slate-800 "
              onClick={login}
            >
              Login
            </Button>
          </Link>
        </div>
    )
}
export default loginModal;