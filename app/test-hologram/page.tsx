import styles from './HologramVideo.module.scss'

export default function HologramVideo() {
  return (
    <div className={styles.container}>
      <video src={'/videos/test-hologram.mov'} className={`${styles.video} ${styles.top}`} autoPlay loop muted playsInline />
      <video src={'/videos/test-hologram.mov'} className={`${styles.video} ${styles.bottom}`} autoPlay loop muted playsInline />
      <video src={'/videos/test-hologram.mov'} className={`${styles.video} ${styles.left}`} autoPlay loop muted playsInline />
      <video src={'/videos/test-hologram.mov'} className={`${styles.video} ${styles.right}`} autoPlay loop muted playsInline />
    </div>
  )
}
