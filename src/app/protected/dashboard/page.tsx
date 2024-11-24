"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

export default function DashboardPage() {
    const { user, logout } = useAuth();
    const router = useRouter();
    //     console.log(user);

    useEffect(() => {
        const cookies = document.cookie
            .split("; ")
            .find((row) => row.startsWith("auth_token="));
        // const token = document.cookie
        //     .split('; ')
        //     .find((row) => row.startsWith('auth_token='))
        //     ?.split('=')[1];
        // const token = cookies?.split('=')[1]; // Extract the value
        // console.log(cookies);
        // console.log(token);

        if (!cookies) {
            // Redirect to login if no token is found
            // window.location.href = "/login";
            router.push('/login');
        }
    }, [router]);


    if (!user) return <p>Loading...</p>; // Replace with a spinner if needed

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Welcome, {user?.first_name}</h1>
            <p>Your email: {user?.email}</p>
            <button
                onClick={logout}
                style={{
                    backgroundColor: "#0070f3",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Logout
            </button>
        </div>
    );
}
