"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ブログ記事データ
const blogPosts = [
  {
    id: 1,
    title: "急な来客時でも見た目がすっきりする収納術",
    excerpt:
      "日々の暮らしの中で、どうしても散らかってしまう生活感。特に急な来客の時に慌てないためのすっきり収納術をご紹介します。",
    date: "2023-04-10",
    image: "/img/sra-03.jpg",
    category: "収納術",
  },
  {
    id: 2,
    title: "福井の冬を快適に過ごすための断熱リフォームのポイント",
    excerpt:
      "福井の厳しい冬を乗り切るための効果的な断熱リフォーム。費用対効果の高い改修方法や補助金情報も合わせてご紹介します。",
    date: "2023-03-15",
    image: "/img/1611812543.jpg",
    category: "断熱対策",
  },
  {
    id: 3,
    title: "家族が集まるダイニングの作り方",
    excerpt:
      "家族のコミュニケーションを促す、居心地の良いダイニング空間の作り方。素材選びから照明、家具の配置まで実例を交えて解説します。",
    date: "2023-02-20",
    image: "/img/sra-03.jpg",
    category: "間取り",
  },
];

// イベント情報
const events = [
  {
    id: 1,
    title: "完成見学会「自然素材を活かした平屋の家」",
    date: "2023年5月20日（土）・21日（日）",
    location: "福井市〇〇町",
    description:
      "自然素材をふんだんに使用した、明るく開放的な平屋の完成見学会を開催します。要予約制・完全自由参加。",
  },
  {
    id: 2,
    title: "リフォーム相談会",
    date: "2023年6月10日（土）・11日（日）",
    location: "当社ショールーム",
    description:
      "リフォームをお考えの方向けの無料相談会。個別相談形式で、ご要望やお悩みに合わせたアドバイスをいたします。",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section bg-natural-light">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ブログ・お役立ち情報
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            住まいに関する情報やイベントのお知らせ
          </motion.p>
        </div>

        {/* ブログ記事 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline flex items-center"
                >
                  続きを読む
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

        {/* イベント情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">
              イベント情報
            </h3>
            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                >
                  <h4 className="text-xl font-bold mb-2 text-primary">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-y-2 mb-2">
                    <div className="flex items-center mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-600">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Link href="/#contact">
                    <span className="btn btn-outline inline-flex">
                      詳細・予約はこちら
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
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="btn btn-primary">
              ブログ記事一覧へ
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
