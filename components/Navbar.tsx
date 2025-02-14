import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold text-purple-600">My Company</a>
        </Link>
        <nav className="space-x-6">
          {["About", "Contact", "Services", "Payouts", "Admin"].map((page, idx) => (
            <Link key={idx} href={`/${page.toLowerCase()}`}>
              <a className="text-gray-800 hover:text-purple-500 font-semibold">
                {page}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
