import Head from "next/head";
import { PostCard, Categories, PostWidget, Header } from "../components";
import { getPosts } from "../services";

// const post = [
//   { title: "latest trends in web dev", excerpt: "learn React Testing" },
//   { title: "latest events with webdev", excerpt: "New Webdev Events!" },
//   { title: "best keyboards for devs", excerpt: "Click clack new kb!" },
// ];

// above  code block is a "demo post" serving as dummy post use the above block to test redering

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-600">
      <Head>
        <title>Turbo Gordz Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1  lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

// careful in the rest of the syntax remeber to correctly call back *posts* and *getPosts*
// REMEBER THE S AT THE END.
