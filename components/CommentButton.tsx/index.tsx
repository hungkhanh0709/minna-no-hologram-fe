"use client"

import type React from "react"

interface CommentButtonProps {
  count: number
  className?: string
  onClick?: () => void
}

export function CommentButton({ count, className = "", onClick }: CommentButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onClick?.()
  }

  return (
    <button onClick={handleClick} className={`comment-button ${className}`} aria-label={`View ${count} comments`}>
      <svg viewBox="0 0 24 24" className="comment-icon">
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <span>{count}</span>
    </button>
  )
}
