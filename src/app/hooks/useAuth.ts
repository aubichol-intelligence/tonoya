import { useAuth } from "../context/AuthContext";

export const useAuthActions = () => {
    const { setUser } = useAuth();

    const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL; // Ensure this environment variable is defined
    // console.log("Root URL:", rootUrl);

    const login = async (email: string, password: string) => {
        try {
            const res = await fetch(`${rootUrl}/api/v1/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Invalid credentials");
            }

            const data = await res.json();

            // Set cookie for token
            document.cookie = `auth_token=${data.token}; path=/; secure; httponly`;

            setUser(data.user); // This updates the user state in the AuthContext

            window.location.href = "/protected/dashboard";
        } catch (error: unknown) {
            // throw new Error(error.message || "Something went wrong during login.");
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Something went wrong during login.");
            }
        }
    };

    const register = async (
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        account_type: string
    ) => {
        try {
            const res = await fetch(`${rootUrl}/api/v1/users/registration`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ first_name, last_name, email, password, account_type }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Registration failed");
            }

            const data = await res.json();

            // Set cookie for token
            document.cookie = `auth_token=${data.token}; path=/; secure; httponly`;

            setUser(data.user); // This updates the user state in the AuthContext

            window.location.href = "/protected/dashboard";
        } catch (error: unknown) {
            // throw new Error(error.message || "Something went wrong during registration.");
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert("Something went wrong during registration.");
            }
        }
    };

    return { login, register };
};
