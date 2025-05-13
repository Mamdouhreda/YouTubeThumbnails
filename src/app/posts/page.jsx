"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "@/lib/queries/getPosts";
import Link from "next/link";

export default function PostsPage() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 my-4">
        <p className="font-medium">Error loading posts:</p>
        <p>{error.message}</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>

      <div className="space-y-10">
        {data.posts.nodes.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.featuredImage?.node && (
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>

              <div className="text-sm text-gray-500 mb-4">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <div
                className="prose prose-lg max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />

              <div className="flex justify-center">
                <Link
                  href={`/posts/${post.slug}`}
                  className="inline-block bg-[#FF0000] hover:bg-[#CC0000] text-white px-5 py-2 rounded-lg transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
