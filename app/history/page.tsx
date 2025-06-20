"use client"

import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./history.module.scss"
import { Footer } from "@/components/Footer"


export default function HistoryPage() {
  const videos = [
    {
      id: "1",
      title: "History of Holography: From Light to 3D",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80",
      description: "Exploring the fascinating evolution of holographic technology from its invention to today's applications.",
      tags: ["history", "hologram"],
      likes: 87,
      isLiked: false,
    },
    {
      id: "2",
      title: "Dennis Gabor: Father of Holography",
      thumbnail: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=400&q=80",
      description: "Learn about the Nobel Prize-winning physicist who invented holography in 1947.",
      tags: ["history", "biography"],
      likes: 142,
      isLiked: true,
    },
    {
      id: "3",
      title: "Evolution of Holographic Displays",
      thumbnail: "https://images.unsplash.com/photo-1567722681579-c671cabd2810?auto=format&fit=crop&w=400&h=240",
      description: "From early laser holograms to modern digital displays, see how holographic technology transformed over decades.",
      tags: ["history", "technology"],
      likes: 98,
      isLiked: true,
    },
    {
      id: "4",
      title: "Holograms in Pop Culture History",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&q=80",
      description: "How science fiction and entertainment shaped our understanding and expectations of holographic technology.",
      tags: ["history", "culture"],
      likes: 56,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="history" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Hologram History</h1>

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
