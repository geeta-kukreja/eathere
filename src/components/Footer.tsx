import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-4">
        <h2 className="text-2xl font-bold text-orange-600">EatHere</h2>
        <p className="text-sm text-gray-700 max-w-xs">
          One-stop destination for everything food & beverage related.
        </p>
        <div className="flex gap-2 text-black text-xl">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <SiTiktok />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
        </div>
        <p className="text-xs text-gray-500">EatHere © 2030. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
