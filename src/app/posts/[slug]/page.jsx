"use client";

import { useQuery } from "@apollo/client";
import { GET_POST_BY_SLUG } from "@/lib/queries/getPost";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function SinglePostPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
  });

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 my-4">
        <p className="font-medium">Error loading post:</p>
        <p className="mb-4">{error.message}</p>
        <Link
          href="/posts"
          className="inline-block bg-[#FF0000] hover:bg-[#CC0000] text-white px-5 py-2 rounded-lg transition-colors"
        >
          Back to All Posts
        </Link>
      </div>
    );

  if (!data?.post)
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The post you're looking for could not be found.</p>
        <Link
          href="/posts"
          className="inline-block bg-[#FF0000] hover:bg-[#CC0000] text-white px-5 py-2 rounded-lg transition-colors"
        >
          Back to All Posts
        </Link>
      </div>
    );

  const { post } = data;

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/posts"
        className="inline-flex items-center text-[#FF0000] hover:text-[#CC0000] mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to All Posts
      </Link>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.featuredImage?.node && (
          <div className="w-full h-80 overflow-hidden">
            <img
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

          <div className="text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
}
