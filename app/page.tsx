"use client"

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
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 15,
      isLiked: true,
    },
    {
      id: "3",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 89,
      isLiked: false,
    },
    {
      id: "4",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
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
            <h1>Landing page title</h1>
            <p>
              Subheading that sets up context, shares more info about the website, or generally gets people psyched to
              keep scrolling.
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
              {videos.map((video) => (
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
              ))}
            </div>

            <div className={styles.viewMoreContainer}>
              <button className={styles.viewMoreButton}>View more</button>
            </div>
          </div>
        </section>

        <section className={styles.recentDiy}>
          <div className={styles.container}>
            <div className={styles.diyContent}>
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

              <h3 className={styles.diyProjectTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing ipsum</h3>
              <p className={styles.diyDescription}>
                Experience the future of payments: fast, secure, and tailored for the next generation's convenience and
                trust.
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
            </div>

            <div className={styles.diyImageContainer}>
              <img src="/placeholder.svg?height=400&width=400" alt="DIY Hologram Pyramid" className={styles.diyImage} />
            </div>
          </div>

          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>View more</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
