"use client";

import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function DashboardPage() {
    const { user, logout } = useAuth();

    useEffect(() => {
        const cookies = document.cookie
            .split("; ")
            .find((row) => row.startsWith("auth_token="));

        if (!cookies) {
            // Redirect to login if no token is found
            window.location.href = "/login";
        }
    }, []);


    if (!user) return <p>Loading...</p>; // Replace with a spinner if needed

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Welcome, {user?.name}</h1>
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
