"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import styles from "./search.module.scss"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { API_URLS } from "@/lib/api"
import Loading from "@/components/Loading"

export default function SearchPage() {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Suspense fallback={<p>Loading...</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!query) return

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URLS.SEARCH}?p=${query}`, { credentials: "include" })
        if (!res.ok) throw new Error("Failed to fetch")
        const data = await res.json()
        const results = (data.results || []).filter((item: any) => item.type === "video").map((item: any) => item.content)
        setVideos(results)
      } catch (err) {
        console.error("Error:", err)
        setVideos([])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query])

  return (
    <>
      <div className={styles.searchHeader}>
        <h1 className={styles.pageTitle}>
          {query ? `Search results for "${query}"` : "Search"}
        </h1>
        {query && !loading && (
          <p className={styles.resultsCount}>
            {videos.length} {videos.length === 1 ? "result" : "results"} found
          </p>
        )}
      </div>

      {query ? (
        loading ? (
          <Loading />
        ) : videos.length > 0 ? (
          <motion.div
            className={styles.videoGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                <VideoCard
                  slug={video.slug}
                  id={video.id}
                  title={video.title}
                  description={video.category?.name}
                  thumbnail={video.thumbnail}
                  tags={(video.tags || []).map((tag: any) => tag.name)}
                  likes={video.likeCount}
                  initialLiked={false}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h3 className={styles.noResultsTitle}>No results found</h3>
            <p className={styles.noResultsText}>
              Try adjusting your search terms or browse our categories to discover amazing content.
            </p>
          </div>
        )
      ) : (
        <div className={styles.searchPrompt}>
          <div className={styles.searchPromptIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
          <h3 className={styles.searchPromptTitle}>Start your search</h3>
          <p className={styles.searchPromptText}>
            Enter keywords to find videos about science, history, culture, or DIY projects.
          </p>
        </div>
      )}
    </>
  )
}
