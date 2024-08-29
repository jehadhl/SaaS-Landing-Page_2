import LogoImage from "@/assets/images/logosaas.png";
import Menu from "@/assets/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";
export const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="container ">
        <div className="py-4 items-center justify-between flex">
          <div className="relative">
            <div className="absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#f878ff,#fb92cf,#ffdd9b,#c2f081,#2fd8fe)] blur-md" />
            <Image src={LogoImage} alt="image" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 rounded-lg h-10 w-10 inline-flex items-center justify-center sm:hidden">
            <Menu className="text-white" />
          </div>
          <nav className="sm:flex gap-6 items-center hidden">
            <Link
              href="#"
              className="hover:text-opacity-100 text-white text-opacity-60"
            >
              About
            </Link>
            <Link
              href="#"
              className="hover:text-opacity-100 text-white text-opacity-60"
            >
              Features
            </Link>
            <Link
              href="#"
              className="hover:text-opacity-100 text-white text-opacity-60"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="hover:text-opacity-100 text-white text-opacity-60"
            >
              Help
            </Link>
            <Link
              href="#"
              className="hover:text-opacity-100 text-white text-opacity-60"
            >
              Customers
            </Link>
            <button className="bg-white px-4 py-2 rounded-lg font-medium">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
