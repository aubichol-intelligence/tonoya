"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import { useState } from "react";

const ContactForm = () => {
	const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL; // Ensure this environment variable is defined

  // Variants for container animations
	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				when: "beforeChildren",
				staggerChildren: 0.2, // Stagger child animations
			},
		},
	};

	// Variants for individual items
	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
		hover: { scale: 1.05 },
	};

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [message, setMessage] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
	    e.preventDefault();
    	setMessage(''); // Clear previous message


		try {
			const response = await fetch(`${rootUrl}/api/v1/email/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					// Authorization: token || '', // Use an empty string if token is undefined
				},
				body: JSON.stringify({
					...formData,
				}),
			});

	    	console.log(response);

			if (response.ok) {
				setMessage('Your message sent successfully!');
				setFormData({
					name: '',
					email: '',
					message: '',
				});
			} else {
				const errorData = await response.json();
				setMessage(`Error: ${errorData.message || 'Something went wrong.'}`);
			}
			} catch (error) {
				if (error instanceof Error) {
					setMessage(`Error: ${error.message}`);
				} else {
					setMessage('An unexpected error occurred.');
				}
			}
		};

	return (
		<motion.div
			className={styles.contactContainer}
			initial="hidden"
			animate="visible"
            style={{ overflow: "visible" }} // Ensure no overflow restrictions
			variants={containerVariants}
		>
		{/* Form Section */}
			<motion.div
				className={styles.formSection}
				variants={itemVariants}
				whileHover="hover"
			>
                
				<form className={styles.form} onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<motion.input
					type="text"
					id="name"
					name="name"
					placeholder="Your Name"
					className={styles.styledTextarea}
					whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
					value={formData.name}
					onChange={handleChange}
					required
					/>
					<label htmlFor="email">Email</label>
					<motion.input
					type="email"
					id="email"
					name="email"
					placeholder="Your Email"
					className={styles.styledTextarea}
					whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
					value={formData.email}
					onChange={handleChange}
					required
				/>
				<div className={styles.inputContainer}>
					<label htmlFor="message" className={styles.dynamicLabel}>
						Your Message
					</label>
					<motion.textarea
						id="message"
						name="message"
						className={styles.styledTextarea}
						placeholder=" "
						whileFocus={{
						borderColor: "#3498db",
						boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
						}}
						value={formData.message}
						onChange={handleChange}
						required
					></motion.textarea>
				</div>

			{message && <p>{message}</p>}

			<motion.button
				className={styles.button}
				type="submit"
				whileHover={{ scale: 1.1 }}>
				Submit
			</motion.button>
		</form>
		</motion.div>

		{/* Contact Info Section */}
		<motion.div
			className={styles.contactInfoSection}
			variants={itemVariants}
		>
		<motion.div
			className={styles.contactBox}
			whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
		>
			<h3>Give us a quick call</h3>
			<p>+1 (555) 123-4567</p>
		</motion.div>
		<motion.div
			className={styles.contactBox}
			whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
		>
			<h3>Send us an email to start with</h3>
			<p>contact@example.com</p>
		</motion.div>
		</motion.div>
		</motion.div>
	);
};

export default ContactForm;
