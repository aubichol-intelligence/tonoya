// import Image from "next/image";

/*
export async function generateStaticParams() {
  let posts = await fetch('https://api.vercel.app/blog', {
    cache: 'force-cache',
  }).then((res) => res.json())
 
  return posts.map((post: Post) => ({
    id: post.id,
  }))
}
 
export async function generateMetadata({ params }: { params: { id: string } }) {
  //let post = await getPost(params.id)
 
  return {
    title: post.title,
  }
}
*/

import Link from 'next/link';
import BlogList from '../../components/BlogList';
//import blogPosts from '../../components/data/blogs.json';
import blogPosts from "../../components/data/pictures";

const Home = () => {
  return (
    <div style={{}}>
      <h1>Welcome to the Blog</h1>

      <div style={{ marginTop: 14, marginBottom: 14, }}>
        <Link href={`/blog/create`} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, }}>
          Create New Blog
        </Link>
      </div>

      <BlogList posts={blogPosts} />
    </div>
  );
};

export default Home;
/*
  return (
    <div >
        <ol>
          <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  );
*/
