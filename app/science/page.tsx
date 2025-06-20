"use client"

import { Header } from "@/components/Header"
import styles from "./science.module.scss"
import { VideoCard } from "@/components/VideoCard"
import { Footer } from "@/components/Footer"

export default function SciencePage() {
  const videos = [
    {
      id: "1",
      title: "The Physics of Holography Explained",
      thumbnail: "https://images.unsplash.com/photo-1501951653466-8df816debe46?auto=format&fit=crop&w=400&q=80",
      description: "Understanding the scientific principles behind how holograms work through light diffraction and interference.",
      tags: ["science", "physics"],
      likes: 287,
      isLiked: true,
    },
    {
      id: "2",
      title: "Laser Technology in Modern Holography",
      thumbnail: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=400&q=80",
      description: "How coherent light from lasers makes detailed holographic imaging possible.",
      tags: ["science", "technology"],
      likes: 156,
      isLiked: false,
    },
    {
      id: "3",
      title: "Digital Holography: Science and Applications",
      thumbnail: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=400&q=80",
      description: "Exploring how computer-generated interference patterns create digital holograms.",
      tags: ["science", "digital"],
      likes: 203,
      isLiked: true,
    },
    {
      id: "4",
      title: "Quantum Holography: The Future of 3D Imaging",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      description: "How quantum principles are being applied to create next-generation holographic technologies.",
      tags: ["science", "quantum"],
      likes: 89,
      isLiked: false,
    },
  ]

  return (
    <div className={styles.page}>
      <Header activePage="science" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Hologram Science</h1>

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
