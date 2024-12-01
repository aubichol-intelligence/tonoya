import type { Metadata } from "next";
import localFont from "next/font/local";
import 'leaflet/dist/leaflet.css';
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Tonoya",
	description: "Home of Bangladesh's best vending machine for sanitary napkins",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AuthProvider>
					<div style={{width: '100vw',overflow:'hidden'}}>
						<Header />
						{/* <hr></hr> */}

						<div >
							{/* < main > {children} </main> */}
							{children}
						</div>

						{/* <hr></hr> */}
						<Footer />
					</div >
				</AuthProvider>
			</body>
		</html>
	);
}
