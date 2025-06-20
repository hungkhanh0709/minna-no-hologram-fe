import styles from "./video-detail.module.scss"
import { Header } from "@/components/Header"
import Image from "next/image"
import { FaPlay } from "react-icons/fa6";

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const videoData = {
    id: params.id,
    title: "Unlocking the Secrets of the Universe",
    thumbnail: "/placeholder.svg?height=600&width=1200",
    tags: ["science", "universe"],
    comments: [
      {
        id: 1,
        avatar: "blue-blob",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      },
      {
        id: 2,
        avatar: "white-bear",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui",
      },
      {
        id: 3,
        avatar: "blue-blob",
        text: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him",
      },
      {
        id: 4,
        avatar: "white-bear",
        text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms",
      },
      {
        id: 5,
        avatar: "blue-blob",
        text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
      },
    ],
    images: [
      {
        id: 1,
        src: "/placeholder.svg?height=400&width=800",
        alt: "Galaxy with black hole",
      },
      {
        id: 2,
        src: "/placeholder.svg?height=400&width=800",
        alt: "Space station and rocket launch",
      },
    ],
  }

  return (
    <div className={styles.page}>
      <Header activePage='' />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <img
                src={videoData.thumbnail || "/placeholder.svg"}
                alt={videoData.title}
                className={styles.videoThumbnail}
              />
              <button className={styles.playButton}>
                <FaPlay size={32} />
              </button>
            </div>
          </div>

          <div className={styles.videoInfo}>
            <h1 className={styles.videoTitle}>{videoData.title}</h1>

            <div className={styles.tags}>
              {videoData.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag === "science" ? (
                    <svg viewBox="0 0 24 24" className={styles.tagIcon}>
                      <path d="M9 22l-10-10L9 2l10 10L9 22z" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className={styles.tagIcon}>
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M12 2a15 15 0 0 1 0 20" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 12h20" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  )}
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.commentsList}>
              {videoData.comments.map((comment, index) => (
                <div key={comment.id} className={styles.commentItem}>
                  <div className={styles.commentAvatar}>
                    {comment.avatar === "blue-blob" ? (
                      <Image src="/images/hippo-character.svg" width={125} height={120} alt='' />
                    ) : (
                      <Image src="/images/rabbit-character.svg" width={125} height={120} alt='' />
                    )}

                  </div>
                  <div className={styles.commentContent}>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.imageContainer}>
              <img
                src={videoData.images[0].src || "/placeholder.svg"}
                alt={videoData.images[0].alt}
                className={styles.contentImage}
              />
              <button className={styles.imageExpandButton}>
                <svg viewBox="0 0 24 24" className={styles.expandIcon}>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="#4f46e5" strokeWidth="2" />
                </svg>
              </button>
            </div>

            {/* Continue with more comments */}
            <div className={styles.commentsList}>
              {videoData.comments.slice(3, 5).map((comment, index) => (
                <div key={`second-${comment.id}`} className={styles.commentItem}>
                  <div className={styles.commentAvatar}>
                    {comment.avatar === "blue-blob" ? (
                      <Image src="/images/hippo-character.svg" width={125} height={120} alt='' />
                    ) : (
                      <Image src="/images/rabbit-character.svg" width={125} height={120} alt='' />
                    )}
                  </div>
                  <div className={styles.commentContent}>
                    <p>{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second image */}
            <div className={styles.imageContainer}>
              <img
                src={videoData.images[1].src || "/placeholder.svg"}
                alt={videoData.images[1].alt}
                className={styles.contentImage}
              />
              <button className={styles.imageExpandButton}>
                <svg viewBox="0 0 24 24" className={styles.expandIcon}>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" fill="none" stroke="#4f46e5" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
