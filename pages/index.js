import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";

const post = [
  { title: "latest trends in web dev", excerpt: "learn React Testing" },
  { title: "latest events with webdev", excerpt: "New Webdev Events!" },
  { title: "best keyboards for devs", excerpt: "Click clack new kb!" },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-600">
      <Head>
        <title>Turbo Gordz Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1  lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {post.map((post, index) => (
            <PostCard post={post} key={post.title} />
          ))}
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
