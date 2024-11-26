// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import 'leaflet/dist/leaflet.css';
// import "./globals.css";
// import { AuthProvider } from "./context/AuthContext";

import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ padding: 20 }}>
            <header>
                <h1>My Blog </h1>
                < nav >
                    <Link href="/protected/dashboard" > Dashboard </Link> | <Link href="/blog">Blog</Link>
                </nav>
            </header>

            <hr></hr>

            < main > {children} </main>

            < footer >
                <p>© 2024 My Blog </p>
            </footer>
        </div>
    );
}
