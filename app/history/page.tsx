"use client"

import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./history.module.css"
import { Footer } from "@/components/Footer"


export default function HistoryPage() {
  const videos = [
    {
      id: "1",
      title: "Ancient Civilizations: Lost Technologies",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Exploring the remarkable technologies of ancient civilizations.",
      tags: ["history", "ancient"],
      likes: 87,
      isLiked: false,
    },
    {
      id: "2",
      title: "Medieval Castles: Engineering Marvels",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Discover the ingenious design and construction of medieval fortresses.",
      tags: ["history", "medieval"],
      likes: 142,
      isLiked: true,
    },
    {
      id: "3",
      title: "The Renaissance: Art and Innovation",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Explore the cultural rebirth that transformed Europe.",
      tags: ["history", "renaissance"],
      likes: 98,
      isLiked: true,
    },
    {
      id: "4",
      title: "Industrial Revolution: Changing the World",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "How machinery and innovation transformed society forever.",
      tags: ["history", "industrial"],
      likes: 56,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="history" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>History videos</h1>

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
            <button className={styles.viewMoreButton}>
              View more
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
