"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 施工事例データ
const worksData = [
  {
    id: 1,
    title: "自然光あふれる開放的な家",
    category: "新築",
    description:
      "大きな窓から光が差し込む、開放感のあるリビングが特徴的な住宅です。友人を招いても余裕のある空間設計。",
    image: "/img/20220702-069yao-small-5590.jpg",
  },
  {
    id: 2,
    title: "モダンテイストの平屋",
    category: "新築",
    description:
      "和モダンテイストを取り入れた平屋建て。シンプルな外観と落ち着いた内装が特徴です。",
    image: "/img/1657939051_20220703-022yao-small-384.jpg",
  },
  {
    id: 3,
    title: "キッチンリフォーム",
    category: "リフォーム",
    description:
      "老朽化したキッチンを最新設備にリフォーム。家族との会話を楽しめる対面式キッチンに。",
    image: "/img/1645142536_1628502486.jpg",
  },
  {
    id: 4,
    title: "築30年戸建てのフルリノベーション",
    category: "リノベーション",
    description:
      "古い間取りを一新し、現代の暮らしに合わせた空間に。断熱性能も大幅に向上。",
    image: "/img/20220702-005yao-small-015.jpg",
  },
];

// お客様の声データ
const testimonials = [
  {
    id: 1,
    text: "急に友人が来ても、いつも通りの状態で迎えられて安心です。収納計画が本当によく考えられていて、日々の暮らしが楽になりました。",
    name: "K.T様 (新築)",
    image: "/img/1.jpg",
  },
  {
    id: 2,
    text: "リフォーム前は不安もありましたが、丁寧な説明と提案で安心して任せられました。なんだかんだで、つい自慢したくなる家になりました（笑）",
    name: "M.S様 (リフォーム)",
    image: "/img/aaaaa-scaled-e1657170109140.jpg",
  },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'new', 'reform'

  // カテゴリーでフィルタリング
  const filteredWorks =
    activeTab === "all"
      ? worksData
      : activeTab === "new"
      ? worksData.filter((work) => ["新築"].includes(work.category))
      : worksData.filter((work) =>
          ["リフォーム", "リノベーション"].includes(work.category)
        );

  return (
    <section id="works" className="section bg-natural-light">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            施工事例
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            家族や友人をもてなす、心地よい空間づくりの実例
          </motion.p>
        </div>

        {/* カテゴリータブ */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-6 py-2 text-sm font-medium ${
                activeTab === "new"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              新築
            </button>
            <button
              onClick={() => setActiveTab("reform")}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "reform"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              リフォーム・リノベーション
            </button>
          </div>
        </motion.div>

        {/* 施工事例カード */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={work.image}
                  alt={work.title}
                  layout="fill"
                  objectFit="cover"
                />
                <span className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded">
                  {work.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-4">{work.description}</p>
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  詳細を見る
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* お客様の声 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">お客様の声</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="italic mb-4">"{testimonial.text}"</p>
                    <p className="text-sm font-bold text-gray-600">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="btn btn-outline">
              もっと見る
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
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
