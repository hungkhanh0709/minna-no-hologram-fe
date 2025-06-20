"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import styles from "./video-card.module.scss"
import { FaHeart } from "react-icons/fa6"

export interface VideoCardProps {
  id: string
  title: string
  description: string
  thumbnail: string
  tags: string[]
  likes: number
  initialLiked?: boolean
  className?: string
}

export function VideoCard({
  id,
  title,
  description,
  thumbnail,
  tags,
  likes: initialLikes,
  initialLiked = false,
  className = "",
}: VideoCardProps) {
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [likes, setLikes] = useState(initialLikes)

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <Link href={`/video/${id}`} className={`${styles.card} ${className}`}>
      {/* Thumbnail */}
      <div className={styles.thumbnail}>
        <img src={thumbnail || "/placeholder.svg"} alt={title} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Tags and Like Button */}
        <div className={styles.tagsAndLike}>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                <svg
                  className={styles.tagIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{tag}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handleLikeClick}
            className={`${styles.likeButton} ${isLiked ? styles.liked : ""}`}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <FaHeart size={16} className={`${styles.likeIcon} ${isLiked ? styles.filled : ""}`} />
            <span>{likes}</span>
          </button>
        </div>

        {/* Title */}
        <h3 className={styles.title}>{title}</h3>

        {/* Description */}
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  )
}

