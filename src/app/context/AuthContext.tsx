"use client";

import React, { createContext, useState, useContext } from "react";

interface User {
    id: string;
    name: string;
    email: string;
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

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const res = await fetch("/api/auth/user");
    //             if (res.ok) {
    //                 const data = await res.json();
    //                 setUser(data.user);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching user:", error);
    //         }
    //     };

    //     fetchUser();
    // }, []);

    const logout = async () => {
        // await fetch("/api/auth/logout", { method: "POST" });
        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

        setUser(null);

        window.location.href = "/login";
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
