export const metadata = {
  title: "Privacy Policy - YouTube Thumbnail Downloader | Data Protection",
  description:
    "Privacy Policy for YouTubeDownloadThumbnails.com - Learn how we protect your data and privacy while using our YouTube thumbnail download service. No account required.",
  keywords:
    "YouTube thumbnail downloader privacy, privacy policy, data protection, YouTube thumbnail tool privacy",
  alternates: {
    canonical: "https://youtubedownloadthumbnails.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | YouTube Thumbnail Downloader",
    description:
      "Our commitment to privacy and data protection. Learn how we handle your information when using our YouTube thumbnail download service.",
    url: "https://youtubedownloadthumbnails.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  mb-8 text-[#FF0000]">
        Privacy Policy
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Effective Date: March 20, 2025</p>

        <p className="mb-6">
          At YouTubeDownloadThumbnails.com, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, and protect your data when you visit our
          website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect two types of information from our users:
          </p>

          <h3 className="text-xl font-semibold mb-2">
            a) Personal Information
          </h3>
          <p className="mb-4">
            When you use our website, we may collect personal information such
            as your name, email address, and other details if you choose to
            subscribe to our newsletter or contact us.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            b) Non-Personal Information
          </h3>
          <p>
            We also collect non-personal information such as your IP address,
            browser type, device information, and pages visited on our website
            to enhance user experience and for analytics purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            2. How We Use Your Information
          </h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Provide a better user experience.</li>
            <li>Respond to inquiries or customer support requests.</li>
            <li>
              Send promotional content or updates about our services (if you
              have opted in).
            </li>
            <li>Monitor and improve the functionality of our website.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            Our website uses cookies to improve the user experience. Cookies are
            small text files that are placed on your device when you visit our
            site. These cookies help us:
          </p>
          <ul className="list-disc pl-6">
            <li>Remember your preferences.</li>
            <li>Understand how users interact with our site.</li>
            <li>Serve personalized content.</li>
          </ul>
          <p className="mt-4">
            You can disable cookies in your browser settings, but doing so may
            affect the functionality of the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            4. Data Sharing and Third Parties
          </h2>
          <p className="mb-4">
            We do not sell or share your personal data with third parties
            unless:
          </p>
          <ul className="list-disc pl-6">
            <li>
              It&apos;s necessary to provide our services (such as using payment
              gateways).
            </li>
            <li>
              We are required by law or have your consent to share your data.
            </li>
            <li>
              We use third-party analytics tools like Google Analytics to
              understand how users interact with our site.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            5. Security of Your Information
          </h2>
          <p>
            We take reasonable measures to protect your personal information.
            While we strive to maintain robust security protocols, please be
            aware that no method of transmission over the Internet is 100%
            secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            6. Your Rights and Choices
          </h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Access and update your personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>Configure your browser to prevent tracking cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not intended for children under the age of 13, and we
            do not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be reflected on this page, and the updated
            date will be noted at the top of the page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or the way your
            data is handled, please contact us at:
          </p>
          <p className="mt-2">Email: support@youtubedownloadthumbnails.com</p>
        </section>
      </div>
    </div>
  );
}
