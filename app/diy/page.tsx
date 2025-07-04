import { Header } from "@/components/Header"
import { VideoCard } from "@/components/VideoCard"
import styles from "./diy.module.scss"
import { Footer } from "@/components/Footer"
import { API_URLS } from "@/lib/api"

export default async function DIYPage() {
  // const res = await fetch(`${API_URLS.DIY_SEARCH}`)
  const res = await fetch(`https://minna-no-hologram-apis.fly.dev/v1/diy`)

  const data = await res.json()
  console.log('data', data)
  const diyList = data.results

  return (
    <div className={styles.page}>
      <Header activePage="diy" />

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>DIY Hologram Projects</h1>

          <div className={styles.videoGrid}>
            {diyList.map((item: any) => (
              <VideoCard
                key={item.id}
                id={item.id}
                slug={`${item.slug}`}
                title={item.title}
                description={item.summary}
                thumbnail={item.thumbnail}
                tags={item.tags.map((tag: any) => tag.name)}
                likes={item.likeCount}
                initialLiked={false}
              />
            ))}
          </div>

          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>
              View more
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
