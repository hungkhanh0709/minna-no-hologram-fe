"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./page.module.scss"
import { Footer } from "@/components/Footer"
import { FaArrowUpRightDots, FaClock, FaWrench } from "react-icons/fa6"

export default function HomePage() {
  const videos = [
    {
      id: "1",
      title: "How Holograms Work: The Science Explained",
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
      description: "Dive into the fascinating science behind holography and how light creates 3D illusions.",
      tags: ["hologram", "science"],
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      title: "Hologram Video Projection: Smartphone Demo",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
      description: "A step-by-step guide to building a simple hologram projector using everyday materials and your smartphone.",
      tags: ["DIY", "hologram", "projector"],
      likes: 87,
      isLiked: true,
    },
    {
      id: "3",
      title: "Holographic Art: The Future of Visual Storytelling",
      thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Explore how artists are using holograms to create immersive and interactive art experiences.",
      tags: ["hologram", "art", "technology"],
      likes: 65,
      isLiked: false,
    },
    {
      id: "4",
      title: "Top 5 Hologram Applications in Everyday Life",
      thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "From concerts to medical imaging, discover how holograms are changing the world around us.",
      tags: ["hologram", "technology", "innovation"],
      likes: 234,
      isLiked: true,
    },
  ]

  return (
    <div className={styles.homepage}>
      <Header activePage="home" />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Explore the World of Holograms</h1>
            <p>
              Discover the magic of 3D holographic projections, learn how to create your own DIY hologram displays, and explore the fascinating science behind this cutting-edge technology.
            </p>
            <button className={styles.playButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className={styles.recentVideos}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Recent video upload</h2>

            <div className={styles.videoGrid}>

              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                    tags={video.tags}
                    likes={video.likes}
                    initialLiked={video.isLiked}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.viewMoreContainer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <button className={styles.viewMoreButton}><span>View more</span></button>
            </motion.div>

          </div>
        </section>

        <section className={styles.recentDiy}>
          <div className={styles.container}>

            <motion.div
              className={styles.diyContent}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.diyHeader}>
                <div className={styles.diyIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className={styles.diyTitle}>Recent DIY Hologram</h2>
              </div>

              <h3 className={styles.diyProjectTitle}>Build Your Own Hologram Projector</h3>
              <p className={styles.diyDescription}>
                Create a mesmerizing hologram projector at home using simple materials and your smartphone. Impress your friends and explore the magic of 3D light illusions!
              </p>

              <div className={styles.diyMetrics}>
                <div className={styles.diyMetric}>
                  <FaClock size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>PREP TIME</span>
                    <span className={styles.diyMetricValue}>5 minutes</span>
                  </div>
                </div>
                <div className={styles.diyMetric}>
                  <FaWrench size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>DIY TIME</span>
                    <span className={styles.diyMetricValue}>15 minutes</span>
                  </div>
                </div>
                <div className={styles.diyMetric}>
                  <FaArrowUpRightDots size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>LEVEL</span>
                    <span className={styles.diyMetricValue}>Easy</span>
                  </div>
                </div>
              </div>

              <Link href="/diy/hologram-detail" className={styles.viewDetailLink}>
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
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="DIY Hologram Projector" className={styles.diyImage} />
            </motion.div>
          </div>
          <motion.div
            className={styles.viewMoreContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <button className={styles.viewMoreButton}>View more</button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div >
  )
}
