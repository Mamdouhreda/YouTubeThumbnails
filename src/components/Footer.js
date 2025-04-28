import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()} YouTube Thumbnails Download. All rights
            reserved.
          </p>
          <Link
            href="/privacy"
            className="text-sm hover:text-[#FF0000] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
