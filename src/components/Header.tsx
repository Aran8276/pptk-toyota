import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex sticky top-0 bg-white justify-between items-center w-screen py-2 px-12 z-10 border-b border-gray-100">
      <div className="flex items-center space-x-12">
        <div className="w-[48px] h-[48px]">
          <img
            src="/toyota-logo.svg"
            className="w-full h-full"
            alt="Toyota Logo"
          />
        </div>
        <nav className="flex space-x-8">
          <Link to="/">
            <span className="opacity-65 hover:opacity-100 transition-all">
              Home
            </span>
          </Link>
          <Link to="/showroom">
            <span className="opacity-65 hover:opacity-100 transition-all">
              Showroom
            </span>
          </Link>
          <Link to="/locations">
            <span className="opacity-65 hover:opacity-100 transition-all">
              Locations
            </span>
          </Link>
          <Link to="/about">
            <span className="opacity-65 hover:opacity-100 transition-all">
              About
            </span>
          </Link>
        </nav>
      </div>
      <div className="flex px-4 py-2 space-x-3 items-center border-[1px] border-black rounded-full justify-between">
        <Search />
        <button className="">Search Inventory</button>
      </div>
    </header>
  );
}
