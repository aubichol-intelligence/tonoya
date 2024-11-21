"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";


export default function LoginPage() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);

    // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     try {
    //         const res = await fetch("/api/login", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         const data = await res.json();

    //         if (data.success) {
    //             alert("Login successful");
    //             window.location.href = "/";
    //         } else {
    //             alert(data.message || "Login failed");
    //         }
    //     } catch (error) {
    //         console.error("Login error:", error);
    //         alert("An error occurred. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };



    const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL; // Client-safe
    console.log("Root URL:", rootUrl);

    // export async function getServerSideProps() {
    //     const rootUrl = process.env.ROOT_URL; // Server-only
    //     console.log("Root URL:", rootUrl);

    //     return { props: {} };
    // }

    interface FormData {
        email: string;
        password: string;
    }

    interface FormErrors {
        email: string;
        password: string;
    }

    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = (data: FormData): FormErrors => {
        const errors: FormErrors = {
            email: "",
            password: "",
        };

        if (!data.email.trim()) errors.email = "Email is required";
        if (!data.password.trim()) errors.password = "Password is required";

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);

        if (Object.values(errors).every((error) => error === "")) {
            // Proceed with submission logic
            console.log("Form submitted", formData);

            try {

                const res = await fetch(`${rootUrl}/api/v1/users/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: formData.email, password: formData.password }),
                });

                const data = await res.json();

                if (data.success) {
                    alert("Login successful");
                    window.location.href = "/";
                } else {
                    alert(data.message || "Login failed");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        // <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
        // <div className={styles.loginContainer}>
        //     <h1>Login</h1>
        //     <form onSubmit={handleLogin} style={{ width: 300 }}>
        //         <input
        //             type="email"
        //             id="email"
        //             placeholder="Email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             className={styles.input}
        //             required
        //         />
        //         <input
        //             type="password"
        //             id="password"
        //             placeholder="Password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             className={styles.input}
        //             required
        //         />
        //         <button
        //             type="submit"
        //             style={{
        //                 backgroundColor: loading ? "gray" : "blue",
        //                 cursor: loading ? "not-allowed" : "pointer",
        //                 opacity: loading ? 0.8 : 1,
        //             }}
        //             // className={`${styles.blueButton}`}
        //             className={styles.blueButton}
        //             disabled={loading}
        //         >
        //             {loading ? "Logging in..." : "Login"}
        //         </button>
        //     </form>
        // </div >

        <div className={styles.container}>
            <h1 className={styles.heading}>Login</h1>

            <form className={styles.form} onSubmit={handleSubmit}>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Type Your Valid Email Address Here"
                    />
                    {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Type Your Password Here"
                    // autocomplete="current-password"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className={styles.passwordToggle}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}
                </div>

                <button type="submit" className={styles.button}>
                    Login
                </button>
            </form>

            <h3 className={styles.linkText}>
                Already Registered?{" "}
                <Link href="/register" className={styles.link}>
                    Go To Register
                </Link>
            </h3>
        </div>
    );
}
