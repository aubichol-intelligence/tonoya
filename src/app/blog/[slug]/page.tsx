import Link from 'next/link';
import Head from 'next/head';
import blogPosts from '../../../components/data/pictures';
import "./Blog.css";
import parse from 'html-react-parser';
import BlogOverview from "../../../components/blogSum1/page";
import SocialMediaShare from "../../../components/SocialMediaShare/page";

type Params = Promise<{ slug: string }>;

// Generate metadata dynamically
export async function generateMetadata(props: { params: Params }) {
    const params = await props.params
    const slug = params.slug

    const response = await fetch(`https://tonoyabd.com/api/v1/blog/getslug/${slug}`, {
        method: 'GET',
        headers: {
            Authorization: process.env.API_TOKEN || '', // Use environment variable for the token
        },
    });

    if (!response.ok) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    const post = await response.json();
    // console.log(post);

    return {
        title: post.meta_title || post.title || 'Untitled',
        description: post.meta_description?.slice(0, 150) + '...' || post.short_description?.slice(0, 150) + '...' || 'No description available.',
    };
}

// Dynamic blog post page
// export default async function Page({ params }: { params: { slug: string } }) {
export default async function Page(props: { params: Params }) {
    const params = await props.params;
    const slug = params.slug;

    // const response = await fetch(`https://tonoyabd.com/api/v1/blog/get/${slug}`, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: process.env.API_TOKEN || '',
    //     },
    // });
    const response = await fetch(`https://tonoyabd.com/api/v1/blog/getslug/${slug}`, { cache: 'no-store' }) // Ensure fresh data fetch for dynamic pages);

    if (!response.ok) {
        return (
            <div>
                <h2>Post not found</h2>
                <Link href="/blog">Back to Blog</Link>
            </div>
        );
    }

    const post = await response.json();
    // console.log(post);

    // Construct the page URL
    const baseUrl = process.env.NEXT_PUBLIC_ROOT_URL || "https://tonoyabd.com";
    const pageUrl = `${baseUrl}/blog/${params.slug}`;
    // console.log(pageUrl);
    const pageTitle = post?.title || "";
    // console.log(pageTitle);


    return (
        // <HelmetProvider>
        <div style={{ paddingTop: "0.1rem", backgroundColor: "#68d689" }}>
            {/* // <div style={{ paddingTop: "0.1rem", }}> */}
            {/* <Helmet> */}
            <Head>
                <title>{post.title}</title>
            </Head>
            {/* </Helmet> */}

            <div className="blog-page">
                <div style={{ display: "flex", justifyContent: "center" }} >
                    <div className='prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl outline-none' >
                        {post?.content && parse(post?.content)}
                    </div>
                </div>

                {/* <div
                    dangerouslySetInnerHTML={{ __html: post?.content }}
                    style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}
                /> */}

                <header className="blog-header" style={{ marginTop: '2rem' }}>
                    {/* <h1 className="blog-title">{post.title}</h1> */}

                    <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }} >
                        {/* <div> */}
                        <p className="blog-subtitle"><span className='text-bold'>Date:</span> {post.created_at.split(" ")[0]}</p>
                        <p className="blog-subtitle"><span className='text-bold'>Author:</span> {post.author}</p>
                        <p className="blog-subtitle"><span className='text-bold'>Tags:</span> {post.tags?.length > 0 ? post.tags.join(", ") : "N/A"}</p>
                    </div>
                    {/* <div style={{ display: "flex", justifyContent: "center" }} >
                            <Link href="/blog">Back</Link>
                            </div> */}
                    {/* </div> */}
                </header>

                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }} >
                    <SocialMediaShare url={pageUrl} title={pageTitle} />
                    {/* <SocialMediaShare title={pageTitle} /> */}
                </div>

                <div style={{ display: "flex", justifyContent: "center" }} >
                    <Link href="/blog" style={{ backgroundColor: "#68d689" }}>Back to Blog List</Link>
                </div>


                {/* Footer */}
                {/* <footer className="blog-footer">
                    <p className="footer-note">© 2024 Blog Page. All rights reserved.</p>
                </footer> */}
            </div>

            <BlogOverview from="blog" />
        </div>
        // </HelmetProvider>
    );
}

// Generate static params for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    // const posts = await fetch('https://.../posts').then((res) => res.json())

    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// export const config = {
//     dynamicParams: false,
// };
