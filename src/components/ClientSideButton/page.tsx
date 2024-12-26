"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import styles from "./page.module.css"; // Optional CSS file

interface ClientSideButtonProps {
    label: string; // Button text
    destination: string; // Target route
}

const ClientSideButton: React.FC<ClientSideButtonProps> = ({ label, destination }) => {
    const router = useRouter();

    const handleClick = () => {
        if (destination) {
            router.push(destination);
        } else {
            console.warn("No destination specified for ClientSideButton.");
        }
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            {label}
        </button>
    );
};

ClientSideButton.propTypes = {
    label: PropTypes.string.isRequired, // Button text
    destination: PropTypes.string.isRequired, // Target route
};

export default ClientSideButton;
