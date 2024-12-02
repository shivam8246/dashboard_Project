import React from "react";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transition-transform duration-300 lg:static lg:translate-x-0`}
    >
      <h2 className="text-xl font-bold p-4 border-b border-gray-700">
        Sidebar
      </h2>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="p-4 hover:bg-gray-700">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
