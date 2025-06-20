"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import styles from "./search.module.scss"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const allVideos = [
    {
      id: "1",
      title: "Hologram Technology in Modern Entertainment",
      thumbnail: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?auto=format&fit=crop&w=400&h=240",
      description: "Discover how hologram technology is revolutionizing concerts, theater, and movie experiences.",
      tags: ["culture", "entertainment"],
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      title: "The Physics of Holographic Technology",
      thumbnail: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?auto=format&fit=crop&w=400&h=240",
      description: "Exploring the fascinating world of light physics that makes holograms possible.",
      tags: ["science", "physics"],
      likes: 287,
      isLiked: true,
    },
    {
      id: "3",
      title: "Holography: From Science Fiction to Reality",
      thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&h=240",
      description: "Tracing the evolution of hologram technology from sci-fi concepts to real-world applications.",
      tags: ["history", "technology"],
      likes: 89,
      isLiked: false,
    },
    {
      id: "4",
      title: "DIY Hologram Pyramid Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=400&h=240",
      description: "Learn how to create amazing hologram effects at home with simple materials.",
      tags: ["diy", "tutorial"],
      likes: 234,
      isLiked: true,
    },
    {
      id: "5",
      title: "Quantum Holography: The Future of Computing",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&h=240",
      description: "Understanding how quantum computing and holography might merge in future technologies.",
      tags: ["science", "quantum"],
      likes: 156,
      isLiked: false,
    },
    {
      id: "6",
      title: "Hologram Museums: Preserving History in 3D",
      thumbnail: "https://images.unsplash.com/photo-1567722681579-c671cabd2810?auto=format&fit=crop&w=400&h=240",
      description: "Discover how museums are using holographic displays to bring artifacts and history to life.",
      tags: ["history", "museums"],
      likes: 203,
      isLiked: true,
    },
    {
      id: "7",
      title: "Virtual Idols: Holographic Performers in Global Culture",
      thumbnail: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=400&h=240",
      description: "Exploring the phenomenon of virtual holographic performers captivating audiences worldwide.",
      tags: ["culture", "entertainment"],
      likes: 178,
      isLiked: false,
    },
    {
      id: "8",
      title: "Advanced Hologram Projects for Enthusiasts",
      thumbnail: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=400&h=240",
      description: "Take your DIY hologram skills to the next level with these intermediate projects.",
      tags: ["diy", "advanced"],
      likes: 92,
      isLiked: true,
    },
  ]

  const filteredVideos = query
    ? allVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.description.toLowerCase().includes(query.toLowerCase()) ||
        video.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
    )
    : allVideos

  return (
    <div className={styles.page}>
      <Header className={styles.header} />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Search Results Header */}
          <div className={styles.searchHeader}>
            <h1 className={styles.pageTitle}>{query ? `Search results for "${query}"` : "Search"}</h1>
            {query && (
              <p className={styles.resultsCount}>
                {filteredVideos.length} {filteredVideos.length === 1 ? "result" : "results"} found
              </p>
            )}
          </div>

          {/* Search Results */}
          {query ? (
            filteredVideos.length > 0 ? (
              <div className={styles.videoGrid}>
                {filteredVideos.map((video) => (
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
            ) : (
              <div className={styles.noResults}>
                <div className={styles.noResultsIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <h3 className={styles.noResultsTitle}>No hologram content found</h3>
                <p className={styles.noResultsText}>
                  Try adjusting your search terms or browse our categories to discover amazing hologram videos and tutorials.
                </p>
              </div>
            )
          ) : (
            <div className={styles.searchPrompt}>
              <div className={styles.searchPromptIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <h3 className={styles.searchPromptTitle}>Discover Hologram Content</h3>
              <p className={styles.searchPromptText}>
                Enter keywords to find videos about hologram technology, DIY hologram projects, holographic history, or cultural impacts of holograms.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}
