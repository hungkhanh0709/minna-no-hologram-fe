'use client'

import { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { FaArrowUpRightDots, FaClock, FaWrench } from 'react-icons/fa6'
import styles from './diy.module.scss'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { API_URLS } from '@/lib/api'
import Loading from '@/components/Loading'
import { VideoCard } from "@/components/VideoCard"
import { Footer } from "@/components/Footer"

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
//   }),
// }

export const fadeUp = (delay = 0.2): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
})


export const fadeIn = (): Variants => ({
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
  }),
})

export default function DIYPage({ params }: { params: { id: string } }) {
  const [diy, setDiy] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  console.log('diyyy', diy)

  useEffect(() => {
    const fetchDiy = async () => {
      try {
        const res = await fetch(API_URLS.DIY_DETAIL(params.id))
        const data = await res.json()
        setDiy(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchDiy()
  }, [params.id])

  if (loading) return <Loading />
  if (!diy) return <p>DIY not found</p>

  return (
    <div className={styles.page}>
      <Header activePage="diy" className={styles.header} />
      <main className={styles.main}>
        <section className={styles.heroContainer}>
          <div className={styles.hero}>
            <motion.div className={styles.heroContent} variants={fadeIn()} initial="hidden" whileInView="visible">
              <h1 className={styles.heroTitle}>{diy.title}</h1>
              <p className={styles.heroSubtitle}>{diy.summary}</p>
              <div className={styles.diyMetrics}>
                <div className={styles.diyMetric}>
                  <FaClock size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>EST. TIME</span>
                    <span className={styles.diyMetricValue}>{diy.estimatedTime}</span>
                  </div>
                </div>
                <div className={styles.diyMetric}>
                  <FaWrench size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>STEPS</span>
                    <span className={styles.diyMetricValue}>{diy.stepCount} steps</span>
                  </div>
                </div>
                <div className={styles.diyMetric}>
                  <FaArrowUpRightDots size={24} />
                  <div className={styles.diyMetricContent}>
                    <span className={styles.diyMetricLabel}>LEVEL</span>
                    <span className={styles.diyMetricValue}>{String(diy.difficulty[0]).toUpperCase() + String(diy.difficulty).slice(1)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.heroImageContainer} variants={fadeIn()} initial="hidden" whileInView="visible">
              <div className={styles.finishedProductLabel}>
                <Image width={40} height={40} alt='' src='/images/finish-product-icon.svg' />
                <span>The Finished Product</span>
              </div>
              <div className={styles.videoContainer}>
                <iframe src={diy.videoUrl} title={diy.title} className={styles.tutorialVideo} allowFullScreen />
              </div>
              <div className={styles.finishedProductLabelBottom}>
                <p>From Zero to</p>
                <strong>120K+ Users Liked</strong>
                <Image width={40} height={40} alt='' src='/images/finish-product-icon-bottom.svg' />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Creative Time */}
        <motion.section
          className={styles.creativeTimeSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
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

        <section className={styles.whatYouNeedSection}>
          <motion.h2 className={styles.sectionTitle} variants={fadeIn()} initial="hidden" whileInView="visible">What you need</motion.h2>
          <div className={styles.materialsContainer}>
            <Image width={500} height={500} src='/images/material.svg' alt='' className={styles.materialsImg} />
            <motion.div className={styles.materialsList} variants={fadeIn()} initial="hidden" whileInView="visible">
              {diy.materials.map((material: any, i: number) => (
                <div key={i} className={styles.materialItem}>
                  <div className={styles.materialNumber}>{i + 1}</div>
                  <div className={styles.materialText}>{material.name}{material.optional ? ' (optional)' : ''}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className={styles.stepByStepSection}>
          <motion.h2 className={styles.sectionTitle} viewport={{ once: true }} variants={fadeIn()} initial="hidden" whileInView="visible">Step-by-step</motion.h2>
          <div className={styles.stepsList}>
            {diy.steps.map((step: any, i: number) => (
              <motion.div key={i} className={styles.stepItem} custom={i} viewport={{ once: true }} variants={fadeIn()} initial="hidden" whileInView="visible">
                {/* <img src={step.imageUrl} alt={step.caption} className={styles.stepImg} /> */}
                <Image width="0"
                  height="0"
                  sizes="100vw" src={`/images/${i + 1}.png`} alt='' className={styles.stepImg} />
                <div className={styles.stepContent}>
                  <div className={styles.stepBadge}>{`STEP ${step.stepNumber}`}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {diy?.relatedDIY && diy?.relatedDIY.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.sectionHeading}>Related DIY Projects</h2>
            <div className={styles.relatedGrid}>
              {diy.relatedDIY.map((v: any) => (

                <VideoCard
                  slug={v.slug}
                  key={v.id}
                  id={v.id}
                  title={v.title}
                  description={``}
                  thumbnail={v.thumbnail}
                  tags={v.tags.map((t: any) => t.name)}
                  likes={v.likeCount}
                  initialLiked={false}
                />

              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
