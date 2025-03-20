import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#282828] text-white shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold hover:text-[#FF0000] transition-colors"
          >
            <span className="text-[#FF0000]">YouTube</span>
            <span>thumbnails Download</span>
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-[#FF0000] transition-colors">
              Home
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#FF0000] transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
