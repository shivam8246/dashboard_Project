import React from "react";

type NavbarProps = {
  toggleSidebar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center lg:hidden">
      <button onClick={toggleSidebar} className="text-xl">
        ☰
      </button>
      <h1 className="text-lg font-bold">My App</h1>
    </header>
  );
};

export default Navbar;
