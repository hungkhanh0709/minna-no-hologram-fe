'use client'

import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./culture.module.scss"
import { Footer } from "@/components/Footer"
import { API_URLS } from "@/lib/api"
import Loading from "@/components/Loading"

type VideoItem = {
  id: string
  slug: string
  title: string
  thumbnail: string
  tags: { id: string; name: string }[]
  likeCount: number
}

export default function CulturePage() {
  const [videos, setVideos] = useState<VideoItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCultureVideos = async () => {
      try {
        const res = await fetch(`${API_URLS.VIDEO_SEARCH}?categoryId=history`)
        const data = await res.json()
        setVideos(data.results || [])
      } catch (error) {
        console.error("Failed to fetch culture videos", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCultureVideos()
  }, [])

  return (
    <div className={styles.page}>
      <Header activePage="culture" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Culture videos</h1>

          {loading ? (
            <Loading />
          ) : (
            <div className={styles.videoGrid}>
              {videos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  slug={video.slug}
                  title={video.title}
                  description=""
                  thumbnail={video.thumbnail}
                  tags={video.tags.map((tag) => tag.name)}
                  likes={video.likeCount}
                  initialLiked={false}
                />
              ))}
            </div>
          )}

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
