'use client'

import { motion, Variants } from "framer-motion"
import { FaArrowUpRightDots, FaClock, FaPlay, FaWrench } from "react-icons/fa6"
import styles from "./diy.module.scss"
import { Header } from "@/components/Header"
import Image from "next/image"

export const fadeUp = (delay = 0.2): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easeOut
    },
  },
})

export default function DIYPage() {
  return (
    <div className={styles.page}>
      <Header activePage="diy" className={styles.header} />
      <main className={styles.main}>
        {/* Hero Section */}
        <motion.section
          className={styles.heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0)}
        >
          <div className={styles.hero}>
            <motion.div className={styles.heroContent} variants={fadeUp(0.1)}>
              <h1 className={styles.heroTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>
              <p className={styles.heroSubtitle}>
                Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
              </p>

              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaClock size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>PREP TIME</span>
                    <span className={styles.metricValue}>5 minutes</span>
                  </div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaWrench size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>DIY TIME</span>
                    <span className={styles.metricValue}>15 minutes</span>
                  </div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaArrowUpRightDots size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>LEVEL</span>
                    <span className={styles.metricValue}>Easy</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.heroImageContainer} variants={fadeUp(0.2)}>
              <div className={styles.finishedProductLabel}>
                <div className={styles.labelIcon}>
                  <Image width={65} height={65} alt='' src='/images/finish-product-icon.svg' />
                </div>
                <span>The Finished Product</span>
              </div>
              <img src="/placeholder.svg?height=400&width=400" alt="Hologram Pyramid" className={styles.heroImage} />
              <div className={styles.userLikes}>
                <div className={styles.likesText}>
                  <span>From Zero to <br />100K+ Users Liked</span>
                </div>
                <div className={styles.likesAvatar}>
                  <Image width={65} height={65} alt='' src='/images/love-it-icon.svg' />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Creative Time */}
        <motion.section
          className={styles.creativeTimeSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp(0.2)}
        >
          <div className={styles.creativeTimeImage}>
            <Image
              width={472}
              height={311}
              src="/images/creative-time.svg"
              alt="Creative Time Illustration"
              className={styles.creativeTimeImg}
            />
          </div>
        </motion.section>

        {/* What You Need */}
        <motion.section
          className={styles.whatYouNeedSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.2)}
        >
          <motion.div className={styles.sectionHeader} variants={fadeUp(0.3)}>
            <h2 className={styles.sectionTitle}>What you need</h2>
          </motion.div>

          <div className={styles.materialsContainer}>
            <motion.div className={styles.materialsImage} variants={fadeUp(0.4)}>
              <img src="/placeholder.svg?height=300&width=400" alt="DIY Materials" className={styles.materialsImg} />
            </motion.div>

            <motion.div className={styles.materialsList} variants={fadeUp(0.5)}>
              {[
                "White flowers", "Coloring for cut flowers", "Drink cup",
                "Disposable gloves", "Scissors", "4 small ziplock bags", "Newspaper (for use on a desk)"
              ].map((text, i) => (
                <div key={i} className={styles.materialItem}>
                  <div className={styles.materialNumber}>{i + 1}</div>
                  <div className={styles.materialText}>{text}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Tutorial Section */}
        <motion.section
          className={styles.tutorialSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.2)}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tutorial</h2>
          </div>
          <motion.div className={styles.videoContainer} variants={fadeUp(0.3)}>
            <img src="/placeholder.svg?height=400&width=800" alt="Tutorial Video" className={styles.tutorialVideo} />
            <button className={styles.playButton}>
              <FaPlay size={32} />
            </button>
          </motion.div>
        </motion.section>

        {/* Step-by-step */}
        <motion.section
          className={styles.stepByStepSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.2)}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Step-by-step</h2>
          </div>

          <motion.div className={styles.stepsContainer} variants={fadeUp(0.3)}>
            <div className={styles.stepsList}>
              {[1, 2, 3].map((step, i) => (
                <motion.div key={i} className={styles.stepItem} variants={fadeUp(0.3 + i * 0.1)}>
                  <div className={styles.stepImage}>
                    <img src={`/placeholder.svg?height=300&width=300`} alt={`Step ${step}`} className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>{`STEP ${step}`}</div>
                    <h3 className={styles.stepTitle}>Lorem ipsum dolor sit amet, consectetur.</h3>
                    <p className={styles.stepDescription}>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Related Videos */}
        <motion.section
          className={styles.relatedVideosSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.2)}
        >
          <motion.div className={styles.container} variants={fadeUp(0.3)}>
            <h2 className={styles.relatedVideosTitle}>Related DIY videos</h2>
            <div className={styles.relatedVideosGrid}>
              {[1, 2].map((num) => (
                <motion.div key={num} className={styles.relatedVideoCard} variants={fadeUp(0.3 + num * 0.1)}>
                  <div className={styles.relatedVideoImage}>
                    <img src="/placeholder.svg?height=200&width=300" alt={`Video title ${num}`} className={styles.relatedVideoImg} />
                  </div>
                  <div className={styles.relatedVideoContent}>
                    <h3 className={styles.relatedVideoTitle}>Video title {num}</h3>
                    <p className={styles.relatedVideoDescription}>Description for related video {num}.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  )
}
