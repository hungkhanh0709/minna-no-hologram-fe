"use client"

import { Header } from "@/components/Header"
import styles from "./science.module.scss"
import { VideoCard } from "@/components/VideoCard"
import { Footer } from "@/components/Footer"

export default function SciencePage() {
  const videos = [
    {
      id: "1",
      title: "Quantum Physics: The Mysteries of the Universe",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Exploring the fascinating world of quantum mechanics and its implications.",
      tags: ["science", "universe"],
      likes: 287,
      isLiked: true,
    },
    {
      id: "2",
      title: "The Science Behind Black Holes",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Understanding the physics of these cosmic phenomena.",
      tags: ["science", "universe"],
      likes: 156,
      isLiked: false,
    },
    {
      id: "3",
      title: "DNA and Genetic Engineering",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "How scientists are revolutionizing medicine through genetics.",
      tags: ["science", "biology"],
      likes: 203,
      isLiked: true,
    },
    {
      id: "4",
      title: "Climate Change: The Science Behind Global Warming",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Understanding the scientific evidence for climate change.",
      tags: ["science", "environment"],
      likes: 89,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="science" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Science videos</h1>

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
