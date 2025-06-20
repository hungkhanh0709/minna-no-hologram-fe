"use client"

import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./culture.module.scss"
import { Footer } from "@/components/Footer"


export default function CulturePage() {
  const videos = [
    {
      id: "1",
      title: "Holograms in Modern Entertainment",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80",
      description: "How holographic technology is revolutionizing concerts, museums, and entertainment venues worldwide.",
      tags: ["culture", "entertainment"],
      likes: 203,
      isLiked: false,
    },
    {
      id: "2",
      title: "Virtual Idols: Holographic Performers",
      thumbnail: "https://images.unsplash.com/photo-1567722681579-c671cabd2810?auto=format&fit=crop&w=400&h=240",
      description: "The cultural phenomenon of holographic virtual performers and their growing fanbase.",
      tags: ["culture", "music"],
      likes: 178,
      isLiked: true,
    },
    {
      id: "3",
      title: "Holographic Art: New Frontiers in Creativity",
      thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=400&q=80",
      description: "Artists embracing holographic technology to create immersive installations and interactive experiences.",
      tags: ["culture", "art"],
      likes: 145,
      isLiked: true,
    },
    {
      id: "4",
      title: "Traditional Meets Tech: Cultural Heritage in Holograms",
      thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80",
      description: "How museums and cultural institutions use holograms to preserve and showcase cultural artifacts.",
      tags: ["culture", "heritage"],
      likes: 92,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="culture" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Hologram Culture</h1>

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
