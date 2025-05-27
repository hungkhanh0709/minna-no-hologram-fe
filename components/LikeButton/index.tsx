"use client"

import type React from "react"
import { useState } from "react"
import { Heart } from "lucide-react"
import styles from "./LikeButton.module.scss"

interface LikeButtonProps {
  initialLiked?: boolean
  initialCount?: number
  className?: string
}

export function LikeButton({
  initialLiked = false,
  initialCount = 0,
  className = "",
}: LikeButtonProps) {
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [likeCount, setLikeCount] = useState(initialCount)

  const handleToggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsLiked((prev) => !prev)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <button
      onClick={handleToggleLike}
      className={`${styles.likeButton} ${isLiked ? styles.liked : ""} ${className}`}
      aria-label={isLiked ? "Unlike this video" : "Like this video"}
    >
      <Heart
        size={16}
        className={`${styles.likeIcon} ${isLiked ? styles.filled : ""}`}
        fill={isLiked ? "currentColor" : "none"}
      />
      <span>{likeCount}</span>
    </button>
  )
}
