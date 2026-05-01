import React from "react";
import { motion } from "framer-motion";
import { Mail, BarChart3, Search, Bot, ShoppingBag, Globe2, Trophy, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Digital Marketing Intern",
    company: "IDP Education",
    period: "2025.11 – 2026.01",
    points: [
      "負責 Threads 社群經營與內容規劃，達成每月約 8% 成長。",
      "製作數據視覺化報表，並運用 n8n 串接自動化數據流程，使工作效率提升 20%。",
      "使用 Ahrefs 進行 SEO / GEO 分析與文章優化，提升內容搜尋表現。",
    ],
  },
  {
    role: "電商專案實習生",
    company: "多元宇宙行銷有限公司",
    period: "2025.09 – 2025.12",
    points: [
      "參與從零開始的電商專案營運，三個月內帶動營業額成長 3 倍。",
      "透過數據分析與轉換流程優化，使顧客轉化率達 18.52%。",
    ],
  },
  {
    role: "實習生 — T 大使計畫",
    company: "台灣行銷研究公司 TMR",
    period: "2025.02 – 2025.08",
    points: [
      "運用 Python 與 Gemini API 開發輿情分析工具，協助品牌策略優化，提升報表產出效率 30%。",
      "負責 TMR 官網優化提案，使用 AI 工具規劃 Sitemap，新版官網視覺提案獲採納。",
    ],
  },
  {
    role: "交換學生",
    company: "義大利西恩納大學",
    period: "2024.09 – 2024.12",
    points: [
      "參與 ATI 台灣華語文學中心與義大利台灣交流協會合辦活動，負責攝影與影片製作，影片點閱數突破千次。",
      "持續學習義大利語，完成官方 A2/B1 課程證明。",
    ],
  },
];

const mainProjects = [
  {
    title: "蝦皮電商成長專案（主打）",
    images: [
      "/projects/shopee-design.jpg",
      "/projects/shopee-sell-data.jpg",
    ],
    description: "累積 3,000+ 訂單，並透過數據優化提升轉換與營收。",
  },
  {
    title: "AI 聊天機器人 / n8n 自動化",
    images: [
      "/projects/ai-chat-bot.png",
      "/projects/analysis-system.png",
    ],
    description: "建立自動化流程與分析系統，提升營運效率。",
  },
  {
    title: "GA4 數據分析",
    image: "/projects/ga4.png",
    description: "分析用戶行為與轉換路徑，優化行銷策略。",
  },
];

const videoProjects = [
  {
    title: "義大利東方嘉年華活動影片",
    video: "/projects/italy-carnival.mp4",
    description: "負責攝影與影片製作，點閱突破 1,000 次。",
  },
];

const skills = [
  "Growth Marketing",
  "Social Media Marketing",
  "SEO / GEO",
  "Ahrefs",
  "n8n Automation",
  "Data Visualization",
  "Python",
  "Gemini API",
  "E-commerce Operation",
  "CRM",
];

const stats = [
  { label: "電商營收成長", value: "3x" },
  { label: "顧客轉化率", value: "18.52%" },
  { label: "效率提升", value: "30%" },
  { label: "累積訂單", value: "3,000+" },
];

export default function PortfolioWebsite() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-tight">林奕綺</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-950">關於我</a>
            <a href="#experience" className="hover:text-slate-950">經歷</a>
            <a href="#projects" className="hover:text-slate-950">專案</a>
            <a href="#contact" className="hover:text-slate-950">聯絡</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Digital Marketing｜Growth｜AI Tools
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              用數據與創意，推動品牌成長。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              我是林奕綺，具備數位行銷、電商營運與 AI 工具應用經驗。擅長結合社群經營、SEO、數據分析與自動化流程，將行銷策略轉化為可衡量的成長成果。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-2xl px-5 py-6 text-base" asChild>
                <a href="#projects">查看專案 <ArrowUpRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" className="rounded-2xl px-5 py-6 text-base" asChild>
                <a href="#contact">聯絡我</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-white">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-950">成長行銷實戰成果</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  從社群、SEO 到電商營運，透過工具與數據優化流程，創造具體商業成果。
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-2xl font-bold text-slate-950">{item.value}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">About</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">關於我</h2>
              <p className="mt-6 text-lg leading-9 text-slate-600">
                我專注於數位行銷與成長策略，曾於 IDP Education、台灣行銷研究公司與電商專案中累積實務經驗。熟悉 Ahrefs、n8n、數據視覺化、Python 與 Gemini API，能將 AI 工具與數據分析導入行銷流程，提升內容表現、營運效率與決策品質。
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Experience</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">工作與學習經歷</h2>
            </div>
          </div>
          <div className="grid gap-5">
            {experiences.map((exp, index) => (
              <motion.div key={exp.role} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }}>
                <Card className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                  <CardContent className="grid gap-6 p-6 md:grid-cols-[0.32fr_1fr]">
                    <div>
                      <p className="text-sm font-medium text-slate-500">{exp.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-950">{exp.role}</h3>
                      <p className="mt-1 text-slate-600">{exp.company}</p>
                    </div>
                    <ul className="space-y-3 text-slate-600">
                      {exp.points.map((point) => (
                        <li key={point} className="leading-7">• {point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Projects</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">精選專案</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {mainProjects.map((project) => {
                return (
                  <Card key={project.title} className="rounded-3xl border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <CardContent className="p-6">
                      {/* 多圖片 */}
                      {project.images && (
                        <div className="mb-5 grid grid-cols-2 gap-2">
                          {project.images.map((img) => (
                            <img
                              key={img}
                              src={img}
                              onClick={() => setSelectedImage(img)}
                              className="h-32 w-full rounded-xl object-cover cursor-pointer hover:opacity-80"
                            />
                          ))}
                        </div>
                      )}

                      {/* 單圖片 */}
                      {project.image && (
                        <img
                          src={project.image}
                          className="mb-5 h-40 w-full rounded-xl object-cover"
                        />
                      )}

                      {/* 影片 */}
                      {project.video && (
                        <video
                          src={project.video}
                          controls
                          className="mb-5 h-48 w-full rounded-xl object-cover"
                        />
                      )}

                      <h3 className="text-xl font-semibold text-slate-950">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* 影音作品 */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center">
              影音作品
            </h2>

            <div className="flex justify-center">
              {videoProjects.map((project) => (
                <div key={project.title} className="max-w-xs w-full">
                  <video
                    src={project.video}
                    controls
                    className="aspect-[9/16] w-full rounded-2xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-center">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <Card className="rounded-[2rem] border-slate-200 bg-slate-950 text-white shadow-xl">
            <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_0.7fr] md:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Contact</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">期待與你一起創造成長。</h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                  若你正在尋找具備數據思維、AI 工具應用與行銷執行力的人才，歡迎與我聯繫。
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end md:justify-center">
                <Button variant="secondary" className="w-full rounded-2xl py-6 text-base md:w-auto" asChild>
                  <a href="mailto:your.email@example.com"><Mail className="mr-2 h-4 w-4" /> Email Me</a>
                </Button>
                <Button variant="outline" className="w-full rounded-2xl border-white/20 bg-transparent py-6 text-base text-white hover:bg-white hover:text-slate-950 md:w-auto" asChild>
                  
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 圖片 Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          >
            <img
              src={selectedImage}
              className="max-h-[90%] max-w-[90%] rounded-xl"
            />
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © 2026 林奕綺. All rights reserved.
      </footer>
    </div>
  );
}
