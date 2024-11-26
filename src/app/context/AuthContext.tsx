"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    token: string;
    account_type: string;
}

interface AuthContextType {
    user: User | null;
    // setUser: (user: User | null) => void;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    // console.log(user);

    const router = useRouter();

    useEffect(() => {
        // Load user data from localStorage on app start
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const logout = async () => {
        // await fetch("/api/auth/logout", { method: "POST" });
        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        setUser(null);
        localStorage.removeItem('user');

        // window.location.href = "/login";
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) throw new Error("useAuth must be used within AuthProvider");

    return context;
};
