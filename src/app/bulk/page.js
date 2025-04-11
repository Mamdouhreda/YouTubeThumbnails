"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

export default function BulkDownloads() {
  const [urls, setUrls] = useState(["", "", ""]);
  const [errors, setErrors] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({
    maxresdefault: true,
    hqdefault: false,
    mqdefault: false,
  });
  const router = useRouter();

  const addUrlField = () => {
    setUrls([...urls, ""]);
  };

  const removeUrlField = (index) => {
    if (urls.length > 1) {
      const newUrls = urls.filter((_, i) => i !== index);
      setUrls(newUrls);
    }
  };

  const updateUrl = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleSizeChange = (size) => {
    setSelectedSizes({
      ...selectedSizes,
      [size]: !selectedSizes[size],
    });
  };

  const validateUrls = () => {
    const newErrors = [];
    urls.forEach((url, index) => {
      if (
        url &&
        !url.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/)
      ) {
        newErrors[index] = "Please enter a valid YouTube URL";
      }
    });
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateUrls()) return;

    setIsProcessing(true);
    const validUrls = urls.filter((url) => url.trim() !== "");
    const videoIds = validUrls
      .map((url) => extractVideoId(url))
      .filter((id) => id);

    try {
      const response = await fetch("/api/bulk-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          videoIds,
          sizes: Object.keys(selectedSizes).filter(
            (size) => selectedSizes[size]
          ),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to download thumbnails");
      }

      // Get the filename from the Content-Disposition header
      const contentDisposition = response.headers.get("Content-Disposition");
      const filename = contentDisposition
        ? contentDisposition.split("filename=")[1].replace(/"/g, "")
        : "youtube-thumbnails.zip";

      // Create a blob from the response and trigger download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error processing URLs:", error);
      alert(
        error.message || "Failed to download thumbnails. Please try again."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const extractVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <>
      <Head>
        <title>Bulk YouTube Thumbnail Downloader</title>
        <meta
          name="description"
          content="Download multiple YouTube video thumbnails at once with our easy-to-use bulk downloader. Choose from various sizes and get your thumbnails in a zip file."
        />
        <meta
          name="keywords"
          content="YouTube, thumbnail downloader, bulk download, video thumbnails, YouTube thumbnails"
        />
        <meta property="og:title" content="Bulk YouTube Thumbnail Downloader" />
        <meta
          property="og:description"
          content="Download multiple YouTube video thumbnails at once with our easy-to-use bulk downloader. Choose from various sizes and get your thumbnails in a zip file."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://youtubedownloadthumbnails.com/bulk"
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bulk YouTube Thumbnail Downloader
            </h1>
            <p className="text-xl text-gray-600">
              Download multiple YouTube video thumbnails at once
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {urls.map((url, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => updateUrl(index, e.target.value)}
                      placeholder={`YouTube URL ${index + 1}`}
                      className={`w-full px-4 py-2 border rounded-md ${
                        errors[index] ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors[index] && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors[index]}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeUrlField(index)}
                    className="px-3 py-2 text-red-600 hover:text-red-800"
                    disabled={urls.length === 1}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Thumbnail Sizes
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="maxresdefault"
                      type="checkbox"
                      checked={selectedSizes.maxresdefault}
                      onChange={() => handleSizeChange("maxresdefault")}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="maxresdefault"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Max Resolution (1280x720)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="hqdefault"
                      type="checkbox"
                      checked={selectedSizes.hqdefault}
                      onChange={() => handleSizeChange("hqdefault")}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="hqdefault"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      High Quality (480x360)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="mqdefault"
                      type="checkbox"
                      checked={selectedSizes.mqdefault}
                      onChange={() => handleSizeChange("mqdefault")}
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="mqdefault"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Medium Quality (320x180)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={addUrlField}
                  className="px-4 py-2 text-blue-600 hover:text-blue-800"
                >
                  + Add Another URL
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  {isProcessing ? "Processing..." : "Download All Thumbnails"}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              ← Back to Single Download
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
