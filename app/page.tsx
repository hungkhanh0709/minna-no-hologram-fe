import Link from "next/link"
import Image from "next/image"
import { Play, ArrowRight, Clock, PenToolIcon as Tool, BarChart, House, Hourglass, Telescope, Earth, PaintRoller, Tag, Check } from "lucide-react"
import styles from "./page.module.css"
import { HologramShowcase } from "@/components/HologramShowCase"
import { LikeButton } from "../components/LikeButton"


export default function HomePage() {
  // Sample video data
  const videos = [
    {
      id: "1",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 15,
      isLiked: true,
    },
    {
      id: "3",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 89,
      isLiked: false,
    },
    {
      id: "4",
      title: "Cultural Wonders: Traditions You Must See",
      thumbnail: "/",
      description: "Body text for whatever you'd like to add more to the subheading.",
      tags: ["science", "universe"],
      likes: 234,
      isLiked: true,
    },
  ]


  return (
    <div className={styles.homepage}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            width={140}
            height={54}
            src="/logo.svg"
            alt="Logo"
          />
        </div>

        <nav className={styles.navigation}>
          <Link href="/" className={`${styles.navItem} ${styles.active}`}>
            <House fill="#2F5AE5" className={styles.navIcon} />
            <span>HOME</span>
          </Link>
          <Link href="/science" className={styles.navItem}>
            <Telescope stroke="#000" className={styles.navIcon} />
            <span>SCIENCE</span>
          </Link>
          <Link href="/history" className={styles.navItem}>
            <Hourglass stroke="#000" className={styles.navIcon} />
            <span>HISTORY</span>
          </Link>
          <Link href="/culture" className={styles.navItem}>
            <Earth stroke="#000" className={styles.navIcon} />
            <span>CULTURE</span>
          </Link>
          <Link href="/diy" className={styles.navItem}>
            <PaintRoller className={styles.navIcon} />
            <span>DIY</span>
          </Link>
        </nav>

        <div className={styles.searchContainer}>
          <input type="text" className={styles.searchInput} placeholder="What will you explore today?" />
          <button className={styles.searchButton}>
            <svg viewBox="0 0 24 24" className={styles.searchIcon}>
              <circle cx="11" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Landing page title</h1>
            <p>
              Subheading that sets up context, shares more info about the website, or generally gets people psyched to
              keep scrolling.
            </p>
            <button className={styles.playButton}>
              <Play size={24} />
            </button>
          </div>
        </section>

        <section className={styles.recentVideos}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Recent video upload</h2>

            <div className={styles.videoGrid}>
              {videos.map((video) => (
                <Link href={`/videos/${video.id}`} key={video.id} className={styles.videoCard}>
                  <div className={styles.thumbnail}>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className={styles.thumbnailImage}
                    />
                  </div>
                  <div className={styles.videoMeta}>
                    <div className={styles.tagsAndLike}>
                      <div className={styles.tagsLeft}>
                        {video.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            <Check stroke="#000" className={styles.tagIcon} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <LikeButton
                        initialLiked={video.isLiked}
                        initialCount={video.likes}
                        className={styles.btnLike}
                      />

                    </div>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    <p className={styles.videoDescription}>{video.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.viewMoreContainer}>
              <button className={styles.viewMoreButton}>View more</button>
            </div>
          </div>
        </section>

        <section className={styles.recentDiy}>
          <section className="flex flex-col gap-8 md:flex-row md:items-start">
            {/* Tablet/Mobile */}
            <div className="block md:hidden px-2">
              <div className="flex items-center gap-2">
                <div className={styles.diyHeader}>
                  <div className={styles.diyIcon}>
                    <Image
                      width={140}
                      height={54}
                      src="/hologram.png"
                      alt="Icon hologram"
                    />
                  </div>
                  <h2 className={styles.diyTitle}>Recent DIY Hologram</h2>
                </div>
              </div>
            </div>

            {/* Image block */}
            <div className="flex-1 order-2 md:order-none">
              <HologramShowcase imageUrl="/images/hologram-demo.png" />
            </div>

            {/* Text content */}
            <div className="flex-1 space-y-4 order-3 md:order-none">
              {/* Desktop title only */}
              <div className="hidden md:flex items-center gap-2">
                <div className={styles.diyHeader}>
                  <div className={styles.diyIcon}>
                    <Image
                      width={140}
                      height={54}
                      src="/hologram.png"
                      alt="Icon hologram"
                    />
                  </div>
                  <h2 className={styles.diyTitle}>Recent DIY Hologram</h2>
                </div>
              </div>
              <div className={styles.diyContent}>
                <h3 className={styles.diyProjectTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing ipsum</h3>
                <p className={styles.diyDescription}>
                  Experience the future of payments: fast, secure, and tailored for the next generation's convenience and
                  trust.
                </p>

                <div className={styles.diyMetrics}>
                  <div className={styles.diyMetric}>
                    <Clock className={styles.diyMetricIcon} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>PREP TIME</span>
                      <span className={styles.diyMetricValue}>5 minutes</span>
                    </div>
                  </div>
                  <div className={styles.diyMetric}>
                    <Tool className={styles.diyMetricIcon} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>DIY TIME</span>
                      <span className={styles.diyMetricValue}>15 minutes</span>
                    </div>
                  </div>
                  <div className={styles.diyMetric}>
                    <BarChart className={styles.diyMetricIcon} />
                    <div className={styles.diyMetricContent}>
                      <span className={styles.diyMetricLabel}>LEVEL</span>
                      <span className={styles.diyMetricValue}>Easy</span>
                    </div>
                  </div>
                </div>

                <Link href="/diy/hologram-detail" className={styles.viewDetailLink}>
                  View detail <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>

          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>View more</button>
          </div>
        </section>
      </main>
    </div>
  )
}
