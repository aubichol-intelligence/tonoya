"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
// import BlogList from '../../components/BlogList';
import Link from "next/link";
// import ClientSideButton from "@/components/ClientSideButton/page";

interface PostData {
  author: string;
  content: string;
  created_at: string;
  id: string;
  meta_description: string;
  meta_title: string;
  published_at: string;
  short_description: string;
  slug: string;
  title: string;
  updated_at: string;
  tags: string[];
  imageUrl: string;
  alt: string;
}

// Define the props for the component
interface CarouselSectionProps {
  from: string;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ from }) => {

  const router = useRouter();

  const defaultImage = "https://i.ibb.co/28NtxhS/Blog-Picture1.jpg"; // Path to your default image

  const skip = 0;
  const ITEMS_PER_PAGE = 3;
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      // setLoading(true);
      try {
        const response = await fetch(
          `https://tonoyabd.com/api/v1/blog/list/${skip}/${ITEMS_PER_PAGE}`,
          { cache: "no-store" }
        );

        if (response.ok) {
          const data = await response.json();
          // console.log(data);

          setPosts(data || []);
        } else {
          const errorData = await response.json();
          console.error("Error fetching blogs:", errorData.message || "Unknown error");
          alert(`Error: ${errorData.message || "Failed to fetch blogs."}`);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("An unexpected error occurred while fetching blogs.");
      } finally {
        // setLoading(false);
      }
    }

    fetchBlogs();
  }, []);


  const handleClick = () => {
    // Redirect to a contact page or open a modal
    // window.location.href = "/carousal2";
    router.push('/blog');
  };

  return (
    <section className={styles.container}>
      {
        from === "home" &&
        <div className={styles.background}>
          <h1 className={styles.headerText}>Explore Trending Tonoya Publications</h1>
        </div>
      }

      <div className={styles.cardContainer} style={{ marginTop: from === 'home' ? '-8rem' : '3rem' }}>
        {posts.map((blog, index) => {
          // Extract image URLs from blog content
          const imageUrls = [...blog.content.matchAll(/<img[^>]+src="([^">]+)"/g)].map(
            (match) => match[1]
          );
          // Use the first extracted image, blog.imageUrl, or the default image
          const imageSrc = imageUrls[0] || blog.imageUrl || defaultImage;

          return (
            <div key={index} className={styles.card}>
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="blog-card" >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                < img
                  src={imageSrc}
                  alt={blog.alt || blog.title}
                  className={styles.image}
                />
                <h3 className={styles.description}>{blog.created_at}</h3>
                <h3 className={styles.headline}>{blog.title}</h3>
                <h3 className={styles.description}>By {blog.author}</h3>
                <p className={styles.description}>{blog.short_description}</p>
              </Link>
            </div>
          );
        })}
      </div>

      {
        from === "home" &&
        <button className={styles.button} onClick={handleClick}>Read More Thoughts</button>
      }
      {/* <ClientSideButton label="Read More Thoughts" destination="/blog" /> */}
    </section>
  );
};

export default CarouselSection;
