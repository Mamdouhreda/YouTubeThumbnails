"use client";

import { useState } from "react";
import Accordion from "@/components/Accordion";
import SocialShareButtons from "@/components/SocialShareButtons";
import Script from "next/script";

export default function Home() {
  const [url, setUrl] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState("");

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Download YouTube Thumbnail",
    headline: "Download YouTube Thumbnail - Free Online Tool",
    url: "https://youtubedownloadthumbnails.com",
    description:
      "Download YouTube thumbnails in HD quality. Get any YouTube video thumbnail in multiple sizes including 1280x720, 480x360, and more. Free thumbnail downloader - no registration needed.",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Download YouTube thumbnails in HD quality",
      "Multiple thumbnail sizes available",
      "Instant thumbnail download",
      "No registration required",
      "Free to use",
      "Support all YouTube videos",
    ],
    keywords:
      "download youtube thumbnail, youtube thumbnail download, youtube thumbnail downloader, save youtube thumbnail, youtube thumbnail grabber",
    creator: {
      "@type": "Organization",
      name: "Download YouTube Thumbnail",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download a YouTube thumbnail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To download a YouTube thumbnail: 1. Copy the YouTube video URL 2. Paste it into our thumbnail downloader 3. Click 'Get Thumbnails' 4. Choose your preferred size and click Download. It's free and no registration is required.",
        },
      },
      {
        "@type": "Question",
        name: "What YouTube thumbnail sizes are available to download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer multiple YouTube thumbnail sizes: HD Quality (1280x720), High Quality (480x360), Medium Quality (320x180), and Standard Quality (120x90). You can download any or all sizes for free.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download thumbnails from any YouTube video?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can download thumbnails from any public YouTube video. Simply paste the video URL and our tool will fetch all available thumbnail sizes for that video.",
        },
      },
      {
        "@type": "Question",
        name: "Is it free to download YouTube thumbnails?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our YouTube thumbnail downloader is completely free to use. There are no hidden fees, no registration required, and no watermarks on the downloaded images.",
        },
      },
    ],
  };

  const accordionItems = [
    {
      title: "1. Download YouTube Thumbnails Instantly",
      content:
        "At YouTubeDownloadThumbnails.com, we provide an easy and fast way to download YouTube thumbnails with just a few clicks. Simply paste the YouTube video URL, and you'll get access to the thumbnail image in seconds. Whether you need it for personal use or to showcase content on your blog, we make it simple to download high-quality YouTube thumbnails quickly and easily.",
    },
    {
      title: "2. Multiple Thumbnail Sizes Available",
      content:
        "We offer YouTube thumbnails in various sizes, so you can choose the perfect one for your needs. Whether you need a high-resolution HD thumbnail for YouTube or a smaller image for sharing on social media or websites, we provide the right YouTube image sizes for you to download and use. Get the perfect YouTube thumbnail size in just a few clicks!",
    },
    {
      title: "3. High-Quality Thumbnails for Every Video",
      content:
        "Every YouTube thumbnail you download through our platform is in high-quality resolution, ensuring that your image looks sharp and professional. Whether you're a content creator or need the best image for a blog post, our tool provides access to crisp, high-resolution YouTube thumbnails for every video. Perfect for YouTubers and marketers!",
    },
    {
      title: "4. Easy Thumbnail Sharing on Social Media",
      content:
        "Once you've downloaded your YouTube thumbnail, you can easily share it across popular social media platforms like Instagram, Facebook, Twitter, and others. Whether you're promoting your latest video or using the thumbnail for social media content, our platform makes it easy to share YouTube thumbnails and enhance your online engagement.",
    },
    {
      title: "5. Free to Use – No Registration Required",
      content:
        "Enjoy the convenience of downloading YouTube thumbnails for free on our site with no sign-up or registration required. Whether you need thumbnails for personal use or to boost your YouTube channel, you can get high-quality YouTube images without any hassle or hidden fees. Start downloading your free YouTube thumbnails today!",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setThumbnails([]);

    // Basic YouTube URL validation
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
    if (!youtubeRegex.test(url)) {
      setError("Please enter a valid YouTube URL");
      return;
    }

    // Extract video ID and get thumbnails
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    )?.[1];

    if (!videoId) {
      setError("Could not extract video ID from URL");
      return;
    }

    setThumbnails([
      {
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        size: "1280x720",
      },
      {
        url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        size: "480x360",
      },
      {
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        size: "320x180",
      },
      {
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        size: "120x90",
      },
    ]);
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <article className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 leading-tight">
          Download <span className="text-[#FF0000]">YouTube</span> Thumbnail -
          Free HD Quality Images
        </h1>

        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Download YouTube thumbnails in HD quality (1280x720). Get
          high-resolution thumbnail images from any YouTube video URL instantly.
          Free thumbnail downloader, no registration required.
        </p>

        <section>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label
              htmlFor="youtube-url"
              className="block text-lg font-medium text-center mb-2"
            >
              👇 Enter YouTube URL to Download Thumbnail 👇
            </label>
            <div className="flex gap-2">
              <input
                id="youtube-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your YouTube link here"
                className="flex-1 px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-[#FF0000] placeholder-gray-500"
                aria-label="YouTube video URL"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FF0000] text-white text-lg font-semibold rounded-lg hover:bg-[#CC0000] transition-colors"
              >
                Get Thumbnails
              </button>
            </div>
            <p className="text-center text-gray-500 text-sm mt-2">
              Example: https://www.youtube.com/watch?v=XXXXXXXXXXX
            </p>
          </form>
        </section>

        {error && (
          <div
            className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg"
            role="alert"
          >
            {error}
          </div>
        )}

        {thumbnails.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">
              Available Thumbnail Sizes
            </h2>
            <div className="mb-8">
              <div className="relative aspect-video">
                <img
                  src={thumbnails[0].url}
                  alt={`High Resolution YouTube Thumbnail (${thumbnails[0].size})`}
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-black font-medium">
                    HD Quality - {thumbnails[0].size}
                  </p>
                  <a
                    href={thumbnails[0].url}
                    download={`youtube-thumbnail-hd-${thumbnails[0].size.replace(
                      "x",
                      "-"
                    )}.jpg`}
                    className="px-4 py-2 bg-[#FF0000] text-white rounded-lg shadow-md hover:bg-[#CC0000] transition-colors"
                    aria-label="Download HD thumbnail"
                  >
                    Download HD
                  </a>
                </div>
                <SocialShareButtons
                  imageUrl={thumbnails[0].url}
                  size={thumbnails[0].size}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {thumbnails.slice(1).map((thumbnail, index) => (
                <div key={index} className="relative aspect-video">
                  <img
                    src={thumbnail.url}
                    alt={`YouTube Thumbnail Size ${thumbnail.size}`}
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-black font-medium">
                      Size: {thumbnail.size}
                    </p>
                    <a
                      href={thumbnail.url}
                      download={`youtube-thumbnail-${thumbnail.size.replace(
                        "x",
                        "-"
                      )}.jpg`}
                      className="px-4 py-2 bg-[#FF0000] text-white rounded-lg shadow-md hover:bg-[#CC0000] transition-colors"
                      aria-label={`Download ${thumbnail.size} thumbnail`}
                    >
                      Download
                    </a>
                  </div>
                  <SocialShareButtons
                    imageUrl={thumbnail.url}
                    size={thumbnail.size}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            What We <span className="text-[#FF0000]">Do</span>
          </h2>
          <Accordion items={accordionItems} />
        </section>
      </article>
    </>
  );
}
