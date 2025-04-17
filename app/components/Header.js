"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <div className="font-serif font-bold text-2xl md:text-3xl text-primary">
            <span className="mr-1">家来</span>
            <span className="text-sm md:text-base text-gray-600">うちくる</span>
          </div>
        </Link>

        {/* モバイルメニューボタン */}
        <button
          className="md:hidden relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              isOpen ? "opacity-0" : ""
            }`}
          >
            <span
              className={`block absolute h-0.5 w-6 bg-primary transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-6 bg-primary transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>

        {/* デスクトップメニュー */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#about"
            className="text-gray-700 hover:text-primary font-medium"
          >
            会社概要
          </Link>
          <Link
            href="/#services"
            className="text-gray-700 hover:text-primary font-medium"
          >
            サービス
          </Link>
          <Link
            href="/#works"
            className="text-gray-700 hover:text-primary font-medium"
          >
            施工事例
          </Link>
          <Link
            href="/#plans"
            className="text-gray-700 hover:text-primary font-medium"
          >
            プラン・料金
          </Link>
          <Link
            href="/#blog"
            className="text-gray-700 hover:text-primary font-medium"
          >
            ブログ
          </Link>
          <Link href="/#contact" className="btn btn-primary">
            お問い合わせ
          </Link>
        </nav>

        {/* モバイルメニュー */}
        <div
          className={`fixed inset-0 bg-white z-0 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="h-full flex flex-col justify-center items-center space-y-8 p-4">
            <Link
              href="/#about"
              className="text-xl text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="/#services"
              className="text-xl text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              サービス
            </Link>
            <Link
              href="/#works"
              className="text-xl text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              施工事例
            </Link>
            <Link
              href="/#plans"
              className="text-xl text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              プラン・料金
            </Link>
            <Link
              href="/#blog"
              className="text-xl text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              ブログ
            </Link>
            <Link
              href="/#contact"
              className="btn btn-primary mt-8"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
