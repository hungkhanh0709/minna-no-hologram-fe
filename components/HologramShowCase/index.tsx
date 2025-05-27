import React from "react"
import Image from "next/image"
import styles from "./HologramShowcase.module.scss"

interface HologramShowcaseProps {
  imageUrl: string
}

export const HologramShowcase = ({ imageUrl }: HologramShowcaseProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.badgeTopLeft}>
        ✨ The Finished Product
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt="Hologram"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>

      <div className={styles.badgeBottomRight}>
        From Zero to <strong>120K+ Users Liked</strong> 💖
      </div>
    </div>
  )
}
