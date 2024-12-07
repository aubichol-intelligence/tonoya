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

// import Link from 'next/link';
import BlogList from '../../components/BlogList';
//import blogPosts from '../../components/data/blogs.json';
// import blogPosts from "../../components/data/pictures";

// const Home = () => {
export default async function Home() {

  const ITEMS_PER_PAGE = 12; // Calculate skip based on the current page

  // Fetch data from API (fetch runs on the server side here)
  const fetchItems = async (currentPage: number) => {
    const skip = currentPage * ITEMS_PER_PAGE;

    const res = await fetch(
      `https://tonoyabd.com/api/v1/blog/list/${skip}/${ITEMS_PER_PAGE}`,
      { cache: 'no-store' } // Ensure fresh data fetch for dynamic pages
    );

    if (!res.ok) throw new Error("Failed to fetch items");
    return res.json();
  };

  const data = await fetchItems(0); // Fetch the first page of items
  console.log(data);


  return (
    <div style={{ marginTop: "7rem", }}>
      {/* <div style={{ marginTop: 14, marginBottom: 14, }}>
        <Link href={`/blog/create`} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, }}>
          Create New Blog
        </Link>
      </div> */}

      <div style={{}}>
        <BlogList posts={data} />
      </div>
    </div>
  );
};

// export default Home;
/*
  return (
    <div >
        <ol>
          <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  );
*/
