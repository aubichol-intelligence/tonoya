'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CreateBlogPage() {
    const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL; // Ensure this environment variable is defined

    const [token, setToken] = useState<string | null>(null); // Store token in state

    useEffect(() => {
        // Get the token only on the client side
        const cookieToken = document.cookie
            .split('; ')
            .find((row) => row.startsWith('auth_token='))?.split('=')[1];
        setToken(cookieToken || null);
    }, []); // Empty dependency array ensures this runs only once after initial render


    const [formData, setFormData] = useState({
        title: '',
        author: '',
        slug: '',
        content: '',
        shortDescription: '',
        tags: '',
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
            const response = await fetch(`${rootUrl}/api/v1/blog/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token || '', // Use an empty string if token is undefined
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map((tag) => tag.trim()), // Convert tags to an array
                }),
            });

            console.log(response);

            if (response.ok) {
                setMessage('Blog created successfully!');
                setFormData({
                    title: '',
                    author: '',
                    slug: '',
                    content: '',
                    shortDescription: '',
                    tags: '',
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
        <div>
            <h2>Create a New Blog</h2>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Slug:</label>
                    <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Short Description:</label>
                    <textarea
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Tags (comma-separated):</label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Create Blog</button>
            </form>

            <Link href="/blog">Back to Blog</Link>
        </div>
    );
}
