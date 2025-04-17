"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section bg-natural-light">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            会社概要
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            「家来（うちくる）」という社名に込めた想い
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/img/1627119860.jpg"
              alt="代表の写真"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              お客様の家に寄り添い、
              <br />
              一緒に未来をつくる
            </h3>
            <p className="mb-4">
              「うちくる？」の疑問から会話が始まります。「家来（うちくる）」という社名には、「お客様の家に来る」「お客様の家を訪れる」という想いを込めています。
            </p>
            <p className="mb-4">
              私たちは単なる建築会社ではなく、お客様の暮らしに寄り添うパートナーでありたいと考えています。日本人が大切にする"さりげないおもてなし"を形にし、福井の風土と暮らしに根ざした家づくりを手がけています。
            </p>
            <p className="mb-6">
              住まいは長く付き合うものだからこそ、私たちは「うちくる？」と気軽に声をかけていただける存在でありたいと願っています。
            </p>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-2">代表挨拶</h4>
              <p className="italic">
                「お客様にとって、いつでも帰りたくなる場所をつくりたい」
              </p>
              <p className="text-right mt-2">代表取締役 福井 太郎</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">地域密着</h3>
            <p className="text-center">
              福井の気候や文化を熟知し、地域に根ざした家づくりを行っています。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">安心の対応</h3>
            <p className="text-center">
              急な問い合わせでも安心して相談できる気軽さを大切にしています。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">匠の技術</h3>
            <p className="text-center">
              熟練の職人が確かな技術で、末永く愛される住まいをつくります。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
