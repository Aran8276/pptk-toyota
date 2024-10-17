import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex border-gray-200 py-6 border-t-[1px] justify-center">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center space-x-4">
          <a href="#">
            <Instagram className="size-5" />
          </a>
          <a href="#">
            <Github className="size-5" />
          </a>
          <a href="#">
            <Facebook className="size-5" />
          </a>
          <a href="#">
            <Dribbble className="size-5" />
          </a>
          <a href="#">
            <Twitter className="size-5" />
          </a>
        </div>
        <p className="text-gray-500">@Aran8276 2024, All rights reserved.</p>
      </div>
    </footer>
  );
}
