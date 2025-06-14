"use client"

import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./culture.module.css"
import { Footer } from "@/components/Footer"


export default function CulturePage() {
  const videos = [
    {
      id: "1",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Exploring the rich cultural traditions from around the world.",
      tags: ["culture", "traditions"],
      likes: 203,
      isLiked: false,
    },
    {
      id: "2",
      title: "Global Cuisine: Stories Behind the Dishes",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Discover the cultural significance of iconic dishes from around the world.",
      tags: ["culture", "cuisine"],
      likes: 178,
      isLiked: true,
    },
    {
      id: "3",
      title: "Traditional Dances: Movement as Cultural Expression",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "How dance preserves cultural identity and tells stories across generations.",
      tags: ["culture", "dance"],
      likes: 145,
      isLiked: true,
    },
    {
      id: "4",
      title: "Artisanal Crafts: Preserving Cultural Heritage",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Traditional craftsmanship that keeps cultural techniques alive.",
      tags: ["culture", "crafts"],
      likes: 92,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="culture" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Culture videos</h1>

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
