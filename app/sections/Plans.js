"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Plans() {
  return (
    <section id="plans" className="section bg-white">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            プラン・料金
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            お客様の予算や要望に合わせた柔軟な対応が可能です
          </motion.p>
        </div>

        {/* プラン・料金表 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* 新築プラン */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-primary transition-colors duration-300">
            <div className="bg-primary py-4">
              <h3 className="text-xl font-bold text-white text-center">
                新築プラン
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">1,800</span>
                <span className="text-xl">万円〜</span>
                <p className="text-gray-600 mt-2">延床面積30坪の場合</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>設計から施工まで一貫対応</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>土地探しからサポート可能</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>打ち合わせは何度でも無料</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>定期点検・アフターフォロー</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/#contact">
                  <span className="btn btn-primary w-full">お問い合わせ</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 全面リノベーションプラン */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-primary transition-colors duration-300">
            <div className="bg-primary py-4">
              <h3 className="text-xl font-bold text-white text-center">
                全面リノベーションプラン
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">500</span>
                <span className="text-xl">万円〜</span>
                <p className="text-gray-600 mt-2">30坪の住宅の場合</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>間取り変更・全面改装</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>水回り・電気設備の刷新</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>断熱・気密性能の向上</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>保証付き・アフターフォロー</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/#contact">
                  <span className="btn btn-primary w-full">お問い合わせ</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 部分リフォームプラン */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-primary transition-colors duration-300">
            <div className="bg-primary py-4">
              <h3 className="text-xl font-bold text-white text-center">
                部分リフォームプラン
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">50</span>
                <span className="text-xl">万円〜</span>
                <p className="text-gray-600 mt-2">キッチン・浴室・トイレなど</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>水回り設備の交換・修繕</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>壁・床・天井のリフォーム</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>小さな修繕にも対応</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>アフターフォロー付き</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/#contact">
                  <span className="btn btn-primary w-full">お問い合わせ</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 施工の流れ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">施工の流れ</h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* 線 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

              {/* ステップ1 */}
              <div className="relative mb-12">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mx-auto">
                    1
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">
                    無料相談・プランニング
                  </h4>
                  <p>
                    お客様のご要望やライフスタイルをヒアリングし、理想の住まいを一緒に考えます。予算やスケジュールの擦り合わせも行います。
                  </p>
                </div>
              </div>

              {/* ステップ2 */}
              <div className="relative mb-12">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mx-auto">
                    2
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">設計・お見積り</h4>
                  <p>
                    具体的な設計・プランをご提案し、詳細なお見積りを作成します。ご要望に合わせて修正を重ね、理想のプランに仕上げていきます。
                  </p>
                </div>
              </div>

              {/* ステップ3 */}
              <div className="relative mb-12">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mx-auto">
                    3
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">ご契約・施工</h4>
                  <p>
                    プランにご納得いただいた後、契約を締結し施工に入ります。専任の担当者が工事の進捗を随時報告し、安心してお任せいただけます。
                  </p>
                </div>
              </div>

              {/* ステップ4 */}
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center z-10 mx-auto">
                    4
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold mb-2">
                    お引き渡し・アフターフォロー
                  </h4>
                  <p>
                    完成後の検査を経てお引き渡しします。その後も定期点検やメンテナンスを通じて、末永く快適な住まいをサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
