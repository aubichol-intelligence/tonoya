import Link from "next/link";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div style={{ padding: 20, maxWidth: 1400, }}>
            <header>
                <h1>My Blog </h1>
                < nav >
                    <Link href="/protected/dashboard" > Dashboard </Link> | <Link href="/blog">Blogs</Link>
                </nav>
            </header>

            <hr></hr>

            < main > {children} </main>

            < footer >
                <p>© 2024 My Blog </p>
            </footer>
        </div >
    );
}
