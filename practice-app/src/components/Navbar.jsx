import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4">
        <h1 className="text-2xl font-bold">MyWebsite</h1>

        <div className="flex flex-wrap gap-5 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-yellow-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;