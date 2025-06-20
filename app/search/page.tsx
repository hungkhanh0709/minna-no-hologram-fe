"use client"

import { useSearchParams } from "next/navigation"
import styles from "./search.module.scss"
import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const allVideos = [
    {
      id: "1",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/images/food-wine.png",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["culture", "traditions"],
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      title: "Quantum Physics: The Mysteries of the Universe",
      thumbnail: "/images/croissant.png",
      description: "Exploring the fascinating world of quantum mechanics and its implications.",
      tags: ["science", "universe"],
      likes: 287,
      isLiked: true,
    },
    {
      id: "3",
      title: "Ancient Civilizations: Lost Technologies",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Exploring the remarkable technologies of ancient civilizations.",
      tags: ["history", "ancient"],
      likes: 89,
      isLiked: false,
    },
    {
      id: "4",
      title: "DIY Hologram Pyramid Tutorial",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Learn how to create amazing hologram effects at home.",
      tags: ["diy", "hologram"],
      likes: 234,
      isLiked: true,
    },
    {
      id: "5",
      title: "The Science Behind Black Holes",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Understanding the physics of these cosmic phenomena.",
      tags: ["science", "universe"],
      likes: 156,
      isLiked: false,
    },
    {
      id: "6",
      title: "Medieval Castles: Engineering Marvels",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Discover the ingenious design and construction of medieval fortresses.",
      tags: ["history", "medieval"],
      likes: 203,
      isLiked: true,
    },
    {
      id: "7",
      title: "Global Cuisine: Stories Behind the Dishes",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Discover the cultural significance of iconic dishes from around the world.",
      tags: ["culture", "cuisine"],
      likes: 178,
      isLiked: false,
    },
    {
      id: "8",
      title: "Creative DIY Projects for Beginners",
      thumbnail: "/placeholder.svg?height=240&width=400",
      description: "Easy and fun DIY projects you can do at home.",
      tags: ["diy", "creative"],
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
                <h3 className={styles.noResultsTitle}>No results found</h3>
                <p className={styles.noResultsText}>
                  Try adjusting your search terms or browse our categories to discover amazing content.
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
              <h3 className={styles.searchPromptTitle}>Start your search</h3>
              <p className={styles.searchPromptText}>
                Enter keywords to find videos about science, history, culture, or DIY projects.
              </p>
            </div>
          )}

        </div>
      </main>

    </div>
  )
}
