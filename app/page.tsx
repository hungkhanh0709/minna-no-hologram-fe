"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import { Footer } from "@/components/Footer"
import styles from "./page.module.scss"
import { FaArrowUpRightDots, FaClock, FaWrench } from "react-icons/fa6"
import { API_URLS } from "@/lib/api"
import Image from "next/image"

type HeroSectionProps = {
  video?: {
    id: string
    title: string
    category: {
      id: string
      name: string
      description: string
    }
    slug: string
    thumbnail: string
  } | null
}

export function HeroSection({ video }: HeroSectionProps) {
  const [showRealContent, setShowRealContent] = useState(false)

  useEffect(() => {
    if (video) {
      const timeout = setTimeout(() => {
        setShowRealContent(true)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [video])

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${video?.thumbnail})` }}
    >
      <div className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {showRealContent ? video?.title : <span className={styles.skeletonTitle} />}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {showRealContent ? video?.category?.name : <span className={styles.skeletonText} />}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showRealContent ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={video ? `/video/${video.slug}` : "#"}
            className={styles.playButton}
            style={{ pointerEvents: showRealContent ? "auto" : "none" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function HomePage() {
  const [recentVideos, setRecentVideos] = useState<any[]>([])
  const [recentDIY, setRecentDIY] = useState<any | null>(null)
  const heroVideo = recentVideos[0]
  const otherVideos = recentVideos.slice(1)

  useEffect(() => {
    fetch(API_URLS.HOME)
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi khi gọi API")
        return res.json()
      })
      .then((data) => {
        setRecentVideos(data.recentVideos || [])
        setRecentDIY(data.recentDIY || null)
      })
      .catch((err) => {
        console.error("Lỗi API HOME:", err)
      })
  }, [])

  return (
    <div className={styles.homepage}>
      <Header activePage="home" />

      <main>
        <HeroSection video={heroVideo} />

        <section className={styles.recentVideos}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Recent video upload</h2>
            <div className={styles.videoGrid}>
              {otherVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard
                    id={video.id}
                    slug={video.slug}
                    title={video.title}
                    description={video.category.name}
                    thumbnail={video.thumbnail}
                    tags={video.tags.map((tag: any) => tag.name)}
                    likes={video.likeCount}
                    initialLiked={false}
                  />
                </motion.div>
              ))}
            </div>
            <motion.div
              className={styles.viewMoreContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <button className={styles.viewMoreButton}><span>View more</span></button>
            </motion.div>
          </div>
        </section>

        {recentDIY && (
          <section className={styles.recentDiy}>
            <div className={styles.container}>
              <motion.div
                className={styles.diyContent}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className={styles.diyHeader}>
                  <div className={styles.diyIcon}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className={styles.diyTitle}>Recent DIY Hologram</h2>
                </div>

                <h3 className={styles.diyProjectTitle}>{recentDIY.title}</h3>
                <p className={styles.diyDescription}>{recentDIY.summary}</p>

                <div className={styles.diyMetrics}>
                  <div className={styles.diyMetric}>
                    <FaClock size={24} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>EST. TIME</span>
                      <span className={styles.diyMetricValue}>{recentDIY.estimatedTime}</span>
                    </div>
                  </div>
                  <div className={styles.diyMetric}>
                    <FaWrench size={24} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>STEPS</span>
                      <span className={styles.diyMetricValue}>{recentDIY.stepCount} steps</span>
                    </div>
                  </div>
                  <div className={styles.diyMetric}>
                    <FaArrowUpRightDots size={24} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>LEVEL</span>
                      <span className={styles.diyMetricValue}>{recentDIY.difficulty}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/diy/${recentDIY.slug}`} className={styles.viewDetailLink}>
                  View detail
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06L19.19 12l-2.47-2.47a.75.75 0 010-1.06zM1.25 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                className={styles.diyImageContainer}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Image width={500} height={500} src={recentDIY.thumbnail} alt={recentDIY.title} className={styles.diyImage} />
              </motion.div>
            </div>

            <motion.div
              className={styles.viewMoreContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <button className={styles.viewMoreButton}>View more</button>
            </motion.div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
