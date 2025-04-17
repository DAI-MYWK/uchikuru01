"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-kitchen.jpg"
          alt="木の温もりを感じるキッチンと家族"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-md text-white ml-0 md:ml-4 mr-auto">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            あなたらしさが息づく
            <br />
            住まいをつくる
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-100 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            見た目だけじゃなく、暮らしやすさとさりげない誇りを。
            <br />
            新築もリフォームも、お客様らしさを大切に仕上げます。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/#services">
              <span className="btn btn-primary">
                サービスを見る
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
            <Link href="/#contact">
              <span className="btn btn-outline bg-transparent text-white border-white hover:bg-white hover:text-primary">
                お問い合わせ
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
