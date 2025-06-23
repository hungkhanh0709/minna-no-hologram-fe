'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion, Variants } from 'framer-motion'
import { FaArrowUpRightDots, FaClock, FaPlay, FaWrench } from 'react-icons/fa6'
import styles from './diy.module.scss'
import { Header } from '@/components/Header'
import Image from 'next/image'
import { API_URLS } from '@/lib/api'
import Loading from "@/components/Loading"

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

export default function DIYPage({ params }: { params: { id: string } }) {
  const [diy, setDiy] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDiy = async () => {
      try {
        const res = await fetch(API_URLS.DIY_DETAIL(params.id))
        const data = await res.json()
        console.log('data', data)
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
        <motion.section className={styles.heroContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0)}>
          <div className={styles.hero}>
            <motion.div className={styles.heroContent} variants={fadeUp(0.1)}>
              <h1 className={styles.heroTitle}>{diy.title}</h1>
              <p className={styles.heroSubtitle}>{diy.summary}</p>
              <div className={styles.projectMetrics}>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaClock size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>TIME</span>
                    <span className={styles.metricValue}>{diy.estimatedTime}</span>
                  </div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaWrench size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>STEPS</span>
                    <span className={styles.metricValue}>{diy.stepCount}</span>
                  </div>
                </div>
                <div className={styles.metric}>
                  <div className={styles.metricIcon}><FaArrowUpRightDots size={20} /></div>
                  <div className={styles.metricContent}>
                    <span className={styles.metricLabel}>LEVEL</span>
                    <span className={styles.metricValue}>{diy.difficulty}</span>
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
              <div className={styles.videoContainer}>
                <iframe
                  src={diy.videoUrl}
                  title={diy.title}
                  className={styles.tutorialVideo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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

        {/* Materials */}
        <motion.section className={styles.whatYouNeedSection} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0.2)}>
          <motion.div className={styles.sectionHeader} variants={fadeUp(0.3)}>
            <h2 className={styles.sectionTitle}>What you need</h2>
          </motion.div>

          <div className={styles.materialsContainer}>
            <motion.div className={styles.materialsImage} variants={fadeUp(0.4)}>
              <img src="/placeholder.svg?height=300&width=400" alt="DIY Materials" className={styles.materialsImg} />
            </motion.div>


            <motion.div className={styles.materialsList} variants={fadeUp(0.5)}>
              {diy.materials.map((material: any, i: number) => (
                <div key={i} className={styles.materialItem}>
                  <div className={styles.materialNumber}>{i + 1}</div>
                  <div className={styles.materialText}>{material.name}{material.optional ? ' (optional)' : ''}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Steps */}
        <motion.section className={styles.stepByStepSection} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0.2)}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Step-by-step</h2>
          </div>

          <motion.div className={styles.stepsContainer} variants={fadeUp(0.3)}>
            <div className={styles.stepsList}>
              {diy.steps.map((step: any, i: number) => (
                <motion.div key={i} className={styles.stepItem} variants={fadeUp(0.3 + i * 0.1)}>
                  <div className={styles.stepImage}>
                    <img src={step.imageUrl} alt={step.caption} className={styles.stepImg} />
                  </div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepBadge}>{`STEP ${step.stepNumber}`}</div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Related DIY */}
        {diy.relatedDIY?.length > 0 && (
          <motion.section className={styles.relatedVideosSection} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0.2)}>
            <motion.div className={styles.container} variants={fadeUp(0.3)}>
              <h2 className={styles.relatedVideosTitle}>Related DIY Projects</h2>
              <div className={styles.relatedVideosGrid}>
                {diy.relatedDIY.map((related: any, i: number) => (
                  <motion.div key={related.id} className={styles.relatedVideoCard} variants={fadeUp(0.3 + i * 0.1)}>
                    <div className={styles.relatedVideoImage}>
                      <img src={related.thumbnail} alt={related.title} className={styles.relatedVideoImg} />
                    </div>
                    <div className={styles.relatedVideoContent}>
                      <h3 className={styles.relatedVideoTitle}>{related.title}</h3>
                      <p className={styles.relatedVideoDescription}>{related.summary}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        )}
      </main>
    </div>
  )
}
