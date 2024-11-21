"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [loading, setLoading] = useState(false);

    // const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     try {
    //         const res = await fetch("/api/register", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ email, password }),
    //         });

    //         const data = await res.json();

    //         if (data.success) {
    //             alert("Registration successful");
    //             window.location.href = "/login";
    //         } else {
    //             alert(data.message || "Registration failed");
    //         }
    //     } catch (error) {
    //         console.error("Registration error:", error);
    //         alert("An error occurred during registration. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // return (
    //     <div className={styles.registerContainer}>
    //         <h1>Register</h1>
    //         <form onSubmit={handleRegister} style={{ width: 300 }}>
    //             <input
    //                 type="email"
    //                 id="email"
    //                 placeholder="Email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 className={styles.input}
    //                 required
    //             />
    //             <input
    //                 type="password"
    //                 id="password"
    //                 placeholder="Password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 className={styles.input}
    //                 required
    //             />
    //             <button
    //                 type="submit"
    //                 style={{
    //                     backgroundColor: loading ? "gray" : "green",
    //                     cursor: loading ? "not-allowed" : "pointer",
    //                     opacity: loading ? 0.8 : 1,
    //                 }}
    //                 // className={`${styles.greenButton}`}
    //                 className={styles.greenButton}
    //                 disabled={loading}
    //             >
    //                 {loading ? "Registering..." : "Register"}
    //             </button>
    //         </form>
    //     </div>
    // );



    interface FormData {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    interface FormErrors {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
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
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        if (!data.name.trim()) errors.name = "Name is required";
        if (!data.email.trim()) errors.email = "Email is required";
        if (!data.password.trim()) errors.password = "Password is required";
        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (data.password !== data.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = validateForm(formData);
        setFormErrors(errors);

        // if (Object.values(errors).every((error) => error === "")) {
        //     const result = await sendPostRequest(SignUpApiUrl, { arg: formData });

        //     localStorage.setItem("email", JSON.stringify(formData.email));
        //     localStorage.setItem("password", JSON.stringify(formData.password));

        //     if (result.success) {
        //         context?.currentUser(result.user);
        //         context?.login();
        //         router.push("/");
        //     }
        // }
        if (Object.values(errors).every((error) => error === "")) {
            // Proceed with submission logic
            console.log("Form submitted", formData);
        }
    };



    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Register</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Type Your Name Here"
                    />
                    {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
                </div>

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
                        placeholder="Type Your Desired Password Here"
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

                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword" className={styles.label}>
                        Confirm Password
                    </label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="Type Your Desired Password Again Here"
                    />
                    <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className={styles.passwordToggle}
                    >
                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                    {formErrors.confirmPassword && (
                        <p className={styles.error}>{formErrors.confirmPassword}</p>
                    )}
                </div>

                <button type="submit" className={styles.button}>
                    Register
                </button>
            </form>

            {/* <h3>
                Already Registered?{" "}
                <Link href="/auth/login" className={styles.link}>
                    Go for Login
                </Link>
            </h3> */}
        </div>
    );
}
