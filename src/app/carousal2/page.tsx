"use client";

import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";

const svgImages = [
	{ id: 1, src: "/logos/aklom.png", alt: "Aklom Logo" },
	{ id: 2, src: "/logos/CHP-LOGO-1.png", alt: "CHP Logo" },
	{ id: 3, src: "/logos/creato.png", alt: "Creato Logo" },
	{ id: 4, src: "/logos/cu.png", alt: "CU logo" },
	{ id: 5, src: "/logos/jica.png", alt: "JICA logo" },
	{ id: 6, src: "/logos/lged.png", alt: "LGED logo" },
	{ id: 7, src: "/logos/shorupkathi.png", alt: "Shorupkathi Logo" },
	{ id: 8, src: "/logos/upazilla-porishod.png", alt: "Upazilla Parishad logo" },
];

const Carousel = () => {
  // Duplicate the images array multiple times for smooth scrolling
	const repeatedImages = Array(8)
    .fill(svgImages)
    .flat();

	return (
		<div className={styles.carouselWrapper}>

			<h2 className={styles.headerText}>Collaborations With Leading Brands</h2>
			<p className={styles.secondaryText}>Our Esteemed Clients</p>
			<div className={styles.carousel}>
			{repeatedImages.map((image, index) => (
				<div className={styles.carouselItem} key={`${image.id}-${index}`}>
				<img src={image.src} alt={image.alt} className={styles.image} />
				</div>
			))}
			</div>
		</div>
	);
};

export default Carousel;
