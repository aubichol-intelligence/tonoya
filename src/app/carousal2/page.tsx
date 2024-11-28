"use client";

import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";

const svgImages = [
	{ id: 1, src: "/logos/aklom.png", alt: "SVG 1" },
	{ id: 2, src: "/logos/CHP-LOGO-1.png", alt: "SVG 2" },
	{ id: 3, src: "/logos/creato.png", alt: "SVG 3" },
	{ id: 4, src: "/logos/cu.png", alt: "SVG 4" },
	{ id: 5, src: "/logos/jica.png", alt: "SVG 5" },
	{ id: 6, src: "/logos/lged.png", alt: "SVG 6" },
	{ id: 7, src: "/logos/shorupkathi.png", alt: "SVG 7" },
	{ id: 8, src: "/logos/upazilla-porishod.png", alt: "SVG 8" },
];

const Carousel = () => {
  // Duplicate the images array multiple times for smooth scrolling
	const repeatedImages = Array(5)
    .fill(svgImages)
    .flat();

	return (
		<div className={styles.carouselWrapper}>
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
