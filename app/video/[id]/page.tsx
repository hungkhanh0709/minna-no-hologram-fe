import styles from "./video-detail.module.scss"
import { Header } from "@/components/Header"
import Image from "next/image"
import { FaPlay } from "react-icons/fa6";

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const videoData = {
    id: params.id,
    title: "Hologram Technology: From Science Fiction to Reality",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&h=600",
    tags: ["hologram", "technology"],
    comments: [
      {
        id: 1,
        avatar: "blue-blob",
        text: "This explanation of hologram technology is amazing! I never knew the history went back to the 1940s.",
      },
      {
        id: 2,
        avatar: "white-bear",
        text: "The part about interference patterns and laser light coherence really helped me understand how holograms work.",
      },
      {
        id: 3,
        avatar: "blue-blob",
        text: "I tried making the DIY hologram pyramid you mentioned at 3:45 in the video. It worked perfectly with my smartphone!",
      },
      {
        id: 4,
        avatar: "white-bear",
        text: "Could you make more videos about holographic displays in medical imaging? That application seems revolutionary.",
      },
      {
        id: 5,
        avatar: "blue-blob",
        text: "The comparison between conventional 3D and true holography was very informative. Thanks for clarifying the differences!",
      },
    ],
    images: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=400&h=240",
        alt: "Hologram display in a dark room showing 3D data",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&h=400",
        alt: "Futuristic holographic interface with data visualization",
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
