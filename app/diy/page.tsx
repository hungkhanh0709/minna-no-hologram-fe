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
              <h1 className={styles.heroTitle}>DIY Hologram Projector: Make 3D Images at Home</h1>
              <p className={styles.heroSubtitle}>
                Learn how to create a simple hologram projector using a smartphone and transparent plastic. This fun project lets you display floating 3D images and videos right in your room!
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
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" alt="DIY Hologram Projector Result" className={styles.heroImage} />
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
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="DIY Materials for Hologram Projector" className={styles.materialsImg} />
            </motion.div>

            <motion.div className={styles.materialsList} variants={fadeUp(0.5)}>
              {[
                "Clear plastic sheet (CD case or transparency)", 
                "Ruler and pencil", 
                "Scissors or craft knife",
                "Smartphone with hologram video", 
                "Template for the pyramid", 
                "Tape (clear preferred)", 
                "Dark room for best results"
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
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Tutorial Video" className={styles.tutorialVideo} />
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
              {[
                {
                  title: "Draw Your Template",
                  description: "Print or draw a template with four identical trapezoid shapes. For a 3-5 inch phone, make the small end about 1 cm wide and the wide end about 6 cm, with height around 3.5 cm.",
                  image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=400&h=240"
                },
                {
                  title: "Cut and Assemble the Pyramid",
                  description: "Carefully cut the plastic sheet following your template. Tape the trapezoids together at their sides to form a pyramid with the narrow ends meeting at the top.",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"
                },
                {
                  title: "Set Up and Project",
                  description: "Place your pyramid upside down on your smartphone screen, centered over a hologram video. Turn off the lights for the best effect and watch your 3D hologram float in the air!",
                  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80"
                }
              ].map((step, i) => (
                <motion.div key={i} className={styles.stepItem} variants={fadeUp(0.3 + i * 0.1)}>
                  <div className={styles.stepImage}>
                    <img src={step.image} alt={`Step ${i+1}`} className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>{`STEP ${i+1}`}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
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
              {[
                {
                  title: "Advanced Hologram Techniques",
                  description: "Take your DIY hologram to the next level with multi-panel projections and colored effects.",
                  image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300&q=80"
                },
                {
                  title: "Finding the Best Hologram Videos",
                  description: "Learn where to find high-quality hologram videos specifically designed for pyramid projectors.",
                  image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=300&q=80"
                }
              ].map((video, i) => (
                <motion.div key={i} className={styles.relatedVideoCard} variants={fadeUp(0.3 + i * 0.1)}>
                  <div className={styles.relatedVideoImage}>
                    <img src={video.image} alt={video.title} className={styles.relatedVideoImg} />
                  </div>
                  <div className={styles.relatedVideoContent}>
                    <h3 className={styles.relatedVideoTitle}>{video.title}</h3>
                    <p className={styles.relatedVideoDescription}>{video.description}</p>
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
