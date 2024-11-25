"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useAuthActions } from "../hooks/useAuth";


export default function LoginPage() {

//     const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL; // Client-safe
    // console.log("Root URL:", rootUrl);

    const { login } = useAuthActions();

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
                await login(formData.email, formData.password);

//                 const res = await fetch(`${rootUrl}/api/v1/users/login`, {
                   const res = await fetch(`https://tonoyabd.com/api/v1/users/login`, {
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
            } catch (error: unknown) {
                if (error instanceof Error) {
                    alert(error.message);
                } else {
                    alert("An unexpected error occurred.");
                }

                // console.error("Login error:", error);
                // alert("An error occurred. Please try again.");
            }
        }
    };

    return (
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
                        autoComplete="username"
                        required
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
                        autoComplete="current-password"
                        required
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
